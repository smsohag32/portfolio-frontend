"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
   ArrowUpRight,
   Award,
   Briefcase,
   Code2,
   Download,
   ExternalLink,
   Ribbon,
   Sparkles,
   Terminal,
   User,
} from "lucide-react";
import myPhoto from "@/assets/photo/sohag3.jpg";
import SectionHeading from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";
import { certifications } from "@/data/certifications";

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

            {/* Work Experience Section */}
            <div className="mb-12">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                     <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                           <Briefcase className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                           Work Experience
                        </h3>
                     </div>
                     <Link
                        href="/experience"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400">
                        View Full Timeline <ArrowUpRight className="h-3.5 w-3.5" />
                     </Link>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                     {experiences.map((exp) => (
                        <div
                           key={exp.id}
                           className="relative rounded-2xl border border-slate-100 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-800/40">
                           <div className="flex items-center justify-between">
                              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                                 {exp.duration}
                              </span>
                              {exp.current && (
                                 <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                    Active Role
                                 </span>
                              )}
                           </div>
                           <h4 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                              {exp.title}
                           </h4>
                           <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                              {exp.company} {exp.location ? `· ${exp.location}` : ""}
                           </p>
                           <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                              {exp.highlights[0]}
                           </p>
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>

            {/* Education & Certifications Section */}
            <div className="space-y-8">
               {/* Header for Education & Certifications */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">


                  {/* Certifications & Professional Training */}
                  <div>
                     <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                              <Ribbon className="h-5 w-5" />
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                 Courses & Professional Certifications
                              </h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                 Verified credentials from Udemy and freeCodeCamp
                              </p>
                           </div>
                        </div>
                        <span className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300 sm:inline-block">
                           4 Verified Licenses
                        </span>
                     </div>

                     {/* Certification Cards Grid */}
                     <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {certifications.map((cert) => (
                           <div
                              key={cert.id}
                              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/50">
                              <div>
                                 <div className="flex items-center justify-between gap-2">
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-200">
                                       {cert.issuer}
                                    </span>
                                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                       Issued {cert.issueDate}
                                    </span>
                                 </div>

                                 <h4 className="mt-3 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                                    {cert.title}
                                 </h4>

                                 <p className="mt-2 font-mono text-[11px] text-slate-400 dark:text-slate-500">
                                    ID: {cert.credentialId}
                                 </p>

                                 <div className="mt-4 flex flex-wrap gap-1.5">
                                    {cert.skills.map((skill) => (
                                       <span
                                          key={skill}
                                          className="rounded-lg bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-700/60 dark:text-slate-300">
                                          {skill}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                                 <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-50/60 px-4 py-2.5 text-xs font-semibold text-emerald-700 transition-all hover:bg-emerald-600 hover:text-white dark:bg-emerald-500/10 dark:text-emerald-300 dark:hover:bg-emerald-500 dark:hover:text-white">
                                    Show Credential <ExternalLink className="h-3.5 w-3.5" />
                                 </a>
                              </div>
                           </div>
                        ))}
                     </div>
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
