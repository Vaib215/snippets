"use client";
import Preview from "./preview";
import CodeEditor from "./code-editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";

const TogglePreview = ({
  ui,
  packages,
}: {
  ui: string;
  packages: string[];
}) => {
  if (!ui) return null;
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <Preview
          code={ui}
          packages={packages}
          className="!h-full !overflow-y-auto !w-full"
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <CodeEditor code={ui} readOnly height="100%" />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default TogglePreview;
