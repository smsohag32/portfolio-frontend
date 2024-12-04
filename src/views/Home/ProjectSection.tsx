import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project";

const ProjectSection = () => {
   return (
      <div className="main-container mb-[84px]">
         <div className="mb-6 font-flecha">
            <div className=" flex items-end  gap-4">
               <div className="">
                  {" "}
                  <p className="text-[#545454] text-[35px] lg:text-[64px] leading-[50px] lg:leading-[76.8px] !font-[300] ">
                     Recent
                  </p>
                  <h2 className="lg:text-[64px] text-[35px] lg:leading-[76.8px] leading-[50px] font-medium ">
                     Project
                  </h2>
               </div>
               <span className="pb-5">
                  <svg
                     width="135"
                     height="2"
                     viewBox="0 0 135 2"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M0 1H135"
                        stroke="black"
                     />
                  </svg>
               </span>
            </div>
         </div>

         <div className="pt-4 grid grid-cols-1 lg:grid-cols-1 gap-[48px]">
            {projects?.map((project) => (
               <ProjectCard
                  key={project?.id}
                  project={project}
               />
            ))}
         </div>
      </div>
   );
};

export default ProjectSection;
