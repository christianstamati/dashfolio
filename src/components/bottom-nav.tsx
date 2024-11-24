"use client";
import React, { useMemo, useState } from "react";
import { navigation } from "@/lib/data";
import Link from "next/link";
import { Ellipsis, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavData } from "@/lib/types";
import TextIcon from "@/components/text-icon";
import Overlay from "@/components/overlay";
import { motion } from "motion/react";

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
      aria-expanded={viewMore}
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
      <div className="absolute -top-3 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-full md:hidden">
        <motion.nav
          initial={{ y: 150, opacity: 0 }} // Start off-screen and transparent
          animate={{ y: viewMore ? 0 : 150, opacity: viewMore ? 1 : 0 }} // Slide in/out and fade in/out
          transition={{ ease: "easeInOut", duration: 0.3 }} // Adjust duration and easing as needed
          className={`flex gap-2 rounded-md bg-background p-1.5`}
        >
          <NavLinks navItems={moreItems} pathname={pathname} />
        </motion.nav>
      </div>

      <Overlay
        onClick={() => setViewMore(false)}
        className="-z-20 md:hidden"
        isVisible={viewMore}
      />
    </div>
  );
}

export default BottomNav;
