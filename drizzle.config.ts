import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./db/drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URI!,
  },
});
