import { Page } from "@payload-types";
import React from "react";
import { Link } from "@/payload/blocks/link";
import { ExpandableButton } from "@/components/sidebar/expandable-button";

export function NavItem(props: {
  expand?: boolean;
  selected?: boolean;
  shortcut: string;
  link?: {
    type?: "reference" | "custom" | null;
    label: string;
    icon: string;
    newTab?: boolean | null;
    reference?: { relationTo: "pages"; value: string | Page } | null;
    url?: string | null;
  };
}) {
  const { link, ...rest } = props;

  const buttonProps = {
    label: link?.label ?? "none",
    icon: link?.icon ?? "",
    ...rest,
  };

  return (
    <li>
      <Link {...link}>
        <ExpandableButton {...buttonProps} />
      </Link>
    </li>
  );
}
