/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetProjectsQuery } from "@/redux-store/features/project-api";
import ProjectCardSkeleton from "@/components/skeleton/ProjectSkeleton";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Code, Search } from "lucide-react";
import ProjectCard from "../Home/ProjectCard";

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const itemVariants = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
},
};

export default function Portfolio() {
   const { data: projects, isLoading } = useGetProjectsQuery("");
   const [filter, setFilter] = useState("");
   const [selectedTech, setSelectedTech] = useState<string | null>(null);

   const allTechnologies =
      projects?.projects?.reduce((acc: string[], project: any) => {
         project.technologies.forEach((tech: string) => {
            if (!acc.includes(tech)) {
               acc.push(tech);
            }
         });
         return acc;
      }, []) || [];

   const filteredProjects = projects?.projects?.filter(
      (project: any) =>
         project?.name?.toLowerCase().includes(filter.toLowerCase()) &&
         (!selectedTech || project.technologies.includes(selectedTech))
   );

   return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
         <motion.div
            className="main-container pt-20 pb-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}>
            <motion.div
               className="text-center mb-12"
               variants={itemVariants}>
               <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                  My Project Showcase
               </h1>
               <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Explore my latest works and creative endeavors
               </p>
               <div className="flex items-center justify-center mb-8">
                  <Code className="mr-2 h-6 w-6 text-primary" />
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                     Frontend Engineer
                  </span>
               </div>
            </motion.div>

            <motion.div
               className="flex flex-wrap justify-center gap-4 mb-8"
               variants={itemVariants}>
               <Badge
                  variant={selectedTech === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTech(null)}>
                  All
               </Badge>
               {allTechnologies.map((tech: any) => (
                  <Badge
                     key={tech}
                     variant={selectedTech === tech ? "default" : "outline"}
                     className="cursor-pointer"
                     onClick={() => setSelectedTech(tech)}>
                     {tech}
                  </Badge>
               ))}
            </motion.div>

            <motion.div
               className="relative mb-8 w-full max-w-md mx-auto"
               variants={itemVariants}>
               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
               <Input
                  type="text"
                  placeholder="Search projects..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="pl-10  w-full"
               />
            </motion.div>

            <AnimatePresence>
               <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
                  variants={containerVariants}>
                  {isLoading
                     ? [1, 2, 3, 4, 5, 6].map((i) => (
                          <motion.div
                             key={i}
                             variants={itemVariants}>
                             <ProjectCardSkeleton />
                          </motion.div>
                       ))
                     : filteredProjects?.map((project: any) => (
                          <motion.div
                             key={project?.id}
                             variants={itemVariants}
                             layout
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             exit={{ opacity: 0 }}>
                             <ProjectCard project={project} />
                          </motion.div>
                       ))}
               </motion.div>
            </AnimatePresence>

            {filteredProjects?.length === 0 && (
               <motion.p
                  className="text-center text-gray-500 dark:text-gray-400 mt-8"
                  variants={itemVariants}>
                  No projects found. Try adjusting your search or filter.
               </motion.p>
            )}
         </motion.div>
      </div>
   );
}
