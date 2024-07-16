import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import Preview from "./preview";
import { Maximize2, X } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { Button } from "./ui/button";

const previewDialogVariants = cva("flex flex-col duration-600 p-0", {
  variants: {
    mode: {
      default: "sm:max-w-xl aspect-square w-full",
      fullscreen: "max-w-screen w-full h-screen",
    },
  },
  defaultVariants: {
    mode: "default",
  },
});

export function PreviewDialog({
  code,
  children,
  packages,
  internalComponents,
}: {
  code: string;
  children: ReactNode;
  packages: string[];
  internalComponents: string[];
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={previewDialogVariants({
          mode: isFullscreen ? "fullscreen" : "default",
        })}
      >
        <div className="flex items-center justify-between pt-2 -mb-3 px-4">
          <DialogTitle>Preview</DialogTitle>
          <div className="flex items-center space-x-2">
            <Button
              size={"icon"}
              variant={"secondary"}
              className="w-8 h-8 rounded"
              onClick={() => {
                setIsFullscreen(!isFullscreen);
              }}
            >
              <Maximize2 className="cursor-pointer" size={16} />
            </Button>
            <DialogClose asChild>
              <Button
                size={"icon"}
                variant={"secondary"}
                className="w-8 h-8 rounded"
              >
                <X className="cursor-pointer" size={16} />
              </Button>
            </DialogClose>
          </div>
        </div>
        <Preview
          packages={packages}
          code={code}
          internalComponents={internalComponents}
        />
      </DialogContent>
    </Dialog>
  );
}
