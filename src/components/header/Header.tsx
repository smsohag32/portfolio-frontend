"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import AnimatedLogo from "./AnimatedLogo";

const navItems = [
   { path: "/", label: "Home" },
   { path: "/portfolio", label: "Portfolio" },
   { path: "/experience", label: "Experience" },
   { path: "/blogs", label: "Blogs" },
   { path: "/about", label: "About" },
   { path: "/contact-me", label: "Contact" },
];

export default function Header() {
   const isScrolled = useScrollEffect();
   const pathname = usePathname();

   return (
      <motion.header
         className={cn(
            "fixed top-0 left-0 right-0 z-50 py-3 lg:py-0 border-b border-b-slate-100 border-opacity-45 transition-all duration-300",
            isScrolled ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm" : "bg-white"
         )}
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ type: "spring", stiffness: 300, damping: 30 }}>
         <div className="main-container flex items-center justify-between">
            <AnimatedLogo />
            <DesktopNav pathname={pathname} />
            <MobileNav pathname={pathname} />
         </div>
      </motion.header>
   );
}

function DesktopNav({ pathname }: { pathname: string }) {
   return (
      <nav className="hidden md:flex items-center space-x-8">
         {navItems.map((item) => (
            <NavItem
               key={item.path}
               item={item}
               pathname={pathname}
            />
         ))}
      </nav>
   );
}

function MobileNav({ pathname }: { pathname: string }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <Sheet
         open={isOpen}
         onOpenChange={setIsOpen}>
         <SheetTrigger asChild>
            <Button
               variant="ghost"
               size="icon"
               className="md:hidden">
               <Menu className="h-6 w-6" />
               <span className="sr-only">Open menu</span>
            </Button>
         </SheetTrigger>
         <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white">
            <SheetHeader>
               <SheetTitle className="text-2xl font-bold">
                  {" "}
                  <AnimatedLogo />
               </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 px-2 mt-8">
               {navItems.map((item) => (
                  <NavItem
                     key={item.path}
                     item={item}
                     pathname={pathname}
                     mobile
                     onClick={() => setIsOpen(false)}
                  />
               ))}
            </nav>
         </SheetContent>
      </Sheet>
   );
}

function NavItem({
   item,
   pathname,
   mobile = false,
   onClick,
}: {
   item: { path: string; label: string };
   pathname: string;
   mobile?: boolean;
   onClick?: () => void;
}) {
   const isActive = pathname === item.path;

   return (
      <Link
         href={item.path}
         className={cn(
            "relative  py-4 transition-colors duration-200 group",
            isActive ? "text-black" : "text-gray-500 hover:text-black",
            mobile && "text-lg"
         )}
         onClick={onClick}>
         <span className="relative z-10">{item.label}</span>
         {isActive && (
            <motion.span
               className="absolute bottom-0 left-0 w-10 h-[2px] bg-black"
               layoutId="underline"
               initial={{ width: 0 }}
               animate={{ width: "20px" }}
               transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
         )}
         <motion.span
            className="absolute bottom-0 left-0 h-[2px]  bg-black opacity-0 group-hover:opacity-100"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
         />
      </Link>
   );
}
