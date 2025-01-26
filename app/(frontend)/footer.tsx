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
    <form className="flex flex-col gap-6">
      <div className="flex items-center gap-3 rounded-full border bg-primary-foreground px-2 shadow-md">
        <Input
          className="h-14 border-none bg-transparent !text-base placeholder:text-base focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="your@mail.com"
        ></Input>
        <Button size={"lg"} className="rounded-full" type="submit">
          Submit
        </Button>
      </div>
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
                <span>{x.label}</span>
              </Link>
            </Bounding>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 border-t-[0.02rem] bg-gray-100 p-10 py-20">
      <div className="grid grid-cols-5 gap-20 pb-12">
        <div className="col-span-2">
          <div>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col pb-4 pt-2">
              <div className="text-2xl font-bold">Christian Stamati</div>
              <div className="text-muted-foreground">Join the newsletter!</div>
            </div>
          </div>
          <div>
            <Newsletter />
          </div>
        </div>
        <LinkGroup name="Pages" links={pages} />
        <LinkGroup name="Resources" links={resources} />
        <LinkGroup name="Socials" links={socials} />
      </div>
      <div className="flex justify-between border-t-[1px] py-12 text-sm text-muted-foreground">
        <span>
          Made with{" "}
          <Link href={"#"} className="font-medium text-blue-500 underline">
            Next.js
          </Link>
        </span>
        <div className="flex gap-2">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
