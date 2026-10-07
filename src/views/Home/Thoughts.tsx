"use client";

import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";
import { blogsList } from "@/data/blogs";
import ThoughtCard from "./ThoughtCard";
import SectionHeading from "@/components/ui/section-heading";

const Thoughts = () => {
   return (
      <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
         <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />

         <div className="main-container relative">
            <SectionHeading
               badge="Blog & Insights"
               icon={PenLine}
               title="Latest"
               highlight="Thoughts"
               description="Insights, lessons, and best practices on modern web development, architecture, and design."
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
               {blogsList?.slice(0, 3).map((thought, index) => (
                  <ThoughtCard
                     key={thought.title}
                     thought={thought}
                     index={index}
                  />
               ))}
            </div>

            <div className="mt-14 flex justify-center">
               <Link
                  href="/blogs"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-white dark:hover:text-slate-900">
                  Read All Articles
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Thoughts;
