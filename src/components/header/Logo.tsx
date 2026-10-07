import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Logo({ textClassName }: { textClassName?: string }) {
   return (
      <Link href={"/"} aria-label="Sohag Sheik - Home" className="flex items-center gap-2.5 group">
         <motion.div
            className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 overflow-hidden"
            whileHover={{ scale: 1.05, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
         >
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="text-white relative z-10"
            >
               <path
                  d="M16 7H10C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13H14C15.6569 13 17 14.3431 17 16C17 17.6569 15.6569 19 14 19H8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <circle cx="18" cy="7" r="1.5" fill="currentColor" />
               <circle cx="6" cy="19" r="1.5" fill="currentColor" />
            </svg>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
         </motion.div>
         <span className={cn("font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white", textClassName)}>
            Sohag<span className="text-blue-600">.</span>
         </span>
      </Link>
   );
}
