"use client"
import React, { useState } from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,

} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';




const Header = () => {
   const [isOpen, setOpen] = useState(false)

   const closeModal = () => {
      setOpen(false)
   }
   return (
      <div className='lg:px-5 fixed top-0 py-3 left-0 right-0 z-50  bg-white bg-opacity-90 border-b border-b-[#a8a7a7f] backdrop-blur-sm'>
         <div className='main-container flex items-center justify-between py-1 '>
            <div className='flex items-center gap-2'>
               <p className='text-[20px] font-[300] uppercase '> Sohag Sheik</p>
            </div>

            <div className='hidden lg:flex items-center gap-6'>
               <div className='flex items-center gap-6'>
                  <Link href={"/"}>Home</Link>
                  <Link href={"/"}>About me</Link>
                  <Link href={"/"}>Portfolio</Link>
                  <Link href={"/"}>Experience</Link>
                  <Link href={"/"}>Blogs</Link>
               </div>
               {/* <Button className='rounded-[24px] px-5' size={"sm"}>Contact</Button> */}
            </div>

            <Button variant={"ghost"} onClick={() => setOpen(true)} className='lg:hidden'><Menu /></Button>
         </div>

         <Sheet open={isOpen} key={"top"} onOpenChange={closeModal} className="lg:hidden">
            <SheetContent side="top">
               <SheetHeader>
                  <SheetTitle> <div className='flex items-center gap-2'>
                     <Image src={logo} alt='logo' width={40} /> sohag sheik
                  </div></SheetTitle>
               </SheetHeader>

               <div className='mt-6'>
                  <div className='flex flex-col w-full items-center gap-4'>
                     <div className='flex flex-col  w-full items-center gap-4'>
                        <Link href={"/"}>About me</Link>
                        <Link href={"/"}>Portfolio</Link>
                        <Link href={"/"}>Experience</Link>
                        <Link href={"/"}>Blogs</Link>
                     </div>
                     <Button className='rounded-[24px] px-5' size={"sm"}>Contact</Button>
                  </div>

               </div>
            </SheetContent>
         </Sheet>

      </div>
   );
};

export default Header;
