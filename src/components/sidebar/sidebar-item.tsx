"use client";
import { cn } from "@/lib/utils";
import LucideIcon from "@/components/lucide-icon";
import React from "react";

export function SidebarItem({
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
        "flex w-fit items-center justify-center gap-3 rounded-lg p-2.5 text-sm font-medium text-neutral-500",
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
        <LucideIcon iconName={icon} size={20} />
      </div>
      {expand && <span className="w-full">{label}</span>}
      {expand && (
        <span
          className={cn(
            `flex aspect-square w-6 items-center justify-center rounded-sm px-1.5 ring-1 ring-neutral-100 dark:ring-neutral-700`,
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
