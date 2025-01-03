import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Box } from "lucide-react";

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

export default function Page() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex w-full max-w-4xl flex-col gap-16 py-28">
        <Links />
        <Stack />
      </div>
    </main>
  );
}
