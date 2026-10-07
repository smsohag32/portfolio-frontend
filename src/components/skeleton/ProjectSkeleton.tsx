"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

/** Loading placeholder that mirrors the layout of ProjectCard */
const ProjectCardSkeleton = () => {
   return (
      <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900">
         <Skeleton className="aspect-[16/10] w-full rounded-none" />
         <div className="flex flex-1 flex-col p-6">
            <Skeleton className="mb-3 h-3 w-24" />
            <Skeleton className="mb-3 h-6 w-3/4" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="mb-5 h-4 w-2/3" />
            <div className="mb-6 flex gap-2">
               <Skeleton className="h-6 w-16 rounded-lg" />
               <Skeleton className="h-6 w-20 rounded-lg" />
               <Skeleton className="h-6 w-14 rounded-lg" />
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
               <Skeleton className="h-9 w-20 rounded-full" />
               <Skeleton className="h-9 w-32 rounded-full" />
            </div>
         </div>
      </div>
   );
};

export default ProjectCardSkeleton;
