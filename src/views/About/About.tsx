"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
   Briefcase,
   Code2,
   Download,
   ExternalLink,
   GraduationCap,
   Sparkles,
   User,
   Award,
   Terminal,
} from "lucide-react";
import myPhoto from "@/assets/photo/sohag2.jpg";
import SectionHeading from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";

export default function AboutPage() {
   return (
      <section className="relative overflow-hidden bg-slate-50/50 pb-24 pt-28 dark:bg-slate-950/50">
         {/* Glow Background */}
         <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

         <div className="main-container relative">
            <SectionHeading
               as="h1"
               badge="About Me"
               icon={User}
               title="Crafting Digital"
               highlight="Solutions"
               description="Full Stack Engineer with 3+ years of experience architecting end-to-end web applications with modern frontend and robust backend systems."
            />

            {/* Profile Overview Grid */}
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
               {/* Left Profile Card */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-between rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-4">
                  <div className="flex flex-col items-center">
                     <div className="relative h-40 w-40 overflow-hidden rounded-3xl border-4 border-white shadow-xl dark:border-slate-800">
                        <Image
                           src={myPhoto}
                           alt="Mohammad Sohag Sheik"
                           fill
                           priority
                           className="object-cover"
                        />
                     </div>
                     <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                        Mohammad Sohag Sheik
                     </h2>
                     <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        Full Stack Engineer
                     </p>
                     <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                        Dhaka, Bangladesh · Remote Friendly
                     </p>
                  </div>

                  {/* Core skills badges */}
                  <div className="my-6 flex flex-wrap justify-center gap-2">
                     {[
                        "React.js",
                        "Next.js",
                        "TypeScript",
                        "Node.js",
                        "Express.js",
                        "PostgreSQL",
                        "MongoDB",
                     ].map((skill) => (
                        <span
                           key={skill}
                           className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300">
                           {skill}
                        </span>
                     ))}
                  </div>

                  <a
                     href="https://drive.google.com/file/d/1Xl200kL9k4eI0Jm9p3e7w0x4k7_Z_X9y/view?usp=sharing"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-400">
                     <Download className="h-4 w-4" /> Download Resume
                  </a>
               </motion.div>

               {/* Right Bio Card */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-8">
                  <div>
                     <div className="flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                           <Code2 className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                           Biography & Background
                        </h3>
                     </div>

                     <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                        <p>
                           I am a Full Stack Engineer with 3+ years of professional experience
                           building enterprise dashboards, paperless meeting systems, real-time fraud
                           detection platforms, and modern e-commerce web applications.
                        </p>
                        <p>
                           My technical expertise spans frontend frameworks like React.js and Next.js
                           (App Router), TypeScript, Tailwind CSS, Zustand, and TanStack Query alongside
                           robust backend tooling including Node.js, Express.js, NestJS, and RESTful /
                           GraphQL APIs with PostgreSQL and MongoDB.
                        </p>
                        <p>
                           I take pride in bridging the gap between sleek, user-centric visual design and
                           resilient server-side architecture to deliver products that perform reliably
                           at scale.
                        </p>
                     </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                     <StatBox
                        icon={Award}
                        value="3+ Years"
                        label="Industry Experience"
                     />
                     <StatBox
                        icon={Sparkles}
                        value="30+ Projects"
                        label="Delivered Successfully"
                     />
                     <StatBox
                        icon={Terminal}
                        value="100% Code"
                        label="Clean & Maintainable"
                     />
                  </div>
               </motion.div>
            </div>

            {/* Experience & Education Section */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
               {/* Experience Card */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                        <Briefcase className="h-5 w-5" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Work Experience
                     </h3>
                  </div>

                  <div className="mt-6 space-y-6">
                     {experiences.map((exp) => (
                        <div
                           key={exp.id}
                           className="relative border-l-2 border-slate-200 pl-4 dark:border-slate-800">
                           <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-blue-600 dark:border-slate-900" />
                           <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                              {exp.title}
                           </h4>
                           <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                              {exp.company} · <span className="text-slate-500 font-normal">{exp.duration}</span>
                           </p>
                           <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                              {exp.highlights[0]}
                           </p>
                        </div>
                     ))}
                  </div>
               </motion.div>

               {/* Education & Achievements Card */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div>
                     <div className="flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                           <GraduationCap className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                           Education & Training
                        </h3>
                     </div>

                     <div className="mt-6 space-y-6">
                        <div className="relative border-l-2 border-slate-200 pl-4 dark:border-slate-800">
                           <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-violet-600 dark:border-slate-900" />
                           <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                              Bachelor of Science in Computer Science & Engineering
                           </h4>
                           <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                              Daffodil International University
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                     <Link
                        href="/portfolio"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:bg-slate-800 dark:text-white dark:hover:bg-white dark:hover:text-slate-900">
                        Explore My Portfolio <ExternalLink className="h-4 w-4" />
                     </Link>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

function StatBox({
   icon: Icon,
   value,
   label,
}: {
   icon: React.ElementType;
   value: string;
   label: string;
}) {
   return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-center dark:border-slate-800/80 dark:bg-slate-800/50">
         <Icon className="mb-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
         <span className="text-xl font-extrabold text-slate-900 dark:text-white">{value}</span>
         <span className="text-xs text-slate-500 dark:text-slate-400">{label}</span>
      </div>
   );
}
