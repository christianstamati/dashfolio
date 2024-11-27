"use client";
import React from "react";
import { Menu } from "@payload-types";
import { usePathname } from "@/i18n/routing";
import { getLink } from "@/payload/lib/get-link";
import { useNavbar } from "@/stores/use-navbar";
import { MinimizeButton } from "@/features/sidebar/minimize-button";
import { Profile } from "@/features/sidebar/profile";
import { NavItem } from "@/features/sidebar/nav-item";
import SearchInput from "@/features/sidebar/search-input";

type Props = {
  menu: Menu;
};

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
      <nav className="flex h-full flex-col">
        <ul
          className={`flex h-full flex-col gap-2 bg-green-300 px-4 ${!minimized && "p-4"}`}
        >
          {props.menu.links?.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              selected={pathname === getLink(item.link!)}
              shortcut={(index + 1).toString()}
              expand={!minimized}
            />
          ))}
          <div className="h-full bg-red-500">sa</div>
          <SearchInput />
        </ul>
      </nav>
    </div>
  );
}
