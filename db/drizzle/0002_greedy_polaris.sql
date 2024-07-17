DO $$ BEGIN
 CREATE TYPE "public"."visibility" AS ENUM('public', 'private');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "snippet" ADD COLUMN "visibility" "visibility" DEFAULT 'private';