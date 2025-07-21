ALTER TABLE "audio_chunks" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "audio_chunks" ALTER COLUMN "created_at" SET NOT NULL;