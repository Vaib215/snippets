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
import { Snippet } from "@/utils/code";
import { toast } from "sonner";
import { toggleVisibility } from "@/db/queries";

export default function ShareDialog({
  children,
  snippet,
}: {
  children: React.ReactNode;
  snippet: Pick<Snippet, "id" | "name" | "visibility">;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger type="button" asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Share <q>{snippet.name}</q> with others
          </AlertDialogTitle>
          <AlertDialogDescription>
            By making this snippet public, anyone with the link can view this
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              await toggleVisibility(snippet.id);
              toast.success(
                `${snippet.name} is now ${
                  snippet.visibility === "public" ? "private" : "public"
                }`,
                {
                  duration: 3000,
                  cancel: {
                    label: "Undo",
                    onClick: async () => {
                      await toggleVisibility(snippet.id);
                      toast.success(
                        `${snippet.name} is now ${snippet.visibility}`,
                        {
                          duration: 3000,
                        }
                      );
                    },
                  },
                  dismissible: true,
                }
              );
            }}
          >
            Make {snippet.visibility === "public" ? "private" : "public"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
