"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, UserRound } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Thought {
   title: string;
   summary: string;
   date: string;
   author: string;
   categories: string[];
   image: string;
   link: string;
}

interface ThoughtCardProps {
   thought: Thought;
   index: number;
   /** Wide, horizontal layout used for highlighted articles */
   featured?: boolean;
}

const ThoughtCard: React.FC<ThoughtCardProps> = ({ thought, index, featured = false }) => {
   const [primaryCategory, ...otherCategories] = thought.categories;

   return (
      <motion.article
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-60px" }}
         transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
         className={cn(
            "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900",
            featured && "md:flex-row"
         )}>
         {/* Cover */}
         <a
            href={thought.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={thought.title}
            className={cn(
               "relative block aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800",
               featured && "md:aspect-auto md:w-1/2 md:min-h-[340px]"
            )}>
            <Image
               src={thought.image}
               alt={thought.title}
               fill
               sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
               className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            {primaryCategory && (
               <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md">
                  {primaryCategory}
               </span>
            )}
         </a>

         {/* Content */}
         <div className={cn("flex flex-1 flex-col p-6", featured && "md:p-10 md:justify-center")}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500 dark:text-slate-400">
               <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {thought.date}
               </span>
               <span className="inline-flex items-center gap-1.5">
                  <UserRound className="h-3.5 w-3.5" />
                  {thought.author}
               </span>
            </div>

            <h3
               className={cn(
                  "mt-3 font-bold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400",
                  featured ? "text-2xl md:text-3xl" : "text-lg"
               )}>
               <a
                  href={thought.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  {thought.title}
               </a>
            </h3>

            <p
               className={cn(
                  "mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400",
                  featured ? "line-clamp-4 md:text-base" : "line-clamp-3"
               )}>
               {thought.summary}
            </p>

            {otherCategories.length > 0 && (
               <ul className="mt-5 flex flex-wrap gap-2">
                  {otherCategories.map((category) => (
                     <li
                        key={category}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        #{category}
                     </li>
                  ))}
               </ul>
            )}

            <a
               href={thought.link}
               target="_blank"
               rel="noopener noreferrer"
               className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-slate-900 transition-all duration-300 hover:gap-2.5 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
               Read Article
               <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
         </div>
      </motion.article>
   );
};

export default ThoughtCard;
