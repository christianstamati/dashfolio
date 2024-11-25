"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { cn } from "@/lib/utils";
import { Menu } from "@payload-types";
import { Link, usePathname } from "@/i18n/routing";
import { getLink } from "@/payload/lib/get-link";
import { useNavbar } from "@/stores/use-navbar";
import { MinimizeButton } from "@/features/sidebar/minimize-button";
import { Link as CMSLink } from "@/components/link";
import LucideIcon from "@/components/lucide-icon";
import { Button } from "@/components/ui/button";

type Props = {
  menu: Menu;
};

function NavItem({
  expand,
  icon,
  label,
  shortcut,
  selected,
}: {
  expand?: boolean;
  selected?: boolean;
  icon: string;
  label: string;
  shortcut: string;
}) {
  return (
    <li>
      <Button
        variant={"outline"}
        className={`flex h-fit w-full overflow-hidden p-0 ${selected && "bg-secondary"}`}
      >
        <div className="p-3">
          <LucideIcon iconName={icon} size={18} />
        </div>
        {expand && (
          <div
            className={`flex h-full w-full items-center justify-between text-left`}
          >
            <span className="w-full">{label}</span>
            <span className="mr-2 aspect-square rounded border p-1 px-2">
              {shortcut}
            </span>
          </div>
        )}
      </Button>
    </li>
  );
}

function Profile({ minimized }: { minimized: boolean }) {
  return (
    <Link href={"/public"} className="flex gap-4 overflow-hidden">
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

export default function SidebarClient(props: Props) {
  const minimized = useNavbar((state) => state.minimized);
  const pathname = usePathname();
  return (
    <div
      className={`h-full flex-shrink-0 border ${minimized ? "w-fit" : "w-[240px]"}`}
    >
      <div className={"relative justify-start px-5 pb-5 pt-4"}>
        <Profile minimized={minimized} />
        <MinimizeButton />
      </div>

      <nav>
        <ul className={`flex flex-col gap-2 px-4 ${!minimized && "p-4"}`}>
          {props.menu.links?.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              selected={pathname === getLink(item.link!)}
              shortcut={(index + 1).toString()}
              expand={!minimized}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
