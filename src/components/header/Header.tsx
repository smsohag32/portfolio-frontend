"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import Logo from "./Logo";

export const navItems = [
   { path: "/", label: "Home" },
   { path: "/portfolio", label: "Portfolio" },
   { path: "/experience", label: "Experience" },
   { path: "/playground", label: "Playground" },
   { path: "/blogs", label: "Blogs" },
   { path: "/about", label: "About" },
   { path: "/contact-me", label: "Contact" },
];

const isPathActive = (pathname: string, path: string) =>
   path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);

export default function Header() {
   const isScrolled = useScrollEffect();
   const pathname = usePathname();

   return (
      <motion.header
         className={cn(
            "fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300",
            isScrolled
               ? "border-slate-200/70 bg-white/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
               : "border-transparent bg-white dark:bg-slate-950"
         )}
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ type: "spring", stiffness: 300, damping: 30 }}>
         <div className="main-container flex h-16 items-center justify-between gap-6 lg:h-[72px]">
            <Logo />
            <DesktopNav pathname={pathname} />
            <div className="flex items-center gap-2">
               <Link
                  href="/contact-me"
                  className="group hidden items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 dark:bg-white dark:text-slate-900 lg:inline-flex">
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
               </Link>
               <MobileNav pathname={pathname} />
            </div>
         </div>
      </motion.header>
   );
}

function DesktopNav({ pathname }: { pathname: string }) {
   return (
      <nav
         aria-label="Main navigation"
         className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1 dark:border-slate-800 dark:bg-slate-900/60 md:flex">
         {navItems.map((item) => {
            const active = isPathActive(pathname, item.path);
            return (
               <Link
                  key={item.path}
                  href={item.path}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                     "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 lg:px-4",
                     active
                        ? "text-white dark:text-slate-900"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  )}>
                  {active && (
                     <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-slate-900 shadow-sm dark:bg-white"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                     />
                  )}
                  <span className="relative z-10">{item.label}</span>
               </Link>
            );
         })}
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
               className="rounded-full border border-slate-200 md:hidden">
               <Menu className="h-5 w-5" />
               <span className="sr-only">Open menu</span>
            </Button>
         </SheetTrigger>
         <SheetContent
            side="right"
            className="flex w-[300px] flex-col bg-white sm:w-[380px]">
            <SheetHeader>
               <SheetTitle className="text-left">
                  <Logo />
               </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1">
               {navItems.map((item, i) => {
                  const active = isPathActive(pathname, item.path);
                  return (
                     <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}>
                        <Link
                           href={item.path}
                           onClick={() => setIsOpen(false)}
                           className={cn(
                              "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                              active
                                 ? "bg-slate-900 text-white"
                                 : "text-slate-700 hover:bg-slate-100"
                           )}>
                           {item.label}
                           {active && <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />}
                        </Link>
                     </motion.div>
                  );
               })}
            </nav>
            <Link
               href="/contact-me"
               onClick={() => setIsOpen(false)}
               className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25">
               Let&apos;s Talk
               <ArrowUpRight className="h-4 w-4" />
            </Link>
         </SheetContent>
      </Sheet>
   );
}
