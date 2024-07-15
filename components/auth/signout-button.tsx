import { signOut } from "@/auth";
import EncryptButton from "../hover/button";

export function SignOut({ className }: { className?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <EncryptButton className={className}>Sign Out</EncryptButton>
    </form>
  );
}
