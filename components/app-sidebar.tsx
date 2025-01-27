"use client";

import { Home, Work, Message, User } from "react-iconly";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";

const data = {
  avatar: {
    src: "https://github.com/shadcn.png",
    alt: "avatar",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "About",
      url: "/about",
      icon: User,
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      icon: Work,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: Message,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const isActive = (url: string) => {
    return pathname === url;
  };

  const { isMobile } = useSidebar();

  if (isMobile) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-50 bg-red-400 p-4 opacity-10">
        Mobile sidebar
      </div>
    );
  }

  return (
    <Sidebar
      collapsible="none"
      className="fixed inset-y-0 left-0 z-50 border-r"
    >
      <SidebarHeader>
        <SidebarMenu>
          <div className="mt-4 flex w-full items-center justify-center">
            <Link href="/">
              <Avatar className="h-8 w-8">
                <AvatarImage {...data.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex flex-col items-center justify-center p-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="items-center gap-3">
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="flex h-[55px] w-[55px] items-center justify-center rounded-2xl md:px-2 [&>svg]:size-6"
                    asChild
                    tooltip={{
                      children: item.title,
                      hidden: false,
                      className: "text-base",
                    }}
                    isActive={isActive(item.url)}
                  >
                    <Link href={item.url}>
                      <item.icon set={isActive(item.url) ? "bold" : "light"} />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="items-center">
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
