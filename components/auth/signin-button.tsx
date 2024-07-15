import { signIn } from "@/auth";
import EncryptButton from "../hover/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", {
          redirectTo: "/",
        });
      }}
    >
      <EncryptButton className="text-3xl">🚀Let&apos;s Go</EncryptButton>
    </form>
  );
}
