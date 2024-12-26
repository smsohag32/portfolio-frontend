"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialLinks = [
   { icon: <Github className="w-5 h-5" />, href: "https://github.com/smsohag32", label: "GitHub" },
   {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/sohagsheik/",
      label: "LinkedIn",
   },
   {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/yourtwitterhandle",
      label: "Twitter",
   },
   { icon: <Mail className="w-5 h-5" />, href: "mailto:sohagsheik32@gmail.com", label: "Email" },
];

const Footer = () => {
   return (
      <footer className="bg-white border-t border-gray-200 py-8">
         <div className="main-container">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 flex flex-col items-center lg:items-start md:mb-0">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                     <Code className="mr-2" /> Mohammad Sohag Sheik
                  </h2>
                  <p className="mt-2 text-start lg:text-center text-gray-600">Frontend Engineer</p>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                     <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-600 hover:text-black transition-colors duration-300"
                        aria-label={link.label}>
                        {link.icon}
                     </motion.a>
                  ))}
               </motion.div>
            </div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="mt-8 border-t border-gray-200 pt-8  flex flex-col md:flex-row justify-between items-center">
               <p className="text-gray-600 text-center lg:text-start mb-4 md:mb-0">
                  © {new Date().getFullYear()} Mohammad Sohag Sheik.
                  <br className="lg:hidden" />
                  All rights reserved.
               </p>
               <div className="flex space-x-4">
                  <Button
                     variant="link"
                     asChild>
                     <Link
                        href="/privacy-policy"
                        className="text-gray-600 hover:text-black transition-colors duration-300">
                        Privacy Policy
                     </Link>
                  </Button>
                  <Button
                     variant="link"
                     asChild>
                     <Link
                        href="/terms-of-service"
                        className="text-gray-600 px-0 hover:text-black transition-colors duration-300">
                        Terms of Service
                     </Link>
                  </Button>
               </div>
            </motion.div>
         </div>
      </footer>
   );
};

export default Footer;
