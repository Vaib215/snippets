import AddCode from "@/components/add-code";
import SnippetsList from "@/components/snippets-list";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  return (
    <div className="flex h-screen flex-col gap-4 p-4">
      <AddCode />
      <div className="h-[90vh] overflow-hidden grid grid-cols-2 gap-4">
        <SnippetsList />
      </div>
    </div>
  );
}
