"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
   /** Small label shown in the pill above the title */
   badge: string;
   /** Icon rendered inside the badge pill */
   icon?: LucideIcon;
   /** Plain (dark) part of the title */
   title: string;
   /** Gradient-highlighted part of the title */
   highlight?: string;
   /** Supporting description under the title */
   description?: string;
   /** Render as h1 (only once per page) or h2 */
   as?: "h1" | "h2";
   className?: string;
}

const SectionHeading = ({
   badge,
   icon: Icon,
   title,
   highlight,
   description,
   as = "h2",
   className,
}: SectionHeadingProps) => {
   const Heading = as;

   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-80px" }}
         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
         className={cn(
            "relative mx-auto mb-14 flex max-w-3xl flex-col items-center text-center",
            className
         )}>
         {/* Badge / kicker */}
         <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm shadow-blue-500/5 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-indigo-500/10 dark:text-blue-300">
            <span className="relative flex h-2 w-2">
               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
               <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            </span>
            {Icon && <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />}
            {badge}
         </motion.span>

         {/* Title */}
         <Heading className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {title}{" "}
            {highlight && (
               <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                     {highlight}
                  </span>
                  {/* Hand-drawn style underline */}
                  <motion.svg
                     aria-hidden="true"
                     viewBox="0 0 200 12"
                     preserveAspectRatio="none"
                     className="absolute -bottom-2 left-0 h-2.5 w-full text-blue-500/40 dark:text-blue-400/40">
                     <motion.path
                        d="M2 9 C 50 2, 150 2, 198 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.4, ease: "easeInOut" }}
                     />
                  </motion.svg>
               </span>
            )}
         </Heading>

         {/* Description */}
         {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
               {description}
            </p>
         )}
      </motion.div>
   );
};

export default SectionHeading;
