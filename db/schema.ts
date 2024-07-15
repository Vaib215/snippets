import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const snippetTable = pgTable("snippet", {
  id: serial("id").primaryKey(),
  name: text("name"),
  userId: text("user_id"),
  packages: text("packages").array(),
  code: text("code"),
  description: text("description"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export type InsertSnippet = typeof snippetTable.$inferInsert;
export type SelectSnippet = typeof snippetTable.$inferSelect;
