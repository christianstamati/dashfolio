import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

function Overlay({
  isVisible,
  className,
  onClick,
}: {
  isVisible: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }} // Start fully transparent
      animate={{ opacity: isVisible ? 0.3 : 0 }} // Fade in/out based on isVisible
      exit={{ opacity: 0 }} // Ensure it fades out when exiting
      transition={{ ease: "easeInOut", duration: 0.3 }} // Transition settings
      className={cn("fixed inset-0 bg-black", className)} // Use inset-0 to cover the whole viewport
      style={{ pointerEvents: isVisible ? "auto" : "none" }} // Disable pointer events when not visible
    />
  );
}

export default Overlay;
