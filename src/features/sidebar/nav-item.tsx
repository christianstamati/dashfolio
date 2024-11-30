import { Page } from "@payload-types";
import React from "react";
import { Link } from "@/components/link";
import { ExpandableButton } from "@/features/sidebar/expandable-button";

export function NavItem(props: {
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
  const { link, ...rest } = props;

  return (
    <li>
      <Link {...link}>
        <ExpandableButton {...rest} />
      </Link>
    </li>
  );
}
