import { Link } from "@/i18n/routing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export function Profile({
  minimized,
  href,
  image,
}: {
  minimized: boolean;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="flex justify-center gap-4">
      <Avatar className={`${minimized ? "h-8 w-8" : "h-10 w-10"}`}>
        <AvatarImage src={image} alt="profile-image" />
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
