"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { useGetProjectsQuery } from "@/redux-store/features/project-api";
import ProjectCardSkeleton from "@/components/skeleton/ProjectSkeleton";
import { ArrowRight, FolderKanban } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const ProjectSection = () => {
   const { data: projects, isLoading } = useGetProjectsQuery("");

   return (
      <section className="relative overflow-hidden py-24">
         {/* Soft background accents */}
         <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
         <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />

         <div className="main-container relative">
            <SectionHeading
               badge="Portfolio"
               icon={FolderKanban}
               title="Featured"
               highlight="Projects"
               description="A selection of recent work — enterprise dashboards, e-commerce platforms, and real-time applications built end to end."
            />

            <div className="grid h-full w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
               {isLoading
                  ? [1, 2].map((i) => <ProjectCardSkeleton key={i} />)
                  : projects &&
                    projects?.projects?.slice(0, 6).map((project: any) => (
                       <ProjectCard
                          key={project?._id ?? project?.id}
                          project={project}
                       />
                    ))}
            </div>

            <div className="mt-14 flex justify-center">
               <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-white dark:hover:text-slate-900">
                  View All Projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default ProjectSection;
