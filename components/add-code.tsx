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
import { CheckCircle2, Eye, FileQuestion, Plus, Save, X } from "lucide-react";
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

export type AddCodeInputs = {
  name: string;
  code: string;
  packages: string;
};

export default function AddCode() {
  const [internalComponents, setInternalComponents] = useState<string[]>([]);
  const {
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<AddCodeInputs>();

  const closeRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<AddCodeInputs> = async (data) => {
    await saveCode({ ...data, packages: data.packages.split(",") });
    toast(
      <div className="flex">
        <CheckCircle2 className="mr-2" />
        <span>Added snippet</span>
      </div>
    );
    router.refresh();
    closeRef.current?.click();
  };

  useEffect(() => {
    const code = watch("code");
    if (!code) {
      return;
    }
    const regex =
      /import\s+(?:{[^}]*}|\*\s+as\s+[\w\d_$]+|[\w\d_$]+)\s+from\s+['"]([^'"]*)['"]/g;
    const matches = code.matchAll(regex);
    const importedPackages = Array.from(matches, (match) => match[1].trim());

    if (importedPackages?.length === 0) {
      reset({ packages: "" });
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
    reset({
      packages,
    });
  }, [watch("code")]);

  return (
    <Sheet>
      <SheetTrigger className="self-end" asChild>
        <Button>
          <Plus />
          Add Snippet
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="sm:max-w-2xl sm:min-w-max w-full">
        <SheetHeader>
          <SheetTitle>Add Snippet</SheetTitle>
          <SheetDescription>
            Create mini components that can be resused in your code.
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
              <Controller
                name="code"
                control={control}
                render={({ field }) => (
                  <CodeEditor code={field.value} setCode={field.onChange} />
                )}
              />
            </div>
            <div>
              <Label htmlFor="packages">
                Packages{" "}
                <small>
                  (optional, change only when you see error in preview)
                </small>
              </Label>
              <Controller
                name="packages"
                control={control}
                render={({ field }) => (
                  <Input
                    id="packages"
                    type="text"
                    placeholder="Extracted packages from the code"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="justify-self-start flex gap-x-4">
            <Button>
              <Save className="mr-2" />
              Save Changes
            </Button>
            <PreviewDialog
              code={watch("code")}
              packages={watch("packages")?.split(",")}
              internalComponents={internalComponents}
            >
              <Button variant={"secondary"}>
                <Eye className="mr-2" />
                Preview
              </Button>
            </PreviewDialog>
            <SheetClose asChild>
              <Button
                ref={closeRef}
                onClick={() => reset()}
                variant={"destructive"}
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
