"use client";
import Image from "next/image";
import React from "react";
import profile from "@/assets/photo/sohag3.jpg";
import line from "@/assets/bg/line.svg";
import { motion } from "framer-motion";
import {
   Terminal,
   ChevronRight,
   Github,
   Linkedin,
   Mail,
   Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { contactsData } from "@/data/contacts";
import { useRouter } from "next/navigation";

const stats = [
   { id: 1, label: "Projects", value: 30, suffix: "+" },
   { id: 2, label: "Years of Experience", value: 3, decimals: 0, suffix: "+" },
];

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
   return (
      <motion.a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}>
         {icon}
      </motion.a>
   );
}

const Hero = () => {
   const [mounted, setMounted] = useState(false);
   const router = useRouter();

   useEffect(() => {
      setMounted(true);
   }, []);

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: { staggerChildren: 0.15, delayChildren: 0.2 },
      },
   };

   const itemVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
      },
   };

   if (!mounted) return null;

   return (
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden lg:bg-gradient-to-b lg:from-slate-50 lg:to-white">
         {/* Background Elements */}
         <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
         </div>

         <div className="main-container relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-24">
            {/* Left Content */}
            <motion.div
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               className="w-full lg:w-3/5 space-y-8"
            >
               <motion.div variants={itemVariants} className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium text-sm border border-blue-100 uppercase tracking-wider">
                     Available for work
                  </span>
                  <p className="font-outfit text-slate-500 font-medium tracking-tight">
                     Hey, I am
                  </p>
                  <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                     Sohag Sheik
                  </h1>
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-slate-900 rounded-lg">
                        <Terminal className="w-6 h-6 text-white" />
                     </div>
                     <h2 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-500">
                        Full Stack Engineer
                     </h2>
                  </div>
               </motion.div>

               <motion.p
                  variants={itemVariants}
                  className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl font-outfit"
               >
                  I build high-performance, accessible, and beautiful web experiences.
                  Specializing in React, Next.js, and modern web ecosystems to turn
                  ambitious designs into reality.
               </motion.p>

               <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 pt-4">
                  {stats.map((stat) => (
                     <div key={stat.id} className="space-y-1">
                        <div className="text-3xl font-bold text-slate-900">
                           <CountUp
                              end={stat.value}
                              duration={2.5}
                              decimals={stat.decimals || 0}
                              suffix={stat.suffix}
                           />
                        </div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                           {stat.label}
                        </p>
                     </div>
                  ))}
               </motion.div>

               <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
                  <Button
                     onClick={() => router.push("/portfolio")}
                     className="h-12 px-8 bg-slate-900 text-white hover:bg-slate-800 rounded-full transition-all flex items-center gap-2 group shadow-lg shadow-slate-200"
                  >
                     View Projects
                     <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                     variant="outline"
                     onClick={() => window.open(contactsData?.linkedin, "_blank")}
                     className="h-12 px-8 rounded-full border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
                  >
                     Get in touch
                  </Button>
               </motion.div>
            </motion.div>

            {/* Right Content - Visuals */}
            <motion.div
               variants={itemVariants}
               initial="hidden"
               animate="visible"
               className="w-full lg:w-2/5 relative flex justify-center mt-12 lg:mt-0"
            >
               <div className="relative z-20 w-full max-w-[340px] lg:max-w-sm">
                  {/* Main Profile Card */}
                  <motion.div
                     whileHover={{ y: -8 }}
                     className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/60 dark:border-slate-800 p-3 rounded-[2.5rem] shadow-2xl overflow-hidden group"
                  >
                     <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800/50">
                        <Image
                           src={profile}
                           alt="Sohag"
                           className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                           priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                        
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                           <div className="flex gap-4">
                              <SocialLink href={contactsData?.github} icon={<Github size={20} />} />
                              <SocialLink href={contactsData?.linkedin} icon={<Linkedin size={20} />} />
                              <SocialLink href="mailto:sohagsheik32@gmail.com" icon={<Mail size={20} />} />
                           </div>
                        </div>
                     </div>
                  </motion.div>

                  {/* Floating Badges */}
                  <motion.div 
                     animate={{ y: [0, -12, 0] }}
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                     className="absolute -left-8 lg:-left-16 top-1/4 bg-white/90 dark:bg-slate-800/90 p-3.5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex items-center gap-3 backdrop-blur-md"
                  >
                     <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
                        <Code size={20} />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Full Stack</p>
                        <p className="text-xs font-medium text-slate-500">Developer</p>
                     </div>
                  </motion.div>

                  <motion.div 
                     animate={{ y: [0, 12, 0] }}
                     transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                     className="absolute -right-6 lg:-right-12 bottom-1/4 bg-white/90 dark:bg-slate-800/90 p-3.5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex items-center gap-3 backdrop-blur-md"
                  >
                     <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                        <Terminal size={20} />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">3+ Years</p>
                        <p className="text-xs font-medium text-slate-500">Experience</p>
                     </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-400/20 blur-[60px] rounded-full -z-10 pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-400/20 blur-[60px] rounded-full -z-10 pointer-events-none" />
               </div>
            </motion.div>
         </div>

         {/* Bottom Line Pattern */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none opacity-40">
            <Image src={line} alt="" className="w-full h-auto" />
         </div>
      </div>
   );
};

export default Hero;
