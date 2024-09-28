import * as Icons from "lucide-react";
import React from "react";
import { Ban, LucideProps } from "lucide-react"; // Import Lucide icon props
interface LucideIconProps extends LucideProps {
  iconName?: string;
}
function LucideIcon({ iconName, ...rest }: LucideIconProps) {
  const Icon = Icons[iconName as keyof typeof Icons] as React.FC;
  if (!Icon) {
    return <Ban {...rest} />;
  }
  return <Icon {...rest} />;
}

export default LucideIcon;
