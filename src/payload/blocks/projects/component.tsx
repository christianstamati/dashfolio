import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import type { ProjectsBlock as ProjectsBlockProps } from "@payload-types";
import { isString } from "@/payload/lib/utils";
import { Link } from "@/i18n/routing";

type ProjectProps = {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
};

function Project(props: ProjectProps) {
  return (
    <Link className="h-full" href={"/projects/" + props.slug}>
      <Card className="flex h-full flex-col overflow-hidden">
        <div className="h-full">
          <Image
            className="h-full object-cover"
            src={props.thumbnail}
            alt={"thumbnail"}
            width={1920}
            height={1080}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-base">{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default function Component(props: ProjectsBlockProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-bold">New Projects</h3>
      <div className="grid grid-cols-2 gap-4">
        {props.projects?.map((item, index) => {
          const proj = item.project;
          if (!proj || isString(proj)) {
            return <div key={index}>Invalid reference</div>;
          }

          const project = {
            title: proj.title!,
            description: proj.description!,
            slug: proj.slug,
            thumbnail:
              (!proj.thumbnail || isString(proj.thumbnail)
                ? ""
                : proj.thumbnail.url) ?? "",
          };

          return <Project key={index} {...project} />;
        })}
      </div>
    </div>
  );
}
