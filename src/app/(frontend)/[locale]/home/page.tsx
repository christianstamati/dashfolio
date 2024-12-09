import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Box } from "lucide-react";
import { Input } from "@/components/ui/input";

function StackItem() {
  return (
    <div className="relative flex gap-2">
      <div className="rounded-md bg-neutral-700 p-2">
        <Box />
      </div>
      <div className="text-sm">
        <h5 className="font-bold">Figma</h5>
        <p className="text-muted-foreground">Design tool</p>
      </div>
    </div>
  );
}

function Stack() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">Thoughts</CardTitle>
        <CardDescription>
          Sharing experiences, knowledge and videos on design & tech
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-6">
        <StackItem />
        <StackItem />
        <StackItem />
        <StackItem />
        <StackItem />
        <StackItem />
      </CardContent>
      <CardFooter className="flex pt-5">
        <Button className="w-full" variant={"outline"}>
          View All
        </Button>
      </CardFooter>
    </Card>
  );
}

function Links() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="w-fit rounded-full bg-neutral-700 p-2">
            <Box />
          </div>
          <CardTitle className="text-lg">Feed</CardTitle>
          <CardDescription>Dive into my quick thoughts</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>View Feed</Button>
        </CardFooter>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="w-fit rounded-full bg-neutral-700 p-2">
            <Box />
          </div>
          <CardTitle className="text-lg">Feed</CardTitle>
          <CardDescription>Dive into my quick thoughts</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>View Feed</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function ThoughtItem() {
  return (
    <div className="relative flex gap-2">
      <div className="rounded-md bg-neutral-700 p-2">
        <Box />
      </div>
      <div className="text-sm">
        <h5 className="font-bold">Productize deisgn skill</h5>
        <p className="text-muted-foreground">Business</p>
      </div>
    </div>
  );
}

function Thoughts() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">Thoughts</CardTitle>
        <CardDescription>
          Sharing experiences, knowledge and videos on design & tech
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-6">
        <ThoughtItem />
        <ThoughtItem />
        <ThoughtItem />
        <ThoughtItem />
        <ThoughtItem />
        <ThoughtItem />
      </CardContent>
      <CardFooter className="flex bg-neutral-800 pt-5">
        <div className="w-full">
          <h5 className="font-bold">Join 1K+ Readers</h5>
          <p className="text-muted-foreground">
            Sent out every two weeks. No spam
          </p>
        </div>
        <form className="flex gap-2">
          <Input className="w-full min-w-72" placeholder={"Your Email"}></Input>
          <Button variant={"outline"}>Subscribe</Button>
        </form>
      </CardFooter>
    </Card>
  );
}

function DropCard() {
  return (
    <Card className="overflow-hidden">
      <Image
        src={"/static/images/thumbnail.avif"}
        alt={"thumbnail"}
        width={1920}
        height={1080}
      />
      <CardHeader>
        <CardTitle className="text-base">Title</CardTitle>
        <CardDescription>This is a card description</CardDescription>
      </CardHeader>
    </Card>
  );
}

function Drops() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-bold">New Drops</h3>
      <div className="grid grid-cols-2 gap-4">
        <DropCard />
        <DropCard />
      </div>
    </div>
  );
}

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

export default function Page() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex w-full max-w-4xl flex-col gap-16 py-28">
        <Hero />
        <Drops />
        <Thoughts />
        <Links />
        <Stack />
      </div>
    </main>
  );
}
