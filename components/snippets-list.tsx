import { Button } from "./ui/button";
import { ArrowUp, Bird, Trash2 } from "lucide-react";
import DeleteDialog from "./delete-dialog";
import { getCodes } from "@/utils/code";
import { redirect } from "next/navigation";

export default async function SnippetsList() {
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
    <ul className="flex flex-col gap-2">
      {snippets.map((code) => (
        <li key={code.id} className="w-full flex">
          <form
            action={async () => {
              "use server";
              redirect(`?id=${code.id}`);
            }}
            className="w-full"
          >
            <Button
              variant={"secondary"}
              className="w-full rounded items-center justify-between"
            >
              <span>{code.name}</span>
            </Button>
          </form>
          <DeleteDialog id={code.id}>
            <Button
              className="h-full rounded group duration-300"
              variant={"destructive"}
            >
              <Trash2 size={16} />
              <span className="w-0 opacity-0 group-hover:opacity-100 group-hover:ml-2 group-hover:w-fit">
                Delete
              </span>
            </Button>
          </DeleteDialog>
        </li>
      ))}
    </ul>
  );
}
