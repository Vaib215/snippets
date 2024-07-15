import { auth } from "@/auth";
import Navbar from "@/components/layout/navbar";
import SnippetsList from "@/components/snippets-list";
import TogglePreview from "@/components/toggle-preview";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default async function Home({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) {
  const session = await auth();

  if (!session) {
    redirect("/landing");
  }

  return (
    <div className="flex h-screen flex-col gap-4 p-4">
      <Navbar />
      <div className="h-[90vh] overflow-hidden grid grid-cols-2 gap-4">
        <TogglePreview id={parseInt(searchParams.id)} />
        <SnippetsList />
      </div>
    </div>
  );
}
