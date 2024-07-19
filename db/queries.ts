"use server";
import { and, eq, or } from "drizzle-orm";
import db from "./index";
import { InsertSnippet, snippetTable } from "./schema";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { captureAndStoreThumbnail } from "@/utils/screenshot";

export async function createSnippet(data: InsertSnippet) {
  const snippet = await db.insert(snippetTable).values(data).returning();
  captureAndStoreThumbnail(snippet.at(0)?.id);
}

export async function updateSnippet(id: number, data: InsertSnippet) {
  const snippet = await db
    .update(snippetTable)
    .set(data)
    .where(eq(snippetTable.id, id))
    .returning();
  captureAndStoreThumbnail(snippet.at(0)?.id);
}

export async function getSnippet(id: number, preview = false) {
  const userId = (await auth())?.user?.email;
  return (
    await db
      .select()
      .from(snippetTable)
      .where(
        and(
          eq(snippetTable.id, id),
          or(
            eq(snippetTable.visibility, "public"),
            eq(snippetTable.userId, userId ?? ""),
            preview ? eq(snippetTable.visibility, "private") : undefined
          )
        )
      )
  ).at(0);
}

export async function getSnippetsIdByUser(userId: string) {
  return db.query.snippetTable.findMany({
    columns: {
      id: true,
      updatedAt: true,
      name: true,
      visibility: true,
      thumbnail: true,
    },
    where(fields, operators) {
      return operators.eq(fields.userId, userId);
    },
  });
}

export async function deleteSnippet(id: number) {
  await db.delete(snippetTable).where(eq(snippetTable.id, id));
}

export async function toggleVisibility(id: number) {
  const snippet = await getSnippet(id);
  if (!snippet) return;
  await updateSnippet(id, {
    visibility: snippet.visibility === "public" ? "private" : "public",
  });
  revalidatePath("/");
}

export async function updateThumbnail(id: number, thumbnail: string) {
  await db
    .update(snippetTable)
    .set({ thumbnail })
    .where(eq(snippetTable.id, id));
}
