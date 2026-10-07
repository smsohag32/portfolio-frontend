"use client";

import { PenLine } from "lucide-react";
import { blogsList } from "@/data/blogs";
import ThoughtCard from "../Home/ThoughtCard";
import SectionHeading from "@/components/ui/section-heading";

const Blogs = () => {
   const [featured, ...rest] = blogsList ?? [];

   return (
      <section className="relative overflow-hidden bg-slate-50 pb-24 pt-28 dark:bg-slate-950">
         <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

         <div className="main-container relative">
            <SectionHeading
               as="h1"
               badge="Blog & Insights"
               icon={PenLine}
               title="Thoughts on"
               highlight="Web Development"
               description="Practical write-ups on frontend technologies, backend architecture, performance, and the craft of building modern web applications."
            />

            {featured && (
               <div className="mb-8">
                  <ThoughtCard
                     thought={featured}
                     index={0}
                     featured
                  />
               </div>
            )}

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
               {rest.map((thought, index) => (
                  <ThoughtCard
                     key={thought.title}
                     thought={thought}
                     index={index}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Blogs;
