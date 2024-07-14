"use client";
import { getCodes, Snippet } from "@/utils/code";
import React, { useState } from "react";
import { Button } from "./ui/button";
import TogglePreview from "./toggle-preview";
import { Trash2 } from "lucide-react";
import DeleteDialog from "./delete-dialog";

export default function SnippetsList() {
  const codes = getCodes();
  const [snippet, setSnippet] = useState<Snippet | null>(codes[0]);

  if (!snippet) return <p>No snippets found</p>;

  return (
    <>
      <TogglePreview packages={snippet.packages} ui={snippet.code} />
      <ul className="flex flex-col gap-2">
        {codes.map((code) => (
          <li key={code.id} className="w-full flex">
            <Button
              variant={"secondary"}
              className="w-full rounded items-center justify-between"
              onClick={() => setSnippet(code)}
            >
              <span>{code.name}</span>
              <DeleteDialog id={code.id} onAction={() => setSnippet(null)}>
                <Button
                  className="h-8 rounded group duration-300"
                  variant={"destructive"}
                >
                  <Trash2 size={16} />
                  <span className="w-0 opacity-0 group-hover:opacity-100 group-hover:ml-2 group-hover:w-fit">
                    Delete
                  </span>
                </Button>
              </DeleteDialog>
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
