import { useNavbar } from "@/stores/use-navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export function MinimizeButton() {
  const navbar = useNavbar();
  return (
    <Button
      onClick={navbar.toggleMinimized}
      className={cn(
        "absolute -right-0 top-1/2 z-50 h-5 w-5 -translate-y-1/2 translate-x-1/2 rounded-full border-[0.01rem] bg-custom-1 text-neutral-500 hover:bg-custom-1",
        { "h-6 w-6": !navbar.minimized },
      )}
      variant={"secondary"}
      size={"icon"}
    >
      <div>
        {!navbar.minimized ? (
          <ChevronLeft size={16} />
        ) : (
          <ChevronRight size={12} />
        )}
      </div>
    </Button>
  );
}
