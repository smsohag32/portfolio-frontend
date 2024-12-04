import Image, { StaticImageData } from "next/image";
import React from "react";

// Define an interface for the `experience` prop
interface Experience {
   id: number;
   img: string | StaticImageData;
   company: string; // Company name
   title: string; // Job title
   duration: string; // Duration of the experience
}

interface ExperienceCardProps {
   experience: Experience; // The experience prop is an object of type Experience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
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
