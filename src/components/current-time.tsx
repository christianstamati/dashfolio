"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function CurrentTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const updateTime = () => {
      const italianTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/Rome",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(italianTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "text-nowrap text-7xl font-light text-muted-foreground",
        className,
      )}
    >
      {time}
    </div>
  );
}

export default CurrentTime;
