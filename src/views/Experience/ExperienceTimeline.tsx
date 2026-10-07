"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, Building2, Sparkles } from "lucide-react";
import { experiences, type ExperienceItem } from "@/data/experience";

export default function ExperienceTimeline() {
   return (
      <div className="relative mx-auto max-w-4xl py-6">
         {/* Vertical Timeline Central/Left Line */}
         <div className="absolute bottom-0 left-6 top-8 hidden w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-slate-200 dark:to-slate-800 md:block md:left-8" />

         <div className="space-y-12">
            {experiences.map((item, index) => (
               <ExperienceCard
                  key={item.id}
                  item={item}
                  index={index}
               />
            ))}
         </div>
      </div>
   );
}

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-60px" }}
         transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
         className="relative flex flex-col gap-6 md:flex-row md:gap-10">
         {/* Timeline Dot Node */}
         <div className="hidden shrink-0 items-start pt-1 md:flex">
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-slate-900 text-white shadow-xl shadow-blue-500/10 dark:border-slate-950 dark:bg-blue-600">
               <Building2 className="h-7 w-7 text-white" />
               {item.current && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4">
                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                     <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-950" />
                  </span>
               )}
            </div>
         </div>

         {/* Card Container */}
         <div className="group relative flex-1 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-blue-500/30 md:p-8">
            {/* Soft Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            {/* Header / Meta */}
            <div className="relative flex flex-col gap-4 border-b border-slate-100 pb-6 dark:border-slate-800/80 sm:flex-row sm:items-center sm:justify-between">
               <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-sm transition-transform duration-500 group-hover:scale-105 dark:border-slate-800 dark:bg-slate-800">
                     <Image
                        src={item.img}
                        alt={item.company}
                        fill
                        className="object-contain p-1"
                     />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 md:text-2xl">
                        {item.title}
                     </h3>
                     <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <span>{item.company}</span>
                        {item.location && (
                           <span className="inline-flex items-center gap-1 font-normal text-slate-500 dark:text-slate-400">
                              <MapPin className="h-3.5 w-3.5 text-blue-500" />
                              {item.location}
                           </span>
                        )}
                     </div>
                  </div>
               </div>

               <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-300">
                     <Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                     {item.duration}
                  </span>
                  {item.current && (
                     <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Current Role
                     </span>
                  )}
               </div>
            </div>

            {/* Bullet Highlights */}
            <div className="relative py-6">
               <h4 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                  <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                  Key Impact & Accomplishments
               </h4>
               <ul className="space-y-3">
                  {item.highlights.map((highlight, hIdx) => (
                     <li
                        key={hIdx}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                        <span>{highlight}</span>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Skills & Tech Badge Stack */}
            <div className="relative border-t border-slate-100 pt-5 dark:border-slate-800/80">
               <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                     <span
                        key={skill}
                        className="rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-300">
                        {skill}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </motion.div>
   );
}
