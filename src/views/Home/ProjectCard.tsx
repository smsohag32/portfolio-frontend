import React from "react";
import Image from "next/image";
import { ExternalLink, Github, View } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Feature {
   title: string;
   details: string;
}

interface Link {
   server: string;
   client: string;
   live: string;
}

interface Project {
   id: number;
   name: string;
   image: string[];
   category: string;
   type: string;
   description: string;
   features: Feature[];
   link: Link;
   technologies: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
   return (
      <div className="w-full  text-title   overflow-hidden transition-all duration-300 ">
         <div className="relative group">
            <Image
               src={project.image[0]}
               alt={project.name}
               width={400}
               height={400}
               className="w-full object-cover h-[400px] group-hover:rounded-t-[8px] transition-transform duration-300 "
            />
            <div className="absolute inset-0 bg-black group-hover:rounded-t-[8px] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <Button
                  variant="outline"
                  className=" border-white hover:bg-white text-title">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <a
                     href={project.link.live}
                     target="_blank"
                     rel="noopener noreferrer">
                     View Project
                  </a>
               </Button>
            </div>
         </div>

         <div className="p-6">
            <div className="flex items-center justify-between mb-4">
               <h2 className="text-3xl font-bold">{project.name}</h2>
               <Badge
                  variant="outline"
                  className="text-sm font-medium">
                  {project.type}
               </Badge>
            </div>

            <p className="text-des mb-4">{project.description}</p>

            <div className="mb-4">
               <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
               <ul className="list-disc list-inside space-y-1">
                  {project.features.map((feature, index) => (
                     <li
                        key={index}
                        className="text-sm">
                        <span className="font-medium">{feature.title}:</span> {feature.details}
                     </li>
                  ))}
               </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
               {project.technologies.map((tech, index) => (
                  <Badge
                     key={index}
                     variant="secondary"
                     className="text-xs">
                     {tech}
                  </Badge>
               ))}
            </div>

            <div className="flex justify-between items-center">
               <div className="space-x-2">
                  <Button
                     variant="outline"
                     size="sm"
                     asChild>
                     <a
                        href={project.link.client}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Client
                     </a>
                  </Button>
                  <Button
                     variant="outline"
                     size="sm"
                     asChild>
                     <a
                        href={project.link.server}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Server
                     </a>
                  </Button>
               </div>
               <Button
                  variant="default"
                  size="sm"
                  asChild>
                  <a
                     href={project.link.live}
                     target="_blank"
                     rel="noopener noreferrer">
                     <View className="mr-2 h-4 w-4" />
                     Live Preview
                  </a>
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
