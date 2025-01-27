import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  return (
    <form className="flex flex-col gap-4 md:max-w-md">
      <div className="flex items-center gap-2 rounded-full border bg-primary-foreground pl-2 pr-0.5 shadow-md">
        <Input
          className="h-12 border-none bg-transparent !text-base placeholder:text-base focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="your@mail.com"
        ></Input>
        <Button
          size={"lg"}
          className="hidden rounded-full sm:block"
          type="submit"
        >
          Subscribe
        </Button>
      </div>
      <Button
        size={"lg"}
        className="block h-12 rounded-full text-base sm:hidden"
        type="submit"
      >
        Subscribe
      </Button>
      <span className="pl-6 text-xs text-muted-foreground">
        By subscribing you agree to with our{" "}
        <Link href={"#"} className="text-blue-500 underline">
          Privacy Policy
        </Link>{" "}
        and provide consent to receive updates from our company.
      </span>
    </form>
  );
};
