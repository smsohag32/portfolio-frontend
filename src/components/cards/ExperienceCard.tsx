"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Building2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Experience {
   id: number;
   title: string;
   company: string;
   duration: string;
   img: string | StaticImageData;
   description: string;
   skills: string[];
}

interface ExperienceCardProps {
   experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
   const isDarkMode = false;
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         whileHover={{ scale: 1.02 }}>
         <Card
            className={`overflow-hidden ${
               isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            } border-none border shadow-lg`}>
            <CardContent className="p-6">
               <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4">
                     <Image
                        src={experience.img}
                        alt={experience.company}
                        layout="fill"
                        objectFit="contain"
                        className={`rounded-full ${isDarkMode ? "filter invert" : ""}`}
                     />
                  </div>
                  <div>
                     <h3 className="text-xl font-semibold">{experience.title}</h3>
                     <div className="flex items-center text-sm opacity-70 mt-1">
                        <Building2 className="w-4 h-4 mr-1" />
                        <span>{experience.company}</span>
                     </div>
                  </div>
               </div>
               <div className="flex items-center text-sm mb-4">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span>{experience.duration}</span>
               </div>
               <p className="text-sm opacity-80 mb-4">{experience.description}</p>
               <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                     <Badge
                        key={index}
                        variant="outline"
                        className={isDarkMode ? "border-gray-600" : "border-gray-300"}>
                        {skill}
                     </Badge>
                  ))}
               </div>
            </CardContent>
         </Card>
      </motion.div>
   );
}
