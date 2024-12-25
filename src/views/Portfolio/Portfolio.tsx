"use client";

import ProjectCard from "../Home/ProjectCard";
import { useGetProjectsQuery } from "@/redux-store/features/project-api";

export default function Portfolio() {
   const { data: projects, isLoading } = useGetProjectsQuery("");

   return (
      <div className="main-container pt-20 pb-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects?.projects.map((project, index: number) => (
               <ProjectCard
                  project={project}
                  key={index}
               />
            ))}
         </div>
      </div>
   );
}
