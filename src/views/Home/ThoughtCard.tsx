"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Thought {
   title: string;
   summary: string;
   date: string;
   author: string;
   categories: string[];
   image: string;
   link: string;
}

interface ThoughtCardProps {
   thought: Thought;
   index: number;
}

const ThoughtCard: React.FC<ThoughtCardProps> = ({ thought, index }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         className="bg-gray-50 p-6 rounded-lg items-start h-full  transition-shadow duration-300">
         <div className="flex flex-col md:flex-row h-full gap-6">
            <div className="md:w-1/3 h-full">
               <Image
                  src={thought.image}
                  alt={thought.title}
                  width={280}
                  height={280}
                  className="w-full h-full object-cover rounded-md"
               />
            </div>
            <div className="md:w-2/3">
               <h3 className="text-[28px] font-normal text-title font-outfit mb-2">
                  {thought.title}
               </h3>
               <p className="text-sm text-gray-600 mb-4">
                  {thought.date} | {thought.author}
               </p>
               <motion.p
                  className={` text-des font-medium text-base mb-4`}
                  transition={{ duration: 0.3 }}>
                  {thought.summary}
               </motion.p>
               <div className="flex flex-wrap gap-2 pt-1 mb-4">
                  {thought.categories.map((category, idx) => (
                     <span
                        key={idx}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                        {category}
                     </span>
                  ))}
               </div>
               <div className="flex items-center gap-4">
                  <Button
                     asChild
                     variant="ghost"
                     className="text-title border border-slate-200 hover:bg-gray-200 transition-colors duration-300">
                     <a
                        href={thought.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        View Full Article
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                     </a>
                  </Button>
               </div>
            </div>
         </div>
      </motion.div>
   );
};

export default ThoughtCard;
