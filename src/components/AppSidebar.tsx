import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { Sidebar, SidebarFooter, SidebarTrigger, } from "./ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

// Sidebar Menu Items
const items = [
  {
    title: "Home",
    url: "/home", // Use actual route path
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

interface AppSidebarProps {
  children: React.ReactNode;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="flex items-center gap-2">
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <Button
            className="bg-[#BE202F] hover:bg-[#743a40] w-[208px] h-[48px] rounded-2xl">Logout
          </Button>

        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 p-4">
        <SidebarTrigger />

        {children}
      </main>
    </div>
  );
};

export default AppSidebar;
