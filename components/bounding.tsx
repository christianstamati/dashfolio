import { cn } from "@/lib/utils";

const Handle = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        `absolute hidden h-1.5 w-1.5 border-[0.09rem] border-blue-500 bg-white shadow-md group-hover:block`,
        className,
      )}
    />
  );
};

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Bounding = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        `group relative w-fit cursor-pointer p-2 hover:!text-blue-500 hover:outline hover:outline-[0.09rem] hover:outline-blue-500`,
        className,
      )}
    >
      {children}
      <Handle className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <Handle className="right-0 top-0 -translate-y-1/2 translate-x-1/2" />
      <Handle className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
      <Handle className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
    </div>
  );
};
