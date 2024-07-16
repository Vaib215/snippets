import SnippetsList from "@/components/snippets-list";
import TogglePreview from "@/components/toggle-preview";
import React from "react";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="flex-1 grid grid-cols-2">
      <TogglePreview id={parseInt(params.id)} />
      <SnippetsList className="p-4 h-[90vh] overflow-x-hidden overflow-y-auto" />
    </div>
  );
}
