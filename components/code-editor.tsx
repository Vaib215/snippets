import React from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({
  code,
  setCode,
  readOnly,
  height,
}: {
  code: string;
  setCode?: (code: string) => void;
  readOnly?: boolean;
  height?: string;
}) {
  const editorRef = React.useRef<any>(null);

  return (
    <Editor
      height={height ?? "50vh"}
      language="typescript"
      onMount={(editor) => {
        editorRef.current = editor;
      }}
      theme="vs-dark"
      defaultValue={code}
      onChange={(value) => {
        setCode?.(value ?? "");
      }}
      options={{
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        wordWrap: "on",
        fontSize: 18,
        readOnly,
      }}
    />
  );
}
