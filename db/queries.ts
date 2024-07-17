"use server";
import { and, eq, or } from "drizzle-orm";
import db from "./index";
import { InsertSnippet, snippetTable } from "./schema";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createSnippet(data: InsertSnippet) {
  await db.insert(snippetTable).values(data);
}

export async function getSnippet(id: number) {
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
            eq(snippetTable.userId, userId ?? "")
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
    },
    where(fields, operators) {
      return operators.eq(fields.userId, userId);
    },
  });
}

export async function deleteSnippet(id: number) {
  await db.delete(snippetTable).where(eq(snippetTable.id, id));
}

export async function updateSnippet(id: number, data: InsertSnippet) {
  await db.update(snippetTable).set(data).where(eq(snippetTable.id, id));
}

export async function toggleVisibility(id: number) {
  const snippet = await getSnippet(id);
  if (!snippet) return;
  await updateSnippet(id, {
    visibility: snippet.visibility === "public" ? "private" : "public",
  });
  revalidatePath("/");
}
