import { Button } from "./ui/button";
import {
  ArrowUp,
  Bird,
  Eye,
  EyeIcon,
  EyeOff,
  Pencil,
  Trash2,
} from "lucide-react";
import DeleteDialog from "./delete-dialog";
import { getCodes } from "@/utils/code";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ShareDialog from "./share-dialog";
import dayjs from "dayjs";
import CopyURLToClipboard from "./copy-url";

export default async function SnippetsList({
  className = "",
  hideOptions = false,
}: {
  className?: string;
  hideOptions?: boolean;
}) {
  const snippets = await getCodes();

  if (!snippets.length)
    return (
      <div className="w-full h-full grid place-items-center place-content-center gap-4 relative">
        <div className="absolute animate-bounce text-foreground top-4 right-16 grid place-items-end">
          <ArrowUp size={64} className="scale-125" />
          <span className="text-center text-3xl">Create new snippet now!</span>
        </div>
        <Bird size={128} />
        <p className="text-xl">No snippets found</p>
      </div>
    );

  return (
    <ul className={cn("flex flex-col gap-4 p-2", className)}>
      {snippets.map((snippet) => (
        <li key={snippet.id} className="w-full flex gap-x-2 items-center">
          <Button
            asChild
            title="Click to view snippet"
            variant={"secondary"}
            className="w-full rounded items-center justify-between"
          >
            <Link href={`/snippet/${snippet.id}`}>
              <span>{snippet.name}</span>
              {!hideOptions && (
                <span className="text-muted-foreground hidden md:inline">
                  Last updated on{" "}
                  {dayjs(snippet.updatedAt).format("DD MMM, YYYY")} at{" "}
                  {dayjs(snippet.updatedAt).format("hh:mm A")}
                </span>
              )}
            </Link>
          </Button>
          <CopyURLToClipboard id={snippet.id} hideOptions={hideOptions} />
          <Button
            variant={"outline"}
            size={"icon"}
            title="Preview snippet"
            className="h-full rounded group"
            asChild
          >
            <Link href={`/snippet/${snippet.id}?mode=preview`}>
              <EyeIcon size={16} />
            </Link>
          </Button>
          <ShareDialog snippet={snippet}>
            <Button
              variant={"outline"}
              title={`Make snippet ${
                snippet.visibility === "public" ? "private" : "public"
              }`}
              className="h-full rounded group"
            >
              {snippet.visibility === "public" ? (
                <Eye size={16} />
              ) : (
                <EyeOff size={16} />
              )}
              {!hideOptions && (
                <span className="hidden ml-2 md:inline">
                  Make {snippet.visibility === "public" ? "private" : "public"}
                </span>
              )}
            </Button>
          </ShareDialog>
          <Button
            asChild
            variant={"outline"}
            title="Edit snippet"
            className="h-full rounded group"
          >
            <Link href={`?edit=${snippet.id}`}>
              <Pencil size={16} />
              {!hideOptions && (
                <span className="hidden ml-2 md:inline">Edit</span>
              )}
            </Link>
          </Button>
          <DeleteDialog id={snippet.id}>
            <Button
              title="Delete snippet"
              className="h-full rounded group"
              variant={"destructive"}
            >
              <Trash2 size={16} />
              {!hideOptions && (
                <span className="hidden ml-2 md:inline">Delete</span>
              )}
            </Button>
          </DeleteDialog>
        </li>
      ))}
    </ul>
  );
}
