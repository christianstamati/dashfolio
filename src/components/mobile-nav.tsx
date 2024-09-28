import React from "react";

import LucideIcon from "@/components/lucide-icon";

type Props = {
  label: string;
  iconName: string;
  selected?: boolean;
  notification?: boolean;
};

function NavItem(props: Props) {
  return (
    <div
      className={`text-primary-foreground flex w-fit flex-col items-center rounded-md p-1.5 ${props.selected ? "bg-[#2C2C2C] ring-[0.05rem] ring-[#393939]" : "text-[#393939]"}`}
    >
      <div className="relative mb-1">
        <LucideIcon size={18} iconName={props.iconName} />
        {props.notification && (
          <span
            className={`absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full border-[#1C1C1C] bg-[#0057FF] ring-[0.15rem] ${props.selected ? "ring-[#2C2C2C]" : "ring-[#1C1C1C]"}`}
          />
        )}
      </div>
      <span className="text-xs">{props.label}</span>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="w-full bg-[#1C1C1C] p-4">
      <NavItem label={"Explore"} selected iconName={"Compass"} notification />
    </div>
  );
}

export default MobileNav;
