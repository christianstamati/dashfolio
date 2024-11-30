import { Button, ButtonProps } from "@/components/ui/button";
import LucideIcon from "@/components/lucide-icon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  expand?: boolean;
  selected?: boolean;
  icon: string;
  label: string;
  shortcut: string;
  className?: string;
  variant?: ButtonProps["variant"];
  asChild?: boolean;
};

export function ExpandableButton(props: Props) {
  const {
    expand,
    icon,
    label,
    shortcut,
    selected,
    className,
    asChild,
    variant,
  } = props;
  return (
    <Button
      asChild={asChild}
      variant={`${selected ? "secondary" : (variant ?? "ghost")}`}
      className={cn("flex h-fit w-full overflow-hidden p-0", {
        "bg-secondary": selected,
        className,
      })}
    >
      <div className="p-3">
        <LucideIcon iconName={icon} size={18} />
      </div>
      {expand && (
        <div className={`flex w-full items-center text-left`}>
          <span className="h-fit w-full">{label}</span>
          <Badge
            variant="outline"
            className="mr-2 w-6 items-center justify-center rounded-sm p-1.5 dark:border-neutral-700"
          >
            {shortcut}
          </Badge>
        </div>
      )}
    </Button>
  );
}
