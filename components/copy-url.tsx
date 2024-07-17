"use client";
import React from "react";
import { Button } from "./ui/button";
import { ClipboardIcon } from "lucide-react";
import { toast } from "sonner";

export default function CopyURLToClipboard({
  id,
  hideOptions,
}: {
  id: number;
  hideOptions: boolean;
}) {
  return (
    <Button
      onClick={async () => {
        await navigator.clipboard.writeText(
          `${window.location.origin}/snippet/${id}`
        );
        toast.success("URL copied to clipboard", { duration: 3000 });
      }}
      variant={"outline"}
      title="Copy URL to clipboard"
      className="h-full rounded group duration-75"
    >
      <ClipboardIcon size={16} />
      {!hideOptions && <span className="hidden ml-2 md:inline">Copy URL</span>}
    </Button>
  );
}
