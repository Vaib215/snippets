"use server";
import { eq } from "drizzle-orm";
import db from "./index";
import { InsertSnippet, snippetTable } from "./schema";

export async function createSnippet(data: InsertSnippet) {
  await db.insert(snippetTable).values(data);
}

export async function getSnippet(id: number) {
  return (
    await db.select().from(snippetTable).where(eq(snippetTable.id, id))
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
