"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LucideIcon from "@/components/lucide-icon";
import React from "react";

export function SidebarItem({
  expand,
  icon,
  label,
  shortcut,
  selected,
  href,
}: {
  expand?: boolean;
  selected?: boolean;
  icon: string;
  label: string;
  shortcut: string;
  href: string;
}) {
  return (
    <Link href={"href"}>
      <div
        className={cn(
          "flex w-fit items-center justify-center gap-2 rounded-lg p-2.5 text-sm text-neutral-500",
          { "w-full": expand },
          {
            "bg-primary/90 text-primary-foreground": selected,
          },
        )}
      >
        <LucideIcon iconName={icon} size={20} />
        {expand && <span className="w-full">{label}</span>}
        {expand && (
          <span
            className={cn(
              `aspect-square rounded-sm px-1.5 ring-1 ring-neutral-100`,
              { "b-red-500 ring-1 ring-neutral-600": selected },
            )}
          >
            {shortcut}
          </span>
        )}
      </div>
    </Link>
  );
}
