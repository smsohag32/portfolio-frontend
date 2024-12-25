"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuItem,
   SidebarMenuButton,
   SidebarMenuSub,
   SidebarMenuSubItem,
   SidebarMenuSubButton,
   SidebarProvider,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo from "@/assets/logo3.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown, LogOut, Settings, User, ChartArea } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-store";
import { logoutUser } from "@/redux-store/slice/authSlice";

interface NavItem {
   title: string;
   href: string;
   icon: React.ReactNode;
   subItems?: NavItem[];
}

const navItems: NavItem[] = [
   {
      title: "Dashboard",
      href: "/dashboard/sohag",
      icon: <ChartArea className="h-4 w-4" />,
   },
   {
      title: "Projects",
      href: "/dashboard/sohag/projects",
      icon: <Bell className="h-4 w-4" />,
   },
];

export function DashboardSidebar() {
   const pathname = usePathname();

   return (
      <SidebarProvider className="border-r !bg-lightDark">
         <Sidebar className="border-r !bg-lightDark">
            <SidebarHeader className="border-b px-4 py-2">
               <Link
                  href="/"
                  className="flex items-center space-x-2">
                  <Image
                     src={logo}
                     alt="Logo"
                     width={120}
                     height={32}
                  />
               </Link>
            </SidebarHeader>
            <SidebarContent>
               <ScrollArea className="h-[calc(100vh-8rem)] py-4">
                  <SidebarMenu>
                     {navItems.map((item, index) => (
                        <SidebarMenuItem key={index}>
                           <SidebarMenuButton
                              asChild
                              isActive={pathname === item.href}>
                              <Link
                                 href={item.href}
                                 className="flex items-center space-x-2">
                                 {item.icon}
                                 <span>{item.title}</span>
                              </Link>
                           </SidebarMenuButton>
                           {item.subItems && (
                              <SidebarMenuSub>
                                 {item.subItems.map((subItem, subIndex) => (
                                    <SidebarMenuSubItem key={subIndex}>
                                       <SidebarMenuSubButton
                                          asChild
                                          isActive={pathname === subItem.href}>
                                          <Link href={subItem.href}>{subItem.title}</Link>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                 ))}
                              </SidebarMenuSub>
                           )}
                        </SidebarMenuItem>
                     ))}
                  </SidebarMenu>
               </ScrollArea>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
               <ProfileMenu />
            </SidebarFooter>
         </Sidebar>
      </SidebarProvider>
   );
}

function ProfileMenu() {
   const { user } = useAuth();
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
   const handleLogOut = () => {
      try {
         dispatch(logoutUser());
         router.push("/")
      } catch {}
   };

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               variant="ghost"
               className="w-full justify-start">
               <Avatar className="h-8 w-8">
                  <AvatarImage
                     src="/avatars/01.png"
                     alt={user?.name?.slice(0, 2) || ""}
                  />
                  <AvatarFallback>{user?.name?.slice(0, 2) || ""}</AvatarFallback>
               </Avatar>
               <span className="ml-2">{user?.name || ""}</span>
               <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            className="w-56"
            align="end"
            forceMount>
            <DropdownMenuLabel className="font-normal">
               <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user?.name || ""}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user?.email || ""}</p>
               </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
               <User className="mr-2 h-4 w-4" />
               <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <Settings className="mr-2 h-4 w-4" />
               <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
               onClick={handleLogOut}
               className="cursor-pointer">
               <LogOut className="mr-2 h-4 w-4" />
               <span>Log out</span>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
