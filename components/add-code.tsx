"use client";
import { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Eye, FileQuestion, Loader, Save, X } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { PreviewDialog } from "./preview-dialog";
import { saveCode } from "@/utils/code";
import { useRouter } from "next/navigation";
import CodeEditor from "./code-editor";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { getSnippet } from "@/db/queries";

export type AddCodeInputs = {
  name: string;
  code: string;
  packages: string;
};

export default function AddCode({
  children,
  edit,
}: {
  children: React.ReactNode;
  edit?: number;
}) {
  const [internalComponents, setInternalComponents] = useState<string[]>([]);
  const [code, setCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [packages, setPackages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    handleSubmit,
    reset,
    control,
    getValues,
    register,
    formState: { errors },
  } = useForm<AddCodeInputs>();

  const closeRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<AddCodeInputs> = async (data) => {
    setIsLoading(true);
    await saveCode({
      ...data,
      code: data.code ?? code,
      packages: data.packages.length ? data.packages.split(",") : packages,
      ...(edit ? { id: edit } : {}),
      visibility: "private",
    });
    toast.success(`${edit ? "Updated" : "Added"} snippet`);
    setCode("");
    setPackages([]);
    setInternalComponents([]);
    reset();
    setIsLoading(false);
    router.refresh();
    closeRef.current?.click();
  };

  const loadSnippet = async (id: number) => {
    const snippet = await getSnippet(id);
    if (!snippet || !edit) return;
    setCode(snippet.code!);
    setPackages(snippet.packages ?? []);
    reset({
      name: snippet.name!,
      code: snippet.code!,
      packages: snippet.packages?.join(","),
    });
  };

  useEffect(() => {
    reset({
      code,
      name: getValues("name"),
    });
    if (!code) {
      return;
    }
    const regex =
      /import\s+(?:{[^}]*}|\*\s+as\s+[\w\d_$]+|[\w\d_$]+)\s+from\s+['"]([^'"]*)['"]/g;
    const matches = code.matchAll(regex);
    const importedPackages = Array.from(matches, (match) => match[1].trim());

    if (importedPackages?.length === 0) {
      reset({ packages: undefined });
      setInternalComponents([]);
      return;
    }
    setInternalComponents(
      (importedPackages as string[])
        ?.filter((pkg) => pkg.startsWith("@/") || pkg.startsWith("./"))
        .map((p) => p.split("/").pop() as string)
    );
    const packages = importedPackages
      .filter((p) => !p.startsWith("@/") && !p.startsWith("./"))
      .join(",");
    setPackages(
      importedPackages.filter((p) => !p.startsWith("@/") && !p.startsWith("./"))
    );
    reset({
      packages,
      name: getValues("name"),
      code: getValues("code"),
    });
  }, [code]);

  useEffect(() => {
    if (!edit) return;
    loadSnippet(edit);
    setIsOpen(true);
  }, [edit]);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (edit && !open) {
          router.push("/");
        }
      }}
    >
      <SheetTrigger className="self-end" asChild>
        {children}
      </SheetTrigger>
      <SheetContent side={"left"} className="sm:max-w-2xl sm:min-w-max w-full">
        <SheetHeader>
          <SheetTitle>{edit ? "Edit" : "Add"} Snippet</SheetTitle>
          <SheetDescription>
            {edit
              ? "Missed something in your snippet? Edit it here."
              : "Create mini components that can be resused in your code."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid items-center gap-2">
            <Label htmlFor="name">
              Name*{" "}
              {errors.name && (
                <span className="text-red-500 place-self-start px-2 py-1 rounded">
                  (This field is required)
                </span>
              )}
            </Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  id="name"
                  type="text"
                  placeholder="Name of the snippet"
                  {...field}
                />
              )}
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="code">
              Code*
              {errors.code && (
                <span className="text-red-500 place-self-start px-2 py-1 rounded">
                  (This field is required)
                </span>
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FileQuestion size={16} className="mx-2" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <ul className="list-disc">
                      <li>Your code must have a default export.</li>
                      <li>
                        It should not include any nextjs specific imports.
                      </li>
                      <li>
                        This is rendered in a vite react typescript environment.
                      </li>
                    </ul>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="rounded-xl overflow-hidden">
              <CodeEditor code={code} setCode={setCode} />
            </div>
            <div>
              <Label htmlFor="packages">
                Packages{" "}
                <small>
                  (optional, change only when you see error in preview)
                </small>
              </Label>

              <Input
                id="packages"
                type="text"
                placeholder="Extracted packages from the code"
                {...register("packages")}
              />
            </div>
          </div>
          <div className="justify-self-start flex gap-x-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader className="animate-spin mr-2" />
              ) : (
                <Save className="mr-2" />
              )}
              {edit ? "Save Changes" : "Create Snippet"}
            </Button>
            <PreviewDialog
              code={code}
              packages={packages}
              internalComponents={internalComponents}
            >
              <Button type="button" variant={"secondary"}>
                <Eye className="mr-2" />
                Preview
              </Button>
            </PreviewDialog>
            <SheetClose asChild>
              <Button
                ref={closeRef}
                onClick={() => reset()}
                variant={"destructive"}
                type="button"
              >
                <X className="mr-2" />
                Cancel
              </Button>
            </SheetClose>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
