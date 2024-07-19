import Preview from "./preview";
import CodeEditor from "./code-editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { getSnippet } from "@/db/queries";
import { redirect } from "next/navigation";

const TogglePreview = async ({
  id,
  mode,
  className,
  preview = false,
}: {
  id: number;
  mode?: "vertical" | "horizontal";
  className?: string;
  preview?: boolean;
}) => {
  const snippet = await getSnippet(id, preview);
  if (!snippet) redirect("/");

  const regex =
    /import\s+(?:{[^}]*}|\*\s+as\s+[\w\d_$]+|[\w\d_$]+)\s+from\s+['"]([^'"]*)['"]/g;
  const matches = snippet.code?.matchAll(regex) ?? [];
  const importedPackages = Array.from(matches, (match) => match[1].trim());
  const internalComponents = (importedPackages as string[])
    ?.filter((pkg) => pkg.startsWith("@/") || pkg.startsWith("./"))
    .map((p) => p.split("/").pop() as string);

  return (
    <ResizablePanelGroup direction={mode ?? "vertical"} className={className}>
      <ResizablePanel>
        <Preview
          code={snippet.code ?? ""}
          packages={snippet.packages ?? []}
          className="!h-full !overflow-y-auto !w-full"
          internalComponents={internalComponents}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      {!preview && (
        <ResizablePanel>
          <CodeEditor code={snippet.code ?? ""} readOnly height="100%" />
        </ResizablePanel>
      )}
    </ResizablePanelGroup>
  );
};

export default TogglePreview;
