"use client";

import { blogsList } from "@/data/blogs";
import ThoughtCard from "../Home/ThoughtCard";
import { motion } from "framer-motion";
import { Code, Pencil } from "lucide-react";

const Blogs = () => {
   return (
      <div>
         <section className="pt-20 pb-14 bg-gradient-to-b from-[#f7f7f7]">
            <div className="main-container">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12">
                  <div className="flex items-center space-x-4 mb-6">
                     <Code className="w-8 h-8 text-des" />
                     <Pencil className="w-8 h-8 text-des" />
                  </div>
                  <h1 className="text-4xl md:text-4xl font-medium text-des mb-4">
                     Frontend Insights
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-normal font-flecha text-gray-600 mb-6">
                     Thoughts on Web Application Development
                  </h2>
                  <div className="w-32 h-1 bg-des opacity-65 mb-8"></div>
                  <p className="text-lg text-gray-700 max-w-2xl">
                     Explore my latest musings on frontend technologies, best practices, and
                     innovative solutions. Join me in unraveling the complexities of modern web
                     development.
                  </p>
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
      </div>
   );
};

export default Blogs;
