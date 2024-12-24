"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, ChevronDown, ChevronUp, Code2, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
   image: string[] | StaticImageData[];
   category: string;
   type: string;
   description: string;
   features: Feature[];
   link: Link;
   technologies: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <Card className="w-full bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
         <CardHeader className="p-0">
            <div className="relative group">
               <Image
                  src={project.image[0]}
                  alt={project.name}
                  width={400}
                  height={280}
                  className="w-full object-cover h-[280px] transition-transform duration-300 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                     variant="outline"
                     className="border-white text-white hover:bg-white hover:text-black">
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
         </CardHeader>

         <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
               <h2 className="text-2xl font-bold text-gray-900">{project.name}</h2>
               <Badge
                  variant="outline"
                  className="text-sm font-medium border-gray-500 text-gray-700">
                  {project.type}
               </Badge>
            </div>

            <p className="text-gray-600 line-clamp-2 mb-4">{project.description}</p>

            <AnimatePresence>
               {isExpanded && (
                  <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: "auto" }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.3 }}>
                     <Separator className="my-4" />
                     <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
                           <Code2 className="mr-2 h-5 w-5" />
                           Key Features
                        </h3>
                        <ul className="space-y-2">
                           {project.features.map((feature, index) => (
                              <li
                                 key={index}
                                 className="text-sm text-gray-600 flex items-start">
                                 <ChevronDown className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                                 <div>
                                    <span className="font-medium text-gray-700">
                                       {feature.title}:
                                    </span>{" "}
                                    {feature.details}
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
                           <Layers className="mr-2 h-5 w-5" />
                           Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           {project.technologies.map((tech, index) => (
                              <Badge
                                 key={index}
                                 variant="secondary"
                                 className="text-xs bg-gray-100 text-gray-700">
                                 {tech}
                              </Badge>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </CardContent>

         <CardFooter className="flex flex-col gap-4 p-6 pt-0">
            <div className="flex justify-between w-full items-center">
               <div className="space-x-2">
                  <Button
                     variant="outline"
                     size="sm"
                     asChild
                     className="border-gray-300 text-gray-700 hover:bg-gray-100">
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
                     asChild
                     className="border-gray-300 text-gray-700 hover:bg-gray-100">
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
                  asChild
                  className="bg-black text-white hover:bg-gray-800">
                  <a
                     href={project.link.live}
                     target="_blank"
                     rel="noopener noreferrer">
                     <Eye className="mr-2 h-4 w-4" />
                     Live Preview
                  </a>
               </Button>
            </div>

            <Separator />

            <motion.div
               className="w-full flex justify-center"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}>
               <Button
                  variant="ghost"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-gray-600 hover:text-gray-900 w-full">
                  {isExpanded ? (
                     <>
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Hide Details
                     </>
                  ) : (
                     <>
                        <ChevronDown className="mr-2 h-4 w-4" />
                        See Details
                     </>
                  )}
               </Button>
            </motion.div>
         </CardFooter>
      </Card>
   );
};

export default ProjectCard;
