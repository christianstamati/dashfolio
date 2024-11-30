"use client";
import React, { useEffect } from "react";
import { Menu } from "@payload-types";
import { usePathname, useRouter } from "@/i18n/routing";
import { getLink } from "@/payload/lib/get-link";
import { useNavbar } from "@/stores/use-navbar";
import { MinimizeButton } from "@/features/sidebar/minimize-button";
import { Profile } from "@/features/sidebar/profile";
import { NavItem } from "@/features/sidebar/nav-item";
import { ExpandableButton } from "@/features/sidebar/expandable-button";
import logger from "@/lib/logger";

type Props = {
  menu: Menu;
};

export default function SidebarClient(props: Props) {
  const minimized = useNavbar((state) => state.minimized);
  const pathname = usePathname();

  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      logger.info("onHandleKeyDown", e.key);

      if (e.key === "s") {
        logger.info("search");
        return;
      }

      if (e.key === "Escape") {
        logger.info("exit");
        return;
      }

      const numKey = parseInt(e.key);

      if (!isNaN(numKey)) {
        const links = props.menu.links;
        if (links) {
          if (numKey > 0 && numKey <= links.length) {
            const link = links[numKey - 1]?.link;
            if (link) {
              const href = getLink(link);
              if (href) {
                router.push(href);
              }
            } else {
              logger.error("Invalid link ", numKey);
            }
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [props, router]);

  return (
    <div
      className={`flex flex-shrink-0 flex-col border ${minimized ? "w-fit" : "w-[240px]"}`}
    >
      <div className={"relative justify-start p-4"}>
        <Profile
          href={"/"}
          image={"https://github.com/shadcn.png"}
          minimized={minimized}
        />
        <MinimizeButton />
      </div>
      <nav className={`${!minimized ? "mt-4" : "mt-0"}`}>
        <ul className={`flex flex-col gap-2 px-4`}>
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
      <div className="h-full" />
      <div className="p-4">
        <ExpandableButton
          variant={"outline"}
          icon={"Search"}
          label={"Search"}
          shortcut={"S"}
          expand={!minimized}
        />
      </div>
    </div>
  );
}
