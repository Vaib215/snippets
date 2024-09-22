import { auth } from "@/auth";
import SnippetsList from "@/components/snippets-list";
import TogglePreview from "@/components/toggle-preview";
import { cn } from "@/lib/utils";

import { Metadata, ResolvingMetadata } from "next";
import { getSnippetName } from "@/db/queries";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id);
  const snippet = await getSnippetName(id);

  return {
    title: `${snippet?.name ?? "Made using"} - Snippets`,
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: {
    id: string;
  };
  searchParams: {
    mode: string;
  };
}) {
  const session = await auth();
  return (
    <div
      className={cn(
        "flex-1 h-[88vh] overflow-hidden grid",
        searchParams.mode !== "preview" && session?.user && "grid-cols-2"
      )}
    >
      <TogglePreview
        id={parseInt(params.id)}
        mode={
          searchParams.mode === "preview"
            ? "preview"
            : session?.user
            ? "vertical"
            : "horizontal"
        }
      />
      {searchParams.mode !== "preview" && session?.user && (
        <SnippetsList
          className="p-4 h-[90vh] overflow-x-hidden overflow-y-auto"
          hideOptions
        />
      )}
    </div>
  );
}
