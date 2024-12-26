"use client";
import { ReactNode } from "react";
import React from "react";

import { Toaster } from "../ui/sonner";
import { DashboardSidebar } from "./SideBar";
import TopBar from "./TopBar";

interface DashboardLayoutProps {
   children: ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
   const toggle = false;
   return (
      <div className="w-full relative overflow-hidden ">
         <div
            className={` min-h-screen  fixed top-0 left-0 bottom-0 z-50 transition-all max-w-full duration-500 primary-bg transform ${
               toggle ? "lg:-translate-x-full translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}>
            <DashboardSidebar />
         </div>
         <div
            className={` w-full duration-500  transition-all transform  ${
               toggle ? "lg:pl-0 pl-[270px]" : "lg:pl-[270px] pl:0"
            }`}>
            <div className="w-full px-6 sticky top-0 left-0 right-0">
               <TopBar />
            </div>
            <div className="px-6 py-4">{children}</div>
         </div>
         <Toaster position="top-right" />
      </div>
   );
};

export default DashboardLayout;
