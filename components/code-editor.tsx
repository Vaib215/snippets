"use client";
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
  return (
    <Editor
      height={height ?? "50vh"}
      language="typescript"
      theme="vs-dark"
      value={code}
      onChange={(value) => {
        if (!value) return;
        setCode?.(value);
      }}
      options={{
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        wordWrap: "on",
        fontSize: 18,
        lineNumbers: "off",
        readOnly,
      }}
    />
  );
}
