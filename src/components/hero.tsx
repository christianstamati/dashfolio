import { Button } from "@/components/ui/button";
import { Page } from "@payload-types";

type Props = {
  hero: Page["hero"]
}

function Hero({hero}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={"text-5xl font-bold"}>
      </h1>
      <p className="text-lg">
      </p>
      <div className={"flex gap-3"}>
        <Button size="lg">About</Button>
        <Button size="lg" variant={"secondary"}>
          E-mail
        </Button>
      </div>
    </div>
  );
}

export default Hero;
