"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteCode } from "@/utils/code";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export default function DeleteDialog({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger type="button" asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            snippet.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground"
            onClick={async () => {
              await deleteCode(id);
              toast(
                <span className="text-destructive">
                  <Trash2 size={16} className="mr-2" />
                  Snippet deleted
                </span>
              );
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
