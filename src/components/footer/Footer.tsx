"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/header/Logo";
import { navItems } from "@/components/header/Header";

const socialLinks = [
   { icon: Github, href: "https://github.com/smsohag32", label: "GitHub" },
   { icon: Linkedin, href: "https://www.linkedin.com/in/sohagsheik/", label: "LinkedIn" },
   { icon: Mail, href: "mailto:sohagsheik32@gmail.com", label: "Email" },
];

const expertise = [
   "Full Stack Web Apps",
   "Enterprise Dashboards",
   "E-commerce Solutions",
   "REST & GraphQL APIs",
   "Real-time Systems",
];

const Footer = () => {
   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

   return (
      <footer className="relative overflow-hidden bg-slate-950 text-slate-400">
         {/* Top gradient line + glow */}
         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
         <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

         <div className="main-container relative pb-8 pt-16">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
               {/* Brand */}
               <div className="lg:col-span-4">
                  <Logo textClassName="text-white" />
                  <p className="mt-5 max-w-xs text-sm leading-relaxed">
                     Full Stack Engineer crafting scalable, high-performance web applications with
                     React, Next.js, Node.js, and modern cloud tooling.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                     {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                           key={label}
                           href={href}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={label}
                           className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-600 hover:text-white">
                           <Icon className="h-4 w-4" />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Navigation */}
               <FooterColumn
                  title="Navigation"
                  className="lg:col-span-2">
                  {navItems.map((item) => (
                     <li key={item.path}>
                        <Link
                           href={item.path}
                           className="text-sm transition-colors duration-200 hover:text-white">
                           {item.label}
                        </Link>
                     </li>
                  ))}
               </FooterColumn>

               {/* Expertise */}
               <FooterColumn
                  title="Expertise"
                  className="lg:col-span-3">
                  {expertise.map((item) => (
                     <li
                        key={item}
                        className="text-sm">
                        {item}
                     </li>
                  ))}
               </FooterColumn>

               {/* Contact */}
               <FooterColumn
                  title="Get in Touch"
                  className="lg:col-span-3">
                  <li>
                     <a
                        href="mailto:sohagsheik32@gmail.com"
                        className="flex items-center gap-2.5 text-sm transition-colors hover:text-white">
                        <Mail className="h-4 w-4 text-blue-400" />
                        sohagsheik32@gmail.com
                     </a>
                  </li>
                  <li>
                     <a
                        href="tel:+8801540042699"
                        className="flex items-center gap-2.5 text-sm transition-colors hover:text-white">
                        <Phone className="h-4 w-4 text-blue-400" />
                        +880 1540-042699
                     </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm">
                     <MapPin className="h-4 w-4 text-blue-400" />
                     Dhaka, Bangladesh
                  </li>
                  <li className="pt-2">
                     <Link
                        href="/contact-me"
                        className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-blue-500 hover:text-white">
                        Start a Project
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                     </Link>
                  </li>
               </FooterColumn>
            </div>

            {/* Bottom bar */}
            <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 sm:flex-row">
               <p className="text-center text-sm sm:text-left">
                  © {new Date().getFullYear()} Mohammad Sohag Sheik. All rights reserved.
               </p>
               <button
                  type="button"
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white">
                  Back to top
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
                     <ArrowUp className="h-4 w-4" />
                  </span>
               </button>
            </div>
         </div>
      </footer>
   );
};

function FooterColumn({
   title,
   className,
   children,
}: {
   title: string;
   className?: string;
   children: React.ReactNode;
}) {
   return (
      <div className={className}>
         <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{title}</h3>
         <ul className="mt-5 space-y-3">{children}</ul>
      </div>
   );
}

export default Footer;
