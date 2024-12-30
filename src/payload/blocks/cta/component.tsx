import type { CallToActionBlock as CallToActionBlockProps } from "@payload-types";
import { Button } from "@/components/ui/button";
import { Link } from "@/payload/blocks/link";
import LucideIcon from "@/components/lucide-icon";

export default async function Component(props: CallToActionBlockProps) {
  const { primary, secondary } = props;

  return (
    <div className="flex gap-3">
      <Link {...primary}>
        <Button
          variant={primary.appearance}
          className={primary.icon ? "px-4 pr-5" : ""}
          size={"lg"}
        >
          {primary.icon && (
            <LucideIcon size={21} iconName={primary.icon!} className="mr-2" />
          )}
          <span>{primary.label}</span>
        </Button>
      </Link>
      <Link {...secondary}>
        <Button
          size={"lg"}
          className={secondary.icon ? "px-4 pr-5" : ""}
          variant={secondary.appearance}
        >
          {secondary.icon && (
            <LucideIcon size={21} iconName={secondary.icon!} className="mr-2" />
          )}
          <span>{secondary.label}</span>
        </Button>
      </Link>
    </div>
  );
}
