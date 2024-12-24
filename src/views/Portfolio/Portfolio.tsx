"use client";
import { projects } from "@/data/project";
import ProjectCard from "../Home/ProjectCard";

export default function Portfolio() {
   return (
      <div className="main-container pt-20 pb-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
               <ProjectCard
                  project={project}
                  key={index}
               />
            ))}
         </div>
      </div>
   );
}
