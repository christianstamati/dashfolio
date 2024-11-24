"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { cn } from "@/lib/utils";
import { Menu } from "@payload-types";
import { Link, usePathname } from "@/i18n/routing";
import { getLink } from "@/payload/lib/get-link";
import { useNavbar } from "@/stores/use-navbar";
import { MinimizeButton } from "@/components/sidebar/minimize-button";
import { Link as CMSLink } from "@/components/link";
import LucideIcon from "@/components/lucide-icon";

type Props = {
  menu: Menu;
};

function SidebarItem({
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
    <div
      className={cn(
        "flex h-11 w-fit items-center justify-start gap-3 overflow-hidden rounded-md p-3 text-sm font-medium text-neutral-500",
        { "w-full": expand },
        {
          "bg-primary text-primary-foreground dark:bg-secondary dark:text-primary":
            selected,
        },
        {
          "hover:text-neutral-900 dark:hover:text-neutral-200": !selected,
        },
      )}
    >
      <div>
        <LucideIcon iconName={icon} size={18} />
      </div>
      {expand && <span className="w-full">{label}</span>}
      {expand && (
        <span
          className={cn(
            `flex w-6 items-center justify-center rounded-sm px-1.5 ring-1 ring-neutral-100 dark:ring-neutral-700`,
            {
              "ring-neutral-500": selected,
            },
          )}
        >
          {shortcut}
        </span>
      )}
    </div>
  );
}

export default function SidebarClient(props: Props) {
  const minimized = useNavbar((state) => state.minimized);
  const pathname = usePathname();
  return (
    <div
      className={`relative h-full flex-shrink-0 transition-all duration-1000 ease-in-out ${minimized ? "w-[72px]" : "w-[240px]"} bg-custom-1`}
    >
      <div
        className={cn(
          "relative justify-start px-5 pb-5 pt-4 transition-all duration-1000 ease-in-out",
          {
            "pt-6": !minimized,
          },
        )}
      >
        <Link
          href={"/"}
          className="flex gap-4 overflow-hidden bg-red-500 transition-all duration-1000 ease-in-out"
        >
          {/*Profile Image*/}
          <Avatar
            className={cn("h-8 w-8 transition-all duration-300 ease-in-out", {
              "h-10 w-10": !minimized,
            })}
          >
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="profile-image"
            />
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>

          {/*Profile details*/}
          <div
            className={`w-full whitespace-nowrap bg-green-300 text-sm ${minimized && "hidden"}`}
          >
            <h3 className="font-semibold">Christian Stamati</h3>
            <span className="text-primary/60">Software Developer</span>
          </div>
        </Link>
        <MinimizeButton />
      </div>
      <nav
        className={`flex flex-col gap-1 px-4 transition-all duration-1000 ease-in-out ${!minimized && "p-4"}`}
      >
        {props.menu.links?.map((item, index) => (
          <CMSLink key={index} {...item.link}>
            <SidebarItem
              {...item}
              selected={pathname === getLink(item.link!)}
              shortcut={(index + 1).toString()}
              expand={!minimized}
            />
          </CMSLink>
        ))}
      </nav>
      <MinimizeButton />
    </div>
  );
}
