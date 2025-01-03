import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type {
  Category,
  ThoughtsBlock as ThoughtsBlockProps,
} from "@payload-types";
import LucideIcon from "@/components/lucide-icon";
import { isString } from "@/payload/lib/utils";

type ThoughtProps = {
  title: string;
  icon: string;
  category: string;
  slug: string;
};

function Thought(props: ThoughtProps) {
  return (
    <div className="relative flex gap-2">
      <div className="rounded-md bg-neutral-700 p-2">
        <LucideIcon iconName={props.icon} />
      </div>
      <div className="text-sm">
        <h5 className="font-bold">{props.title}</h5>
        <p className="text-muted-foreground">{props.category}</p>
      </div>
    </div>
  );
}

export default function Thoughts(props: ThoughtsBlockProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">Thoughts</CardTitle>
        <CardDescription>
          Sharing experiences, knowledge and videos on design & tech
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-6">
        {props.thoughts?.map((item, index) => {
          const thought = item.thought;
          if (!thought || isString(thought)) {
            return <div key={index}>Invalid reference</div>;
          }

          const t = {
            title: thought.title,
            icon: thought.icon!,
            slug: thought.slug,
            category: (thought.category as Category).name,
          };

          return <Thought key={index} {...t} />;
        })}
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
