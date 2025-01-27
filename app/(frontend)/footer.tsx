import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaLinkedin as Linkedin,
  FaXTwitter as X,
} from "react-icons/fa6";
import { Bounding } from "../../components/bounding";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
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
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from our company.
      </span>
    </form>
  );
};

const socials = [
  { label: "YouTube", icon: Youtube, url: "" },
  { label: "Instagram", icon: Instagram, url: "" },
  { label: "Linkedin", icon: Linkedin, url: "" },
  { label: "X", icon: X, url: "" },
];

const pages = [
  { label: "Home", url: "" },
  { label: "About", url: "" },
  { label: "Portfolio", url: "" },
  { label: "Contact", url: "" },
];

const resources = [
  { label: "Next.js starter", url: "" },
  { label: "My Stack", url: "" },
];

const LinkGroup = ({
  name,
  links,
}: {
  name: string;
  links: { label: string; icon?: any; url: string }[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="pl-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
        {name}
      </div>
      <ul>
        {links.map((x, i) => (
          <li key={i} className="w-fit">
            <Bounding className="text-neutral-600">
              <Link
                className="flex items-center gap-2 text-base font-medium"
                href={x.url}
              >
                {x.icon && <x.icon size={21}></x.icon>}
                <span className="underline sm:no-underline">{x.label}</span>
              </Link>
            </Bounding>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Credits = () => {
  return (
    <div className="flex flex-col-reverse gap-4 p-4 py-6 pb-28 text-sm text-muted-foreground md:flex-row md:justify-between md:px-12">
      <span>
        Crafted with love using{" "}
        <Link href={"#"} className="font-medium text-blue-500 underline">
          Next.js
        </Link>
      </span>
      <div className="flex flex-col gap-4 md:flex-row">
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms & Conditions</Link>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col border-t-[0.02rem] bg-gray-100">
      <div className="flex flex-col gap-10 p-4 py-12 md:grid md:grid-cols-6 md:gap-6 md:px-12 md:py-20">
        <div className="col-span-3">
          <div>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col pb-4 pt-2">
              <div className="text-2xl font-bold">Christian Stamati</div>
              <div className="text-muted-foreground">
                Your next favorite email awaits—sign up for our newsletter!
              </div>
            </div>
          </div>

          <Newsletter />
        </div>
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-3 md:col-span-3">
          <LinkGroup name="Pages" links={pages} />
          <LinkGroup name="Resources" links={resources} />
          <LinkGroup name="Socials" links={socials} />
        </div>
      </div>
      <div className="w-full border-b-[1px]" />
      <Credits />
    </footer>
  );
};

export default Footer;
