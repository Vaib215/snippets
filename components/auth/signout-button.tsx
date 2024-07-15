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
      <EncryptButton children="Sign Out" className={className} />
    </form>
  );
}
