"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Terminal, Laptop, Braces } from "lucide-react";
import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/cards/ExperienceCard";

export default function ExperienceSection() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   const codeIcons = [Code, Terminal, Laptop, Braces];

   return (
      <section
         ref={ref}
         className="pb-12">
         <div className="main-container relative">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="text-center mb-14 relative">
               <h2 className="text-[32px] lg:text-[52px] font-normal text-gray-800 dark:text-white">
                  &lt;Work_Experience /&gt;
               </h2>
               <p className="text-xl font-flecha text-des font-normal opacity-90 mt-2  dark:text-gray-300">
                  My professional journey in code
               </p>
               <div className="absolute  lg:top-10 left-0 w-full h-full flex justify-between items-center pointer-events-none">
                  {codeIcons.map((Icon, index) => (
                     <Icon
                        key={index}
                        className="text-gray-400 dark:text-gray-700 opacity-50"
                        size={24}
                     />
                  ))}
               </div>
            </motion.div>

            <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-8">
               {experiences.map((experience, index) => (
                  <motion.div
                     key={experience.id}
                     initial={{ opacity: 0, y: 50 }}
                     className="h-full"
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                     transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}>
                     <ExperienceCard experience={experience} />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
