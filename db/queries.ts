"use server";
import { and, eq } from "drizzle-orm";
import db from "./index";
import { InsertSnippet, snippetTable } from "./schema";
import { auth } from "@/auth";

export async function createSnippet(data: InsertSnippet) {
  await db.insert(snippetTable).values(data);
}

export async function getSnippet(id: number) {
  const userId = (await auth())?.user?.email;
  if (!userId) return null;
  return (
    await db
      .select()
      .from(snippetTable)
      .where(and(eq(snippetTable.id, id), eq(snippetTable.userId, userId)))
  ).at(0);
}

export async function getSnippetsIdByUser(userId: string) {
  return db.query.snippetTable.findMany({
    columns: {
      id: true,
      updatedAt: true,
      name: true,
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
