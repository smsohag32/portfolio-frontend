/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
   ArrowLeft,
   ArrowUpRight,
   CheckCircle2,
   Code2,
   ExternalLink,
   Github,
   Globe,
   ImageOff,
   Layers,
   Server,
   Sparkles,
   Tag,
} from "lucide-react";
import { useGetProjectByIdQuery } from "@/redux-store/features/project-api";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetails() {
   const { id } = useParams();
   const router = useRouter();
   const { data: projectRes, isLoading, isError } = useGetProjectByIdQuery(id);
   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

   if (isLoading) {
      return <ProjectDetailsSkeleton />;
   }

   const project = projectRes?.project;

   if (isError || !project) {
      return (
         <div className="main-container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-500/10">
               <ImageOff className="h-8 w-8" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
               Project Not Found
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
               The project you are looking for does not exist or has been removed.
            </p>
            <button
               onClick={() => router.push("/portfolio")}
               className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-400">
               <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </button>
         </div>
      );
   }

   const images: string[] = Array.isArray(project.image)
      ? project.image.filter(Boolean)
      : project.image
      ? [project.image]
      : [];

   const activeImage = images[selectedImageIndex] || images[0];

   return (
      <section className="relative overflow-hidden bg-slate-50/50 pb-24 pt-28 dark:bg-slate-950/50">
         {/* Background ambient lighting */}
         <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

         <div className="main-container relative">
            {/* Back Breadcrumb */}
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.4 }}>
               <button
                  onClick={() => router.push("/portfolio")}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Portfolio
               </button>
            </motion.div>

            {/* Header Banner */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="mt-6 border-b border-slate-200/80 pb-8 dark:border-slate-800">
               <div className="flex flex-wrap items-center gap-2">
                  {project.category && (
                     <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold capitalize text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
                        <Tag className="h-3 w-3" />
                        {project.category}
                     </span>
                  )}
                  {project.type && (
                     <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                        {project.type}
                     </span>
                  )}
               </div>

               <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                  {project.name}
               </h1>

               <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                  {project.description}
               </p>

               {/* Quick Action Links Bar */}
               <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                  {project.link?.live && (
                     <a
                        href={project.link.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35">
                        <Globe className="h-4 w-4" />
                        Live Preview
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                     </a>
                  )}
                  {project.link?.client && (
                     <a
                        href={project.link.client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900">
                        <Github className="h-4 w-4" />
                        Frontend Source
                     </a>
                  )}
                  {project.link?.server && (
                     <a
                        href={project.link.server}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900">
                        <Server className="h-4 w-4" />
                        Backend Source
                     </a>
                  )}
               </div>
            </motion.div>

            {/* Media Gallery & Meta Details Grid */}
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
               {/* Left Column: Media Preview */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4 lg:col-span-8">
                  {/* Main Display Image */}
                  <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
                     {activeImage ? (
                        <AnimatePresence mode="wait">
                           <motion.div
                              key={activeImage}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="relative h-full w-full">
                              <Image
                                 src={activeImage}
                                 alt={project.name}
                                 fill
                                 priority
                                 sizes="(min-width: 1024px) 66vw, 100vw"
                                 className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                              />
                           </motion.div>
                        </AnimatePresence>
                     ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-400">
                           <ImageOff className="h-12 w-12" />
                        </div>
                     )}
                  </div>

                  {/* Image Thumbnail Selector (If Multiple Images) */}
                  {images.length > 1 && (
                     <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        {images.map((imgUrl, idx) => (
                           <button
                              key={idx}
                              onClick={() => setSelectedImageIndex(idx)}
                              className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-2xl border-2 transition-all ${
                                 selectedImageIndex === idx
                                    ? "border-blue-600 ring-4 ring-blue-500/20"
                                    : "border-slate-200 opacity-60 hover:opacity-100 dark:border-slate-800"
                              }`}>
                              <Image
                                 src={imgUrl}
                                 alt={`${project.name} preview ${idx + 1}`}
                                 fill
                                 className="object-cover object-top"
                              />
                           </button>
                        ))}
                     </div>
                  )}

                  {/* Features List */}
                  {project.features && project.features.length > 0 && (
                     <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
                           <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                           Key Features & Capabilities
                        </h2>
                        <ul className="mt-6 space-y-4">
                           {project.features.map((feature: any, idx: number) => (
                              <li
                                 key={idx}
                                 className="flex items-start gap-3.5 text-slate-700 dark:text-slate-300">
                                 <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                                 <div className="text-sm leading-relaxed sm:text-base">
                                    <strong className="font-semibold text-slate-900 dark:text-white">
                                       {feature.title}:
                                    </strong>{" "}
                                    {feature.details}
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}
               </motion.div>

               {/* Right Column: Metadata & Tech Stack */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-6 lg:col-span-4">
                  {/* Tech Stack Card */}
                  <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                     <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Technologies Used
                     </h3>
                     <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies?.map((tech: string, idx: number) => (
                           <span
                              key={idx}
                              className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-300">
                              {tech}
                           </span>
                        ))}
                     </div>
                  </div>

                  {/* Project Specs Card */}
                  <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                     <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Project Specifications
                     </h3>

                     <dl className="mt-4 divide-y divide-slate-100 text-sm dark:divide-slate-800">
                        <div className="flex items-center justify-between py-3">
                           <dt className="text-slate-500 dark:text-slate-400">Category</dt>
                           <dd className="font-semibold capitalize text-slate-900 dark:text-white">
                              {project.category || "Web App"}
                           </dd>
                        </div>
                        <div className="flex items-center justify-between py-3">
                           <dt className="text-slate-500 dark:text-slate-400">Type</dt>
                           <dd className="font-semibold text-slate-900 dark:text-white">
                              {project.type || "Full Stack"}
                           </dd>
                        </div>
                        <div className="flex items-center justify-between py-3">
                           <dt className="text-slate-500 dark:text-slate-400">Status</dt>
                           <dd className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                              Completed
                           </dd>
                        </div>
                     </dl>
                  </div>

                  {/* Live Call to Action Card */}
                  {project.link?.live && (
                     <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-7 text-white shadow-xl">
                        <h3 className="text-lg font-bold">Experience Live App</h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-300">
                           Test out the live deployment and see all interactive features in action.
                        </p>
                        <a
                           href={project.link.live}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500">
                           Launch Application <ExternalLink className="h-4 w-4" />
                        </a>
                     </div>
                  )}
               </motion.div>
            </div>
         </div>
      </section>
   );
}

function ProjectDetailsSkeleton() {
   return (
      <div className="main-container py-28">
         <Skeleton className="mb-6 h-4 w-32 rounded-full" />
         <Skeleton className="mb-4 h-12 w-2/3 rounded-2xl" />
         <Skeleton className="mb-8 h-6 w-1/2 rounded-lg" />
         <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
               <Skeleton className="aspect-[16/10] w-full rounded-3xl" />
               <Skeleton className="h-48 w-full rounded-3xl" />
            </div>
            <div className="space-y-6 lg:col-span-4">
               <Skeleton className="h-44 w-full rounded-3xl" />
               <Skeleton className="h-44 w-full rounded-3xl" />
            </div>
         </div>
      </div>
   );
}
