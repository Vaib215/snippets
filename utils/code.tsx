"use server";
import { auth } from "@/auth";
import {
  createSnippet,
  deleteSnippet,
  getSnippetsIdByUser,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveCode(data: Omit<Snippet, "id">) {
  const userId = (await auth())?.user?.email;
  await createSnippet({
    ...data,
    userId: userId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  revalidatePath("/");
}

export type Snippet = {
  id: number;
  name: string;
  code: string;
  packages: string[];
};

export async function getCodes(): Promise<
  {
    id: number;
    name: string;
  }[]
> {
  const userId = (await auth())?.user?.email;
  if (!userId) return [];
  const result = await getSnippetsIdByUser(userId);
  return result.map((res) => ({
    id: res.id,
    name: res.name as string,
  }));
}

export async function deleteCode(id: number) {
  await deleteSnippet(id);
  revalidatePath("/");
  redirect("/");
}
