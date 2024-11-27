import { Page } from "@payload-types";
import { Button } from "@/components/ui/button";
import LucideIcon from "@/components/lucide-icon";
import React from "react";
import { Link } from "@/components/link";
import { Badge } from "@/components/ui/badge";

export function NavItem({
  expand,
  icon,
  label,
  shortcut,
  selected,
  link,
}: {
  expand?: boolean;
  selected?: boolean;
  icon: string;
  label: string;
  shortcut: string;
  link?: {
    type?: "reference" | "custom" | null;
    newTab?: boolean | null;
    reference?: { relationTo: "pages"; value: string | Page } | null;
    url?: string | null;
  };
}) {
  return (
    <li>
      <Link {...link}>
        <Button
          variant={`${selected ? "secondary" : "ghost"}`}
          className={`flex h-fit w-full overflow-hidden p-0 ${selected && "bg-secondary"}`}
        >
          <div className="p-3">
            <LucideIcon iconName={icon} size={18} />
          </div>
          {expand && (
            <div className={`flex w-full items-center text-left`}>
              <span className="h-fit w-full">{label}</span>
              <Badge
                variant="outline"
                className="mr-2 rounded-sm p-1.5 dark:border-neutral-700"
              >
                {shortcut}
              </Badge>
            </div>
          )}
        </Button>
      </Link>
    </li>
  );
}
