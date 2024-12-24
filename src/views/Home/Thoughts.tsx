"use client";

import { motion } from "framer-motion";
import { blogsList } from "@/data/blogs";
import ThoughtCard from "./ThoughtCard";

const Thoughts = () => {
   return (
      <section className="py-16 bg-white">
         <div className="main-container">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="mb-12">
               <h2 className="text-4xl md:text-6xl font-normal font-flecha text-title mb-4">
                  Thoughts
               </h2>
               <div className="w-24 h-1 bg-black"></div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="space-y-12">
               {blogsList?.map((thought, index) => (
                  <ThoughtCard
                     key={index}
                     thought={thought}
                     index={index}
                  />
               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default Thoughts;
