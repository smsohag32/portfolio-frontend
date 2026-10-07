"use client";

import { motion } from "framer-motion";
import {
   ArrowUpRight,
   CalendarClock,
   Github,
   Linkedin,
   Mail,
   MapPin,
   Phone,
   Send,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { toast } from "sonner";
import { FormEvent, useState } from "react";

const contactMethods = [
   {
      icon: Mail,
      label: "Email",
      value: "sohagsheik32@gmail.com",
      href: "mailto:sohagsheik32@gmail.com",
   },
   {
      icon: Phone,
      label: "Phone",
      value: "+880 1540-042699",
      href: "tel:+8801540042699",
   },
   {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh · Remote friendly",
      href: undefined,
   },
];

const socialLinks = [
   { icon: Github, label: "GitHub", href: "https://github.com/smsohag32" },
   { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sohagsheik/" },
   { icon: Mail, label: "Email", href: "mailto:sohagsheik32@gmail.com" },
];

const CALENDLY_URL = "https://calendly.com/sohagsheik32/30min";

const inputClass =
   "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:focus:bg-slate-900";

interface ContactMeProps {
   /** Render the heading as the page h1 (Contact page) instead of h2 (Home section) */
   isPage?: boolean;
}

export default function ContactMe({ isPage = false }: ContactMeProps) {
   const [isSending, setIsSending] = useState(false);

   const handleMessage = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSending(true);
      const form = e.currentTarget;
      setTimeout(() => {
         setIsSending(false);
         form.reset();
         toast.success("Message sent successfully. I'll get back to you soon!");
      }, 600);
   };

   return (
      <section
         id="contact"
         className={`relative overflow-hidden bg-white dark:bg-slate-950 ${isPage ? "pb-24 pt-28" : "py-24"}`}>
         <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

         <div className="main-container relative">
            <SectionHeading
               as={isPage ? "h1" : "h2"}
               badge="Contact"
               icon={Mail}
               title="Let's Work"
               highlight="Together"
               description="Have a project in mind or an opportunity to discuss? Drop a message or book a quick call — I usually reply within 24 hours."
            />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
               {/* Info panel */}
               <motion.aside
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 text-white shadow-xl lg:col-span-2">
                  {/* Decorative glow + grid */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
                  <div
                     className="pointer-events-none absolute inset-0 opacity-[0.07]"
                     style={{
                        backgroundImage:
                           "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                     }}
                  />

                  <div className="relative flex h-full flex-col">
                     <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        <span className="relative flex h-2 w-2">
                           <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                           <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Available for new opportunities
                     </span>

                     <h3 className="mt-6 text-2xl font-bold tracking-tight">Contact Information</h3>
                     <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        Open to full-time roles, freelance projects, and technical collaborations.
                     </p>

                     <ul className="mt-8 space-y-4">
                        {contactMethods.map(({ icon: Icon, label, value, href }) => {
                           const content = (
                              <>
                                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-300 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                                    <Icon className="h-5 w-5" />
                                 </span>
                                 <span className="min-w-0">
                                    <span className="block text-xs uppercase tracking-wider text-slate-400">
                                       {label}
                                    </span>
                                    <span className="block truncate text-sm font-medium text-white">
                                       {value}
                                    </span>
                                 </span>
                              </>
                           );
                           return (
                              <li key={label}>
                                 {href ? (
                                    <a
                                       href={href}
                                       className="group flex items-center gap-4">
                                       {content}
                                    </a>
                                 ) : (
                                    <div className="group flex items-center gap-4">{content}</div>
                                 )}
                              </li>
                           );
                        })}
                     </ul>

                     <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10">
                        <span className="flex items-center gap-3">
                           <CalendarClock className="h-5 w-5 text-blue-300" />
                           <span>
                              <span className="block text-sm font-semibold">Book a 30-min call</span>
                              <span className="block text-xs text-slate-400">via Calendly</span>
                           </span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                     </a>

                     <div className="mt-auto flex items-center gap-3 pt-8">
                        {socialLinks.map(({ icon: Icon, label, href }) => (
                           <a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={label}
                              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-slate-900">
                              <Icon className="h-4 w-4" />
                           </a>
                        ))}
                     </div>
                  </div>
               </motion.aside>

               {/* Form */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:col-span-3">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                     Send a Message
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                     Tell me a little about your project, timeline, and goals.
                  </p>

                  <form
                     onSubmit={handleMessage}
                     className="mt-8 space-y-5">
                     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field
                           id="contact-name"
                           label="Full Name">
                           <input
                              id="contact-name"
                              name="name"
                              required
                              placeholder="John Doe"
                              className={inputClass}
                           />
                        </Field>
                        <Field
                           id="contact-email"
                           label="Email Address">
                           <input
                              id="contact-email"
                              name="email"
                              type="email"
                              required
                              placeholder="john@company.com"
                              className={inputClass}
                           />
                        </Field>
                     </div>
                     <Field
                        id="contact-subject"
                        label="Subject">
                        <input
                           id="contact-subject"
                           name="subject"
                           placeholder="Project inquiry, job opportunity…"
                           className={inputClass}
                        />
                     </Field>
                     <Field
                        id="contact-message"
                        label="Message">
                        <textarea
                           id="contact-message"
                           name="message"
                           required
                           rows={6}
                           placeholder="Hi Sohag, I'd like to talk about…"
                           className={`${inputClass} resize-none`}
                        />
                     </Field>

                     <div className="flex flex-col-reverse items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                           Your information is never shared with third parties.
                        </p>
                        <button
                           id="contact-submit"
                           type="submit"
                           disabled={isSending}
                           className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70">
                           {isSending ? "Sending…" : "Send Message"}
                           <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                     </div>
                  </form>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
   return (
      <div className="space-y-2">
         <label
            htmlFor={id}
            className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {label}
         </label>
         {children}
      </div>
   );
}
