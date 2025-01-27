import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaLinkedin as Linkedin,
  FaXTwitter as X,
} from "react-icons/fa6";
import { Bounding } from "../../components/bounding";
import { Newsletter } from "@/components/newsletter";

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

const profile = {
  src: "https://github.com/shadcn.png",
  alt: "profile",
  fallback: "CS",
};

const Links = ({
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

const Credits = () => {
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
              <AvatarImage src={profile.src} alt={profile.alt} />
              <AvatarFallback>{profile.fallback}</AvatarFallback>
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
          <Links name="Pages" links={pages} />
          <Links name="Resources" links={resources} />
          <Links name="Socials" links={socials} />
        </div>
      </div>
      <div className="px-4 md:px-12">
        <div className="w-full border-b-[1px]" />
      </div>
      <Credits />
    </footer>
  );
};

export default Footer;
