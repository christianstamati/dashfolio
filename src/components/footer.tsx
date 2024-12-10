import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CurrentTime from "@/components/current-time";

function Links({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-md mb-2 font-medium">{title}</div>
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="text-muted-foreground" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkingBadge() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center gap-2 text-base font-bold">
        <span>Currently 🧑🏼‍💻 working</span>
        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>{" "}
      </div>
      <div className="flex w-fit items-center justify-center gap-2 text-muted-foreground">
        <span>Reach out</span>
        <div>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex items-center justify-center border border-x-0 dark:bg-neutral-900">
      <div className="flex w-full max-w-4xl flex-col gap-16 py-14">
        <div className={"grid grid-cols-4"}>
          <Links
            title={"Index"}
            links={[
              { label: "Explore", href: "/" },
              { label: "Explore", href: "/" },
              { label: "Explore", href: "/" },
              { label: "Explore", href: "/" },
            ]}
          />
          <Links
            title={"Products"}
            links={[
              { label: "Product 1", href: "/" },
              { label: "Product 2", href: "/" },
              { label: "Product 3", href: "/" },
            ]}
          />
          <Links
            title={"Resources"}
            links={[
              { label: "Explore", href: "/" },
              { label: "Explore", href: "/" },
              { label: "Explore", href: "/" },
              { label: "Explore", href: "/" },
            ]}
          />
          <Links
            title={"Connect"}
            links={[
              { label: "Instagram", href: "/" },
              { label: "Youtube", href: "/" },
              { label: "Linkedin", href: "/" },
              { label: "X", href: "/" },
            ]}
          />
        </div>
        <div className="grid w-full grid-cols-4">
          <WorkingBadge />
          <CurrentTime className="col-start-3" />
        </div>
        <div className="border border-x-0 border-b-0" />
        <span className="text-muted-foreground">
          Copyright © 2025 Christian Stamati. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
