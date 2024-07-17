"use server";
import { auth } from "@/auth";
import {
  createSnippet,
  deleteSnippet,
  getSnippetsIdByUser,
  updateSnippet,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveCode(
  data: Omit<Snippet, "id"> & {
    id?: number;
  }
) {
  const userId = (await auth())?.user?.email;
  if (data.id) {
    await updateSnippet(data.id, {
      ...data,
      userId: userId,
      updatedAt: new Date(),
    });
    revalidatePath("/");
    return;
  }
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
  visibility: "public" | "private";
};

export async function getCodes() {
  const userId = (await auth())?.user?.email;
  if (!userId) return [];
  const result = await getSnippetsIdByUser(userId);
  return result.map((res) => ({
    id: res.id,
    name: res.name as string,
    visibility: res.visibility as "public" | "private",
    updatedAt: res.updatedAt as Date,
  }));
}

export async function deleteCode(id: number) {
  await deleteSnippet(id);
  revalidatePath("/");
  redirect("/");
}
