"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarItem } from "@/components/sidebar/sidebar-item";
import { Menu } from "@payload-types";
import { Link } from "@/components/link";
import { usePathname } from "@/i18n/routing";
import { getLink } from "@/payload/lib/get-link";

type Props = {
  menu: Menu;
};

export default function SidebarClient(props: Props) {
  const [expand, setExpand] = useState(false);
  const pathname = usePathname();
  return (
    <div className="hidden flex-col border-r-[0.01rem] bg-neutral-50 lg:flex">
      <div
        className={cn("relative flex justify-center p-4", {
          "pb-5 pt-6": expand,
        })}
      >
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
          <span className="text-primary/60">Software Developer</span>
        </div>
        <Button
          onClick={() => setExpand((prevState) => !prevState)}
          className={cn(
            "absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-[0.01rem] text-neutral-500",
            { "-right-3 h-6 w-6": expand },
          )}
          variant={"secondary"}
          size={"icon"}
        >
          {expand ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </Button>
      </div>
      <nav className="flex flex-col gap-1 px-4">
        {props.menu.links?.map((item, index) => (
          <Link key={index} {...item.link}>
            <SidebarItem
              {...item}
              expand={expand}
              selected={pathname === getLink(item.link!)}
              shortcut={(index + 1).toString()}
            />
          </Link>
        ))}
      </nav>
      <div className="h-full" />
      <div className="hidden p-4">
        <div
          className={cn(
            "flex w-fit items-center justify-center gap-2 rounded-md p-2.5 text-sm ring-1 ring-neutral-300",
            { "w-full": expand },
            { "bg-primary text-primary-foreground": false },
          )}
        >
          <Search size={20} />
          {expand && <span className="w-full">Search</span>}
          {expand && (
            <span
              className={cn(
                `aspect-square rounded-sm px-1.5 ring-1 ring-neutral-100`,
              )}
            >
              S
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
