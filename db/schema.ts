import { serial, text, timestamp, pgTable, pgEnum } from "drizzle-orm/pg-core";

export const visiblityEnum = pgEnum("visibility", ["public", "private"]);

export const snippetTable = pgTable("snippet", {
  id: serial("id").primaryKey(),
  name: text("name"),
  userId: text("user_id"),
  packages: text("packages").array(),
  code: text("code"),
  visibility: visiblityEnum("visibility").default("private"),
  description: text("description"),
  thumbnail: text("thumbnail"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export type InsertSnippet = typeof snippetTable.$inferInsert;
export type SelectSnippet = typeof snippetTable.$inferSelect;
