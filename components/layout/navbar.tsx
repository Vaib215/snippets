import React from "react";
import Link from "next/link";
import AddCode from "../add-code";
import { auth } from "@/auth";
import { UserCard } from "../user-card";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { SignIn } from "../auth/signin-button";

async function Navbar() {
  const session = await auth();

  return (
    <nav className="w-full mx-auto flex justify-between items-center sticky top-0 bg-background/50 py-1 px-3 backdrop-blur-sm">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-white font-mono text-2xl font-thin">
          snippets
        </Link>
      </div>
      {session?.user ? (
        <div className="flex items-center space-x-3">
          <AddCode>
            <Button>
              <Plus />
              Add Snippet
            </Button>
          </AddCode>
          <UserCard user={session.user} />
        </div>
      ) : (
        <SignIn className="!text-xl">Get Started</SignIn>
      )}
    </nav>
  );
}

export default Navbar;
