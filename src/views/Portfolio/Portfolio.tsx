/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ProjectCardSkeleton from "@/components/skeleton/ProjectSkeleton";
import ProjectCard from "../Home/ProjectCard";
import { useGetProjectsQuery } from "@/redux-store/features/project-api";

export default function Portfolio() {
   const { data: projects, isLoading } = useGetProjectsQuery("");

   return (
      <div className="main-container pt-20 pb-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {isLoading
               ? [1, 2].map((i) => <ProjectCardSkeleton key={i} />)
               : projects &&
                 projects?.projects?.map((project: any) => (
                    <ProjectCard
                       key={project?.id}
                       project={project}
                    />
                 ))}
         </div>
      </div>
   );
}
