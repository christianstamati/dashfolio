"use client";
import React, { useState } from "react";
import LucideIcon from "@/components/lucide-icon";
import { navigation } from "@/lib/data";
import Link from "next/link";
import { Ellipsis, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavData } from "@/lib/types";

type NavItemProps = {
  label: string;
  icon: string;
  selected?: boolean;
  badge?: boolean;
};

function NavItem(props: NavItemProps) {
  return (
    <button
      className={`flex w-14 cursor-pointer flex-col items-center rounded-md p-1.5 ${props.selected ? "bg-primary text-primary-foreground" : "text-foreground/50"}`}
    >
      <div className="relative mb-1">
        <LucideIcon size={18} iconName={props.icon} />
        {props.badge && (
          <span
            className={`bg-tertiary absolute -right-0.5 top-0 h-1.5 w-1.5 rounded-full ring-[0.15rem] ${props.selected ? "ring-foreground" : "ring-background"}`}
          />
        )}
      </div>
      <span className="text-xs">{props.label}</span>
    </button>
  );
}

function NavItemList(props: { navItems: NavData[]; pathname: string }) {
  return props.navItems.map((item, index) => (
    <Link key={index} href={item.href}>
      <NavItem {...item} selected={props.pathname === item.href} />
    </Link>
  ));
}

function BottomNav() {
  const [viewMore, setViewMore] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-background">
        {/*Mobile navigation*/}
        <div className="grid grid-cols-5 gap-4 py-2 md:hidden">
          <NavItemList navItems={navigation.slice(0, 4)} pathname={pathname} />
          <button
            onClick={() => setViewMore((prevState) => !prevState)}
            className={`flex w-fit cursor-pointer flex-col items-center rounded-md p-1.5 text-foreground/50`}
          >
            <div className="relative mb-1">
              {viewMore ? <X size={18} /> : <Ellipsis size={18} />}
            </div>
            <span className="text-xs">{viewMore ? "Close" : "More"}</span>
          </button>
        </div>
        {/*Mobile more items*/}
        <div
          className={`absolute -top-2 -translate-y-full gap-2 rounded-md bg-gray-50 p-1.5 md:hidden ${viewMore ? "flex" : "hidden"}`}
        >
          <NavItemList
            navItems={navigation.slice(4, navigation.length)}
            pathname={pathname}
          />
        </div>

        {/*Tablet navigation*/}
        <div className="hidden gap-8 py-2 md:flex">
          <NavItemList navItems={navigation} pathname={pathname} />
        </div>
      </div>
      {viewMore && (
        <div className="fixed bottom-0 left-0 right-0 top-0 -z-10 bg-black opacity-50 md:hidden" />
      )}
    </>
  );
}

export default BottomNav;
