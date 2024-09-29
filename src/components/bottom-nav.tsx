"use client";
import React, { useMemo, useState } from "react";
import { navigation } from "@/lib/data";
import Link from "next/link";
import { Ellipsis, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavData } from "@/lib/types";
import TextIcon from "@/components/text-icon";

function NavLinks(props: { navItems: NavData[]; pathname?: string }) {
  return (
    <>
      {props.navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <TextIcon {...item} selected={props.pathname === item.href} />
        </Link>
      ))}
    </>
  );
}

function MoreButton({
  viewMore,
  setViewMore,
}: {
  viewMore: boolean;
  setViewMore: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setViewMore((prevState) => !prevState)}
      aria-expanded={viewMore} // Accessibility improvement
      className={`flex w-fit cursor-pointer flex-col items-center rounded-md p-1.5 text-foreground`}
    >
      <div className="relative mb-1">
        {viewMore ? <X size={18} /> : <Ellipsis size={18} />}
      </div>
      <span className="text-xs">{viewMore ? "Close" : "More"}</span>
    </button>
  );
}

function BottomNav() {
  const [viewMore, setViewMore] = useState(false);
  const mobileItems = useMemo(() => navigation.slice(0, 4), []);
  const moreItems = useMemo(() => navigation.slice(4), []);
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden">
      <div className="z-50 flex justify-center bg-background">
        {/*Mobile navigation*/}
        <nav className="grid grid-cols-5 gap-4 py-2 md:hidden">
          <NavLinks navItems={mobileItems} pathname={pathname} />
          <MoreButton viewMore={viewMore} setViewMore={setViewMore} />
        </nav>

        {/*Tablet navigation*/}
        <nav className="hidden gap-8 py-2 md:flex">
          <NavLinks navItems={navigation} pathname={pathname} />
        </nav>
      </div>

      {/*Mobile more items*/}
      <nav
        className={` ${viewMore ? "block" : "hidden"} absolute -top-3 left-1/2 flex -translate-x-1/2 -translate-y-full gap-2 rounded-md bg-background p-1.5 md:hidden`}
      >
        <NavLinks navItems={moreItems} pathname={pathname} />
      </nav>

      {/*Overlay*/}
      {viewMore && (
        <div className="fixed bottom-0 left-0 right-0 top-0 -z-10 bg-black opacity-50 md:hidden" />
      )}
    </div>
  );
}

export default BottomNav;
