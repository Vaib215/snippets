import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import Preview from "./preview";

export function PreviewDialog({
  code,
  children,
  packages,
}: {
  code: string;
  children: ReactNode;
  packages: string[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="grid aspect-square p-0 sm:max-w-xl w-full">
        <DialogTitle className="p-2 pt-4 text-center">Preview</DialogTitle>
        <div className="aspect-square sm:max-w-xl w-full">
          <Preview packages={packages} code={code} className="sm:!max-w-xl" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
