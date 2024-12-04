import ExperienceCard from "@/components/cards/ExperienceCard";
import { experiences } from "@/data/experience";
import React from "react";

const ExperienceSection = () => {
   return (
      <div className="main-container mb-[84px]">
         <div className="flex font-flecha items-center mt-6 w-full justify-start">
            <div className="mb-6 flex items-end gap-4">
               <div className="">
                  {" "}
                  <p className="text-[#545454] text-start text-[28px] lg:text-[44px] leading-[50px] lg:leading-[60.8px] font-normal">
                     Work
                  </p>
                  <h2 className="lg:text-[64px] text-[35px] lg:leading-[70.8px] leading-[50px] font-normal ">
                     Experience
                  </h2>
                  <span className="pb-5 flex items-start justify-start mt-4">
                     <svg
                        width="135"
                        height="2"
                        viewBox="0 0 135 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M0 1H135"
                           stroke="#545454"
                        />
                     </svg>
                  </span>
               </div>
            </div>
         </div>

         <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
            {experiences.map((experience) => (
               <ExperienceCard
                  key={experience.id}
                  experience={experience}
               />
            ))}
         </div>
      </div>
   );
};

export default ExperienceSection;
