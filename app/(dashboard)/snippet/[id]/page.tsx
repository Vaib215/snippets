import { auth } from "@/auth";
import SnippetsList from "@/components/snippets-list";
import TogglePreview from "@/components/toggle-preview";
import { cn } from "@/lib/utils";
import React from "react";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const session = await auth();
  return (
    <div
      className={cn(
        "flex-1 h-[88vh] overflow-hidden grid",
        session?.user && "grid-cols-2"
      )}
    >
      <TogglePreview
        id={parseInt(params.id)}
        mode={session?.user ? "vertical" : "horizontal"}
      />
      {session?.user && (
        <SnippetsList
          className="p-4 h-[90vh] overflow-x-hidden overflow-y-auto"
          hideOptions
        />
      )}
    </div>
  );
}
