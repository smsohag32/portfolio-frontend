/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Server } from "lucide-react";
import { useGetProjectByIdQuery } from "@/redux-store/features/project-api";
import ProjectCardSkeleton from "@/components/skeleton/ProjectSkeleton";

export default function ProjectDetails() {
   const { id } = useParams();
   const { data: projectRes, isLoading } = useGetProjectByIdQuery(id);

   if (isLoading) {
      return (
         <div className="pt-16 main-container">
            <ProjectCardSkeleton />
         </div>
      );
   }

   const project = projectRes?.project;

   return (
      <div className="main-container pt-24 pb-10">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Card className="overflow-hidden">
               <CardHeader className="p-0">
                  {project.image[0] ? (
                     <Image
                        src={project.image[0]}
                        alt={project.name}
                        width={1200}
                        height={600}
                        className="w-full h-full object-cover"
                     />
                  ) : (
                     <div className="bg-slate-100 h-96 flex items-center justify-center">
                        <p className="text-sm text-center font-medium text-des">
                           Not found project photo.
                        </p>
                     </div>
                  )}
               </CardHeader>
               <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     <div className="space-y-6">
                        <div>
                           <CardTitle className="text-4xl font-medium text-title  mb-2">
                              {project.name}
                           </CardTitle>
                           <CardDescription className="text-xl">{project.type}</CardDescription>
                        </div>
                        <p className="text-lg leading-relaxed">{project.description}</p>
                        <div>
                           <h3 className="text-2xl font-semibold mb-3">Technologies:</h3>
                           <div className="flex flex-wrap gap-2">
                              {project?.technologies.map((tech: any, index: number) => (
                                 <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-sm">
                                    {tech}
                                 </Badge>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="space-y-6">
                        <div>
                           <h3 className="text-2xl font-semibold mb-3">Features:</h3>
                           <ul className="space-y-3">
                              {project.features.map((feature: any, index: number) => (
                                 <li
                                    key={index}
                                    className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                                    <span>
                                       <span className="font-semibold">{feature.title}:</span>{" "}
                                       {feature.details}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </CardContent>
               <CardFooter className="flex flex-col sm:flex-row justify-between items-center p-8 bg-muted">
                  <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0">
                     <Link
                        href={project.link.client}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button className="w-full sm:w-auto">
                           <Github className="mr-2 h-4 w-4" /> Client Repo
                        </Button>
                     </Link>
                     <Link
                        href={project.link.server}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button
                           variant="outline"
                           className="w-full sm:w-auto">
                           <Server className="mr-2 h-4 w-4" /> Server Repo
                        </Button>
                     </Link>
                  </div>
                  <Link
                     href={project.link.live}
                     target="_blank"
                     rel="noopener noreferrer">
                     <Button
                        variant="secondary"
                        className="w-full sm:w-auto">
                        <Globe className="mr-2 h-4 w-4" /> Live Demo
                     </Button>
                  </Link>
               </CardFooter>
            </Card>
         </motion.div>
      </div>
   );
}
