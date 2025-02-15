"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Building2, ChevronRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

interface Experience {
   id: number;
   title: string;
   company: string;
   duration: string;
   img: string | StaticImageData;
   description: string;
   skills: string[];
   current?: boolean;
}

interface ExperienceCardProps {
   experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="h-full"
         whileHover={{ scale: 1.02 }}>
         <Card className="overflow-hidden bg-white dark:bg-gray-800 border-primary/10 border shadow-sm transition-shadow duration-300">
            <CardContent className="p-6">
               <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4">
                     <Image
                        src={experience.img || "/placeholder.svg"}
                        alt={experience.company}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                     />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-primary dark:text-primary-foreground">
                        {experience.title}
                     </h3>
                     <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Building2 className="w-4 h-4 mr-1" />
                        <span>{experience.company}</span>
                     </div>
                  </div>
               </div>
               <div className="flex items-center text-sm mb-4 text-muted-foreground">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span>{experience.duration}</span>
                  {experience.current && (
                     <Badge
                        variant="secondary"
                        className="ml-2">
                        Current
                     </Badge>
                  )}
               </div>
               <p className="text-sm text-foreground mb-4">{experience.description}</p>
               <div className="flex flex-wrap gap-2 mb-4">
                  {experience.skills.map((skill, index) => (
                     <Badge
                        key={index}
                        variant="outline"
                        className="bg-primary/5 text-primary">
                        {skill}
                     </Badge>
                  ))}
               </div>
               <motion.div
                  className="flex items-center text-primary cursor-pointer"
                  whileHover={{ x: 5 }}>
                  <span className="text-sm font-medium mr-1">Learn more</span>
                  <ChevronRight className="w-4 h-4" />
               </motion.div>
            </CardContent>
         </Card>
      </motion.div>
   );
}
