import Preview from "./preview";
import CodeEditor from "./code-editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { getSnippet } from "@/db/queries";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const TogglePreview = async ({ id }: { id: number }) => {
  const userId = (await auth())?.user?.email;
  if (!userId) redirect("/");
  const snippet = await getSnippet(id, userId);
  if (!snippet) redirect("/");

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <Preview
          code={snippet.code ?? ""}
          packages={snippet.packages ?? []}
          className="!h-full !overflow-y-auto !w-full"
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <CodeEditor code={snippet.code ?? ""} readOnly height="100%" />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default TogglePreview;
