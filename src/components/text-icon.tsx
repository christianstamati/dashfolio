import { cn } from "@/lib/utils";
import LucideIcon from "@/components/lucide-icon";
import React from "react";

type Props = {
  label: string;
  icon: string;
  selected?: boolean;
  badge?: boolean;
  className?: string;
  iconSize?: number;
};

function TextIcon(props: Props) {
  return (
    <div
      className={cn(
        `flex w-14 cursor-pointer flex-col items-center rounded-md p-1.5 text-foreground`,
        { "bg-primary text-primary-foreground": props.selected },
        props.className,
      )}
    >
      <div className="relative mb-1">
        <LucideIcon size={props.iconSize ?? 18} iconName={props.icon} />
        {props.badge && (
          <span
            className={`bg-tertiary absolute -right-0.5 top-0 h-1.5 w-1.5 rounded-full ring-[0.15rem] ${props.selected ? "ring-foreground" : "ring-background"}`}
          />
        )}
      </div>
      <span className="text-xs">{props.label}</span>
    </div>
  );
}

export default TextIcon;
