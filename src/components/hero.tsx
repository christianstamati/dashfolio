import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={"text-5xl font-bold"}>
        Hey, I&apos;m Christian. <br /> I design software.
      </h1>
      <p className="text-lg">
        The Original Dashboard-Styled Personal Website Template for <br />{" "}
        Framer just got even better – with Dashfolio+
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
