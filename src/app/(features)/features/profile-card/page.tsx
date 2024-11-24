"use client";
import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function ProfileCard({
  minimized,
  children,
}: {
  minimized: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "duration-400 relative flex justify-start bg-green-300 p-4 transition-all ease-in-out",
        {
          "pb-5 pt-6": !minimized,
        },
      )}
    >
      <Link href={"/"} className={cn("flex overflow-hidden whitespace-nowrap")}>
        <Avatar
          className={cn("duration-400 h-8 w-8 transition-all ease-in-out", {
            "h-10 w-10": !minimized,
          })}
        >
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div
          className={cn("ml-4 w-40 text-sm", {
            hidden: minimized,
          })}
        >
          <h3 className="font-semibold">Christian Stamati</h3>
          <span className="text-primary/60">Software Developer</span>
        </div>
      </Link>
      {children}
    </div>
  );
}

export default function BottomNavDev() {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center">
      <ProfileCard minimized={minimized} />

      <Button
        className="absolute left-0 top-0"
        onClick={() => {
          setMinimized((prev) => !prev);
        }}
      >
        Toggle
      </Button>
    </div>
  );
}
