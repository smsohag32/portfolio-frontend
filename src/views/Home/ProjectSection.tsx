"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProjectCard from "./ProjectCard";
import { useGetProjectsQuery } from "@/redux-store/features/project-api";
import ProjectCardSkeleton from "@/components/skeleton/ProjectSkeleton";

const ProjectSection = () => {
   const { data: projects, isLoading } = useGetProjectsQuery("");

   return (
      <div className="main-container mb-[84px] overflow-hidden">
         <div className=" font-flecha">
            <div className=" flex items-end  gap-4">
               <div className="">
                  {" "}
                  <p className="text-[#545454] text-[28px] lg:text-[44px] leading-[50px] lg:leading-[76.8px] !font-[300] ">
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

         <div className="pt-4 grid grid-cols-1 w-full h-auto items-start lg:grid-cols-2 gap-10">
            {isLoading
               ? [1, 2].map((i) => <ProjectCardSkeleton key={i} />)
               : projects &&
                 projects?.projects?.slice(0, 6).map((project: any) => (
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
