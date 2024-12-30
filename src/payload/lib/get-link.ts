import { Page } from "@payload-types";

type PayloadLink = {
  newTab?: boolean | null;
  reference?: {
    relationTo: "pages";
    value: Page | string | number;
  } | null;
  type?: "custom" | "reference" | null;
  url?: string | null;
};

export function getLink(link: PayloadLink) {
  return link.type === "reference" &&
    typeof link.reference?.value === "object" &&
    link.reference.value.slug
    ? `${link.reference?.relationTo !== "pages" ? `/${link.reference?.relationTo}` : ""}/${
        link.reference.value.slug
      }`
    : link.url;
}
