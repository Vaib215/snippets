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
import { Eye, Loader2, Plus, Save, X } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { PreviewDialog } from "./preview-dialog";
import { saveCode } from "@/utils/code";
import { useRouter } from "next/navigation";
import CodeEditor from "./code-editor";
import { getPackageNames } from "@/app/actions";

export type AddCodeInputs = {
  name: string;
  code: string;
  packages: string[];
};

export default function AddCode() {
  const [code, setCode] = useState("");
  const [packages, setPackages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddCodeInputs>();

  const closeRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<AddCodeInputs> = async (data) => {
    if (!window) return;
    await saveCode({ ...data, id: window.crypto.randomUUID(), code });
    router.refresh();
    closeRef.current?.click();
  };

  useEffect(() => {
    reset({
      code: code,
    });
    if (!code) {
      setPackages([]);
      return;
    }
    setLoading(true);
    getPackageNames(code).then((res) => {
      setPackages(res);
      setLoading(false);
    });
  }, [code]);

  return (
    <Sheet>
      <SheetTrigger className="self-end" asChild>
        <Button>
          <Plus />
          Add Snippet
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="sm:max-w-[50vw] w-full">
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
            <Input
              id="name"
              type="text"
              {...register("name", { required: true })}
              placeholder="Give a cute name to your snippet"
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
            </Label>
            <div className="rounded-xl overflow-hidden">
              <CodeEditor code={code} setCode={setCode} />
              <Input
                className="hidden"
                {...register("code", {
                  required: true,
                })}
              />
            </div>
            <div>
              <Label htmlFor="packages">
                {loading && <Loader2 className="animate-spin mr-2" />}
                Packages{" "}
                <small>
                  (optional, change only when you see error in preview)
                </small>
              </Label>
              <Input
                id="packages"
                type="text"
                disabled={loading}
                value={packages?.join(",")}
                onChange={(e) => {
                  setPackages(e.target.value.split(","));
                  reset({ packages: e.target.value.split(",") });
                }}
                placeholder="Extracted packages from the code"
              />
            </div>
          </div>
          <div className="justify-self-start flex gap-x-4">
            <Button>
              <Save className="mr-2" />
              Save Changes
            </Button>
            <PreviewDialog code={code} packages={packages}>
              <Button variant={"secondary"}>
                <Eye className="mr-2" />
                Preview
              </Button>
            </PreviewDialog>
            <SheetClose asChild>
              <Button
                ref={closeRef}
                onClick={() => {
                  reset();
                  setCode("");
                }}
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
