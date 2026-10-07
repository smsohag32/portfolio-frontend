/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetProjectsQuery } from "@/redux-store/features/project-api";
import ProjectCardSkeleton from "@/components/skeleton/ProjectSkeleton";
import { FolderKanban, Search, X } from "lucide-react";
import ProjectCard from "../Home/ProjectCard";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export default function Portfolio() {
   const { data: projects, isLoading } = useGetProjectsQuery("");
   const [filter, setFilter] = useState("");
   const [selectedTech, setSelectedTech] = useState<string | null>(null);

   const allTechnologies =
      projects?.projects?.reduce((acc: string[], project: any) => {
         project?.technologies?.forEach((tech: string) => {
            if (!acc.includes(tech)) {
               acc.push(tech);
            }
         });
         return acc;
      }, []) || [];

   const filteredProjects = projects?.projects?.filter(
      (project: any) =>
         (project?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            project?.description?.toLowerCase().includes(filter.toLowerCase())) &&
         (!selectedTech || project.technologies?.includes(selectedTech))
   );

   return (
      <section className="relative overflow-hidden bg-slate-50/50 pb-24 pt-28 dark:bg-slate-950/50">
         {/* Glow Background */}
         <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

         <div className="main-container relative">
            <SectionHeading
               as="h1"
               badge="Portfolio"
               icon={FolderKanban}
               title="Featured"
               highlight="Projects"
               description="Explore enterprise dashboards, e-commerce platforms, paperless meeting suites, and real-time security systems built with precision."
            />

            {/* Filter Controls Bar */}
            <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-6">
               {/* Search Box */}
               <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                     type="text"
                     placeholder="Search projects by name, tech stack, or keyword..."
                     value={filter}
                     onChange={(e) => setFilter(e.target.value)}
                     className="w-full rounded-2xl border border-slate-200/80 bg-white py-3.5 pl-12 pr-10 text-sm text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-blue-400"
                  />
                  {filter && (
                     <button
                        onClick={() => setFilter("")}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <X className="h-4 w-4" />
                     </button>
                  )}
               </div>

               {/* Tech Pill Filters */}
               {allTechnologies.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center gap-2">
                     <button
                        onClick={() => setSelectedTech(null)}
                        className={cn(
                           "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200",
                           selectedTech === null
                              ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900"
                              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                        )}>
                        All Stack
                     </button>
                     {allTechnologies.map((tech: string) => {
                        const isSelected = selectedTech === tech;
                        return (
                           <button
                              key={tech}
                              onClick={() => setSelectedTech(isSelected ? null : tech)}
                              className={cn(
                                 "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                                 isSelected
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 dark:bg-blue-500"
                                    : "border border-slate-200/80 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white"
                              )}>
                              {tech}
                           </button>
                        );
                     })}
                  </div>
               )}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
               {isLoading ? (
                  [1, 2, 3, 4].map((i) => <ProjectCardSkeleton key={i} />)
               ) : (
                  <AnimatePresence mode="popLayout">
                     {filteredProjects?.map((project: any) => (
                        <motion.div
                           key={project?._id || project?.id}
                           layout
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           transition={{ duration: 0.3 }}>
                           <ProjectCard project={project} />
                        </motion.div>
                     ))}
                  </AnimatePresence>
               )}
            </div>

            {/* Empty Search Result State */}
            {!isLoading && filteredProjects?.length === 0 && (
               <div className="my-16 rounded-3xl border border-dashed border-slate-300 bg-white/50 p-12 text-center dark:border-slate-800 dark:bg-slate-900/50">
                  <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                     No projects match your search criteria.
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                     Try clearing tech filters or searching with a different keyword.
                  </p>
                  <button
                     onClick={() => {
                        setFilter("");
                        setSelectedTech(null);
                     }}
                     className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-400">
                     Reset All Filters
                  </button>
               </div>
            )}
         </div>
      </section>
   );
}
