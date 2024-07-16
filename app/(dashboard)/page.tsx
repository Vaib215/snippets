import { auth } from "@/auth";
import SnippetsList from "@/components/snippets-list";
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

  return <SnippetsList />;
}
