"use client";

import { getPackageNames } from "@/app/actions";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export async function saveCode(data: Snippet) {
  if (!window) return;
  localStorage.codes = JSON.stringify([...getCodes(), data]);
  toast(
    <div className="flex">
      <CheckCircle2 className="mr-2" />
      <span>Added snippet</span>
    </div>
  );
}

export type Snippet = {
  id: string;
  name: string;
  code: string;
  packages: string[];
};

export function getCodes(): Snippet[] {
  if (!window) return [];
  return JSON.parse(window.localStorage.codes || "[]");
}

export function deleteCode(id: string) {
  if (!window) return;
  localStorage.codes = JSON.stringify(
    getCodes().filter((code) => code.id !== id)
  );
}
