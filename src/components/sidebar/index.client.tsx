"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SidebarItem } from "@/components/sidebar/sidebar-item";
import { Menu } from "@payload-types";
import { Link, usePathname } from "@/i18n/routing";
import { getLink } from "@/payload/lib/get-link";
import { useNavbar } from "@/stores/use-navbar";
import { MinimizeButton } from "@/components/sidebar/minimize-button";
import { Link as CMSLink } from "@/components/link";

type Props = {
  menu: Menu;
};

function AvatarCard() {
  const minimized = useNavbar((state) => state.minimized);
  return (
    <Avatar className={cn("h-8 w-8", { "h-10 w-10": !minimized })}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

function Nav({ menu }: { menu: Menu }) {
  const pathname = usePathname();
  const minimized = useNavbar((state) => state.minimized);

  return (
    <nav className="flex flex-col gap-1 px-4">
      {menu.links?.map((item, index) => (
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
  );
}

function Profile({
  minimized,
  children,
}: {
  minimized: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "duration-400 relative flex justify-start p-4 transition-all ease-in-out",
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

export default function SidebarClient(props: Props) {
  const minimized = useNavbar((state) => state.minimized);
  return (
    <div
      className={`h-full border-[0.01rem] transition-all duration-300 ease-in-out ${minimized ? "min-w-[72px]" : "min-w-[240px]"} bg-custom-1`}
    >
      <div
        className={cn(
          "relative flex justify-start p-5 transition-all duration-300 ease-in-out",
          {
            "pt-6": !minimized,
          },
        )}
      >
        <Link href={"/"} className="flex gap-4 overflow-hidden">
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
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/*Profile details*/}
          <div
            className={cn("w-full whitespace-nowrap text-sm", {
              hidden: minimized,
            })}
          >
            <h3 className="font-semibold">Jackson Carter</h3>
            <span className="text-primary/60">Product Designer</span>
          </div>
        </Link>
        <MinimizeButton />
      </div>
    </div>
  );
}
