"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Globe, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface Feature {
   title: string;
   details: string;
}

interface LinkType {
   server: string;
   client: string;
   live: string;
}

interface Project {
   _id: any;
   id: number;
   name: string;
   image: (string | StaticImageData)[];

   category: string;
   type: string;
   description: string;
   features: Feature[];
   link: LinkType;
   technologies: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
   return (
      <TooltipProvider>
         <CardContainer className="inter-var w-full h-full">
            <CardBody className="bg-gray-50 relative h-full w-full group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  rounded-xl p-6 border">
               <CardItem
                  translateZ="30"
                  className="">
                  <div className="flex items-center mb-6">
                     <motion.div
                        className="w-3 h-3 rounded-full bg-red-500 mr-2"
                        whileHover={{ scale: 1.2 }}
                     />
                     <motion.div
                        className="w-3 h-3 rounded-full bg-yellow-500 mr-2"
                        whileHover={{ scale: 1.2 }}
                     />
                     <motion.div
                        className="w-3 h-3 rounded-full bg-green-500"
                        whileHover={{ scale: 1.2 }}
                     />
                  </div>
               </CardItem>
               <CardItem
                  translateZ="10"
                  className="text-2xl font-bold text-neutral-600 dark:text-white">
                  {project.name}
               </CardItem>
               <CardItem
                  as="p"
                  translateZ="10"
                  className="text-neutral-500 line-clamp-3 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {project.description}
               </CardItem>
               <CardItem
                  translateZ="70"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4">
                  {project.image[0] ? (
                     <Image
                        src={project.image[0]}
                        alt={project.name}
                        width={400}
                        height={280}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                     />
                  ) : (
                     <div className="h-60 w-full object-cover rounded-xl bg-stone-100 group-hover/card:shadow-xl"></div>
                  )}
               </CardItem>

               <div className="flex justify-between items-center mt-12">
                  <div className="flex gap-4">
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <LinkButton
                              href={project.link.live}
                              icon={<Globe className="w-5 h-5" />}
                           />
                        </TooltipTrigger>
                        <TooltipContent>Live Demo</TooltipContent>
                     </Tooltip>
                  </div>
                  <CardItem
                     translateZ="80"
                     rotateX={8}
                     rotateZ={-3}>
                     <motion.div className="flex items-center justify-center lg:justify-start">
                        <Link href={`/portfolio/${project?._id}`}>
                           <Button className="bg-black text-white hover:bg-gray-800">
                              View Details <ChevronRight className="ml-2 h-4 w-4" />
                           </Button>
                        </Link>
                     </motion.div>
                  </CardItem>
               </div>
            </CardBody>
         </CardContainer>
      </TooltipProvider>
   );
};

// Reusable Link Button Component
function LinkButton({ href, icon }: { href: string; icon: React.ReactNode }) {
   return (
      <motion.a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="bg-white dark:bg-black text-black dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}>
         {icon}
      </motion.a>
   );
}

export default ProjectCard;
