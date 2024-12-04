import ExOne from "@/assets/experience/ExOne";
import Image from "next/image";
import React from "react";
// import p2m from "@/assets/experience/p2m.svg";
const ExperienceCard = ({ experience }: { experience: any }) => {
   return (
      <div>
         <Image
            src={experience?.img}
            alt="Logo"
            width={80}
            height={80}
            className="w-20"
         />
         <div className="mt-4">
            <p className="text-title text-[20px]">{experience?.company}</p>
            <div className="text-des text-base">
               <p>{experience?.title}</p>
               <p className="mt-5">{experience?.duration}</p>
            </div>
         </div>
      </div>
   );
};

export default ExperienceCard;
