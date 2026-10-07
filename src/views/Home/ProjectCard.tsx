/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Github, ImageOff } from "lucide-react";

interface Feature {
   title: string;
   details: string;
}

interface LinkType {
   server: string;
   client: string;
   live: string;
}

interface Project {
   _id: any;
   id: number;
   name: string;
   image: (string | StaticImageData)[];

   category: string;
   type: string;
   description: string;
   features: Feature[];
   link: LinkType;
   technologies: string[];
}

const MAX_TECH = 4;

const ProjectCard = ({ project }: { project: Project }) => {
   const technologies = project?.technologies ?? [];
   const visibleTech = technologies.slice(0, MAX_TECH);
   const extraTech = technologies.length - visibleTech.length;
   const detailsHref = `/portfolio/${project?._id}`;

   return (
      <motion.article
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-60px" }}
         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
         className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/30">
         {/* Media */}
         <Link
            href={detailsHref}
            aria-label={`View details of ${project?.name}`}
            className="relative block aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
            {project?.image?.[0] ? (
               <Image
                  src={project.image[0]}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
               />
            ) : (
               <div className="flex h-full w-full items-center justify-center text-slate-400">
                  <ImageOff className="h-10 w-10" />
               </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

            {/* Category pill */}
            {project?.category && (
               <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/85 px-3 py-1 text-xs font-semibold capitalize text-slate-800 shadow-sm backdrop-blur-md">
                  {project.category}
               </span>
            )}

            {/* Hover CTA */}
            <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
               <ArrowUpRight className="h-5 w-5" />
            </span>
         </Link>

         {/* Body */}
         <div className="flex flex-1 flex-col p-6">
            {project?.type && (
               <span className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                  {project.type}
               </span>
            )}

            <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
               <Link href={detailsHref}>{project?.name}</Link>
            </h3>

            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
               {project?.description}
            </p>

            {visibleTech.length > 0 && (
               <ul className="mt-5 flex flex-wrap gap-2">
                  {visibleTech.map((tech) => (
                     <li
                        key={tech}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {tech}
                     </li>
                  ))}
                  {extraTech > 0 && (
                     <li className="rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                        +{extraTech}
                     </li>
                  )}
               </ul>
            )}

            {/* Footer actions */}
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
               <div className="flex items-center gap-2">
                  {project?.link?.live && (
                     <IconLink
                        href={project.link.live}
                        label="Live preview">
                        <Globe className="h-4 w-4" />
                        <span>Live</span>
                     </IconLink>
                  )}
                  {project?.link?.client && (
                     <IconLink
                        href={project.link.client}
                        label="Source code">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                     </IconLink>
                  )}
               </div>

               <Link
                  href={detailsHref}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-2.5 hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-400">
                  Case Study
                  <ArrowUpRight className="h-4 w-4" />
               </Link>
            </div>
         </div>
      </motion.article>
   );
};

function IconLink({
   href,
   label,
   children,
}: {
   href: string;
   label: string;
   children: React.ReactNode;
}) {
   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         aria-label={label}
         className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900">
         {children}
      </a>
   );
}

export default ProjectCard;
