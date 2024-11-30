import React from "react";

import { serializeLexical } from "./serialize";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  content: Record<string, any>;
  enableGutter?: boolean;
  enableProse?: boolean;
};

const RichText: React.FC<Props> = ({ className, content }) => {
  if (!content) {
    return null;
  }
  return (
    <div className={cn(className)}>
      {content &&
        !Array.isArray(content) &&
        typeof content === "object" &&
        "root" in content &&
        serializeLexical({ nodes: content?.root?.children })}
    </div>
  );
};

export default RichText;
