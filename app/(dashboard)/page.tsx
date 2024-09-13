import { auth } from "@/auth";
import AddCode from "@/components/add-code";
import SnippetsList from "@/components/snippets-list";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default async function Home({
  searchParams,
}: {
  searchParams: { edit: string };
}) {
  const session = await auth();

  if (!session) {
    redirect("/landing");
  }

  return (
    <>
      {searchParams.edit && (
        <AddCode edit={parseInt(searchParams.edit)}>
          <></>
        </AddCode>
      )}
      <SnippetsList />
    </>
  );
}
