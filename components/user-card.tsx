import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "next-auth";
import { SignOut } from "./auth/signout-button";

export function UserCard({ user }: { user: User }) {
  if (!user || user.image === null) return null;
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="border border-foreground bg-gradient-to-b from-neutral-300 to-neutral-800">
          <AvatarImage src={user?.image} alt={user.name!} />
          <AvatarFallback className="bg-transparent">
            {user.name![0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="text-center">
        <div className="text-lg font-bold">{user.name}</div>
        <small>{user.email}</small>
        <SignOut className="my-3 rounded" />
      </PopoverContent>
    </Popover>
  );
}
