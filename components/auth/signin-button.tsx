import { signIn } from "@/auth";
import EncryptButton from "../hover/button";
import { cn } from "@/lib/utils";

export function SignIn({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", {
          redirectTo: "/",
        });
      }}
    >
      <EncryptButton className={cn("text-3xl", className)}>
        {children ?? "🚀Let's Go"}
      </EncryptButton>
    </form>
  );
}
