import { Link } from "@/i18n/routing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";

export function Profile({ minimized }: { minimized: boolean }) {
  return (
    <Link href={"/"} className="flex gap-4 overflow-hidden">
      <Avatar
        className={cn("h-8 w-8", {
          "h-10 w-10": !minimized,
        })}
      >
        <AvatarImage src="https://github.com/shadcn.png" alt="profile-image" />
        <AvatarFallback>CS</AvatarFallback>
      </Avatar>
      {!minimized && (
        <div className={`w-full whitespace-nowrap text-sm`}>
          <h3 className="font-semibold">Christian Stamati</h3>
          <span className="text-primary/60">Software Developer</span>
        </div>
      )}
    </Link>
  );
}
