CREATE TABLE IF NOT EXISTS "snippet" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"user_id" serial NOT NULL,
	"packages" text[],
	"code" text,
	"description" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
