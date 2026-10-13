/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetProjectsQuery } from "@/redux-store/features/project-api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
   FolderKanban,
   Plus,
   ArrowUpDown,
   ExternalLink,
   Globe,
   Sparkles,
   Code2,
   Cpu,
   Layers,
   ArrowRight,
   Loader2,
} from "lucide-react";

export default function DashboardHomePage() {
   const { data: projectsData, isLoading } = useGetProjectsQuery({});
   const projects = projectsData?.projects || [];

   // Compute statistics
   const totalProjects = projects.length;
   const categories = Array.from(new Set(projects.map((p: any) => p.category).filter(Boolean)));
   const allTechnologies = Array.from(
      new Set(projects.flatMap((p: any) => p.technologies || []).filter(Boolean))
   );
   const liveCount = projects.filter((p: any) => p.link?.live).length;

   return (
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl space-y-8">
         {/* Welcome Banner */}
         <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 sm:p-8 text-white shadow-lg">
            <div className="relative z-10 max-w-2xl">
               <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" /> Portfolio Control Center
               </span>
               <h1 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Welcome back, Sohag! 👋
               </h1>
               <p className="mt-2 text-sm sm:text-base text-blue-100">
                  Manage your showcased projects, drag and drop their display serials, and keep
                  your portfolio current with your latest engineering achievements.
               </p>

               <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/dashboard/sohag/projects/add">
                     <Button
                        size="sm"
                        className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-xs">
                        <Plus className="mr-1.5 h-4 w-4" /> Add New Project
                     </Button>
                  </Link>
                  <Link href="/dashboard/sohag/projects">
                     <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                        <ArrowUpDown className="mr-1.5 h-4 w-4" /> Manage & Reorder
                     </Button>
                  </Link>
                  <Link
                     href="/portfolio"
                     target="_blank">
                     <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/10 gap-1.5">
                        <Globe className="h-4 w-4" /> View Public Site
                     </Button>
                  </Link>
               </div>
            </div>

            {/* Decorative background glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
         </div>

         {/* Stats Cards */}
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
               <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                     Total Projects
                  </span>
                  <div className="rounded-xl bg-blue-50 p-2 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                     <FolderKanban className="h-5 w-5" />
                  </div>
               </div>
               <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {isLoading ? "..." : totalProjects}
               </p>
               <span className="mt-1 text-[11px] text-slate-400">All portfolio items</span>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
               <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                     Live Deployments
                  </span>
                  <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                     <Globe className="h-5 w-5" />
                  </div>
               </div>
               <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {isLoading ? "..." : liveCount}
               </p>
               <span className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  Active live links
               </span>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
               <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                     Categories
                  </span>
                  <div className="rounded-xl bg-violet-50 p-2 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400">
                     <Layers className="h-5 w-5" />
                  </div>
               </div>
               <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {isLoading ? "..." : categories.length}
               </p>
               <span className="mt-1 text-[11px] text-slate-400">Distinct domains</span>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
               <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                     Technologies
                  </span>
                  <div className="rounded-xl bg-amber-50 p-2 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
                     <Cpu className="h-5 w-5" />
                  </div>
               </div>
               <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {isLoading ? "..." : allTechnologies.length}
               </p>
               <span className="mt-1 text-[11px] text-slate-400">Unique stack tags</span>
            </div>
         </div>

         {/* Recent / Top Serial Projects Overview */}
         <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between mb-5">
               <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                     <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                     Current Project Display Order
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                     Projects ordered serial wise as they appear on your public website.
                  </p>
               </div>

               <Link href="/dashboard/sohag/projects">
                  <Button
                     variant="outline"
                     size="sm"
                     className="gap-1.5 text-xs">
                     Manage All <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
               </Link>
            </div>

            {isLoading ? (
               <div className="flex justify-center py-12">
                  <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
               </div>
            ) : projects.length === 0 ? (
               <div className="text-center py-10 border border-dashed rounded-xl">
                  <p className="text-sm text-slate-500">No projects found.</p>
                  <Link
                     href="/dashboard/sohag/projects/add"
                     className="mt-3 inline-block">
                     <Button size="sm">Create First Project</Button>
                  </Link>
               </div>
            ) : (
               <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {projects.slice(0, 6).map((project: any, index: number) => {
                     const thumbnail =
                        project.image && project.image.length > 0 ? project.image[0] : null;
                     return (
                        <div
                           key={project._id}
                           className="flex items-center justify-between py-3.5 gap-3 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 rounded-xl px-2 transition-colors">
                           <div className="flex items-center gap-3 min-w-0">
                              <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-1.5 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 font-mono text-xs font-bold border border-blue-200/60 dark:border-blue-900/40">
                                 #{index + 1}
                              </span>

                              <div className="relative h-10 w-14 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 dark:border-slate-800 flex-shrink-0">
                                 {thumbnail && (
                                    <Image
                                       src={thumbnail}
                                       alt={project.name}
                                       fill
                                       className="object-cover"
                                    />
                                 )}
                              </div>

                              <div className="min-w-0">
                                 <h4 className="font-semibold text-sm text-slate-900 dark:text-white truncate">
                                    {project.name}
                                 </h4>
                                 <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-[11px] text-slate-500">
                                       {project.category}
                                    </span>
                                    <span className="text-slate-300">•</span>
                                    <span className="text-[11px] text-slate-400">
                                       {project.type}
                                    </span>
                                 </div>
                              </div>
                           </div>

                           <div className="flex items-center gap-2">
                              {project.link?.live && (
                                 <a
                                    href={project.link.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    title="Live Preview">
                                    <ExternalLink className="h-4 w-4" />
                                 </a>
                              )}
                              <Badge
                                 variant="outline"
                                 className="hidden sm:inline-flex text-[10px]">
                                 Serial #{project.serial || index + 1}
                              </Badge>
                           </div>
                        </div>
                     );
                  })}
               </div>
            )}
         </div>
      </div>
   );
}
