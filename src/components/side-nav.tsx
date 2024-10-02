"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Box, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function SideNav() {
  const [expand, setExpand] = useState(false);

  return (
    <div className="hidden lg:block">
      <div className="relative flex p-4 pb-5 pt-6">
        <Avatar className={cn("h-8 w-8", { "h-10 w-10": expand })}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div
          className={cn("ml-4 w-40 whitespace-nowrap text-sm", {
            hidden: !expand,
          })}
        >
          <h3 className="font-semibold">Christian Stamati</h3>
          <span>Software Developer</span>
        </div>
        <Button
          onClick={() => setExpand((prevState) => !prevState)}
          className={cn(
            "absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full",
            { "-right-3 h-6 w-6": expand },
          )}
          variant={"secondary"}
          size={"icon"}
        >
          {expand ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </Button>
      </div>

      <nav className="flex hidden flex-col">
        <div className="rounded-md bg-primary p-2">
          <Box size={18} className="text-primary-foreground" />
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
