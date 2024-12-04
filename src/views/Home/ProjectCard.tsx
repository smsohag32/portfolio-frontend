import React from "react";
import projectImage from "@/assets/photo/project.webp";
import Image from "next/image";
import { View } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const ProjectCard = ({ project }: { project: any }) => {
   return (
      <div className="w-full">
         <Image
            src={project.image[0]}
            alt={project.name}
            width={400}
            height={300}
            className="w-full object-cover max-h-[650px]"
         />

         <div className="flex items-center justify-between flex-col lg:flex-row gap-6 mt-[24px] max-w-3xl">
            <p className="#1D1D1D text-[48px] font-normal leading-[54px]">{project?.name}</p>
            <button
               type="button"
               className="flex items-center text-sm text-[#ffffff] font-normal bg-[#2F2F2F] border border-[#000000] rounded-full px-2.5 py-[4px]  gap-3">
               Live Preview
               <span className="bg-white text-[#251818] ps-2 py-2 pe-1.5 rounded-full ">
                  {" "}
                  <View size={14} />
               </span>
            </button>
         </div>
         <div className="mt-6">
            <Badge variant="outline">React Js</Badge>
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
            <Badge variant="outline">Node Js</Badge>
            <Badge variant="outline">NoSQL</Badge>
         </div>
         <p className="mt-4">{project?.description}</p>
      </div>
   );
};

export default ProjectCard;
