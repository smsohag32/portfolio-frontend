"use client";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To get the current route
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
   const [isOpen, setOpen] = useState(false);
   const closeModal = () => {
      setOpen(false);
   };
   const pathname = usePathname(); // Current route path

   // Function to determine if the link is active
   const isActive = (path) => pathname === path;

   return (
      <div className="lg:px-5 fixed top-0 z-50  left-0 right-0 !bg-white bg-opacity-90 border-b border-b-[#a8a7a7f] backdrop-blur-sm">
         <div className="main-container flex items-center justify-between py-1">
            <div className="flex items-center gap-2">
               <p className="text-[20px] font-[300] uppercase "> Sohag Sheik</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
               <div className="flex items-center gap-6">
                  {["/", "/portfolio", "/experience", "/blogs", "/about"].map(
                     (path, index) => (
                        <Link
                           key={index}
                           href={path}
                           className={` py-3 relative ${isActive(path)
                              ? "text-black font-semibold"
                              : "text-gray-500"
                              }`}
                        >
                           {path === "/"
                              ? "Home"
                              : path.replace("/", "").replace(/^\w/, (c) => c.toUpperCase())}
                           {isActive(path) && (
                              <span className="absolute bottom-[-4px]  left-0  h-[3px] w-[28px] bg-black rounded"></span>
                           )}
                        </Link>
                     )
                  )}
               </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
               variant={"ghost"}
               onClick={() => setOpen(true)}
               className="lg:hidden"
            >
               <Menu />
            </Button>
         </div>

         {/* Mobile Navigation Sheet */}
         <Sheet open={isOpen} key={"top"} onOpenChange={closeModal} className="lg:hidden">
            <SheetContent side="top">
               <SheetHeader>
                  <SheetTitle>
                     <div className="flex items-center gap-2">
                        <Image src={logo} alt="logo" width={40} /> sohag sheik
                     </div>
                  </SheetTitle>
               </SheetHeader>

               <div className="mt-6">
                  <div className="flex flex-col w-full items-center gap-4">
                     {["/", "/portfolio", "/experience", "/blogs", "/about"].map(
                        (path, index) => (
                           <Link
                              key={index}
                              href={path}
                              className={`relative ${isActive(path)
                                 ? "text-black font-semibold"
                                 : "text-gray-500"
                                 }`}
                           >
                              {path === "/"
                                 ? "Home"
                                 : path.replace("/", "").replace(/^\w/, (c) => c.toUpperCase())}
                              {isActive(path) && (
                                 <span className="absolute bottom-[-4px] left-0 transform -translate-x-1/2 h-[2px] w-[20px] bg-black rounded"></span>
                              )}
                           </Link>
                        )
                     )}
                     <Button className="rounded-[24px] px-5" size={"sm"}>
                        Contact
                     </Button>
                  </div>
               </div>
            </SheetContent>
         </Sheet>
      </div>
   );
};

export default Header;
