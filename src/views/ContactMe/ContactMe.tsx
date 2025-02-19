"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send, Code, ExternalLink, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { FormEvent } from "react";

const contactLinks = [
   {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/smsohag32",
      badge: "Open Source",
   },
   {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sohagsheik/",
      badge: "Connect",
   },
   {
      icon: <Mail className="h-5 w-5" />,
      label: "sohagsheik32@gmail.com",
      href: "mailto:sohagsheik32@gmail.com",
      badge: "Email",
   },
   {
      icon: <Phone className="h-5 w-5" />,
      label: "+88015 40042699",
      href: "tel:+8801540042699",
      badge: "Call",
   },
];

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const itemVariants = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         type: "spring",
         stiffness: 100,
      },
   },
};

const codeVariants = {
   hidden: { opacity: 0, x: -20 },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 0.6,
      },
   },
};

export default function ContactMe() {
   const handleMessage = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      toast.success("Message sent successfully.");
   };
   return (
      <div className="min-h-screen pt-20 pb-10 bg-[#fafafa] dark:bg-gray-900">
         <div className="main-container">
            <motion.div
               initial="hidden"
               animate="visible"
               variants={containerVariants}
               className=" mx-auto space-y-8">
               <motion.div
                  variants={itemVariants}
                  className="text-center space-y-4">
                  <div className="flex justify-center mb-2">
                     <motion.div
                        animate={{
                           rotate: [0, 10, -10, 0],
                           transition: { duration: 0.5, repeat: Infinity, repeatDelay: 3 },
                        }}>
                        <Code className="h-12 w-12 text-title dark:text-white" />
                     </motion.div>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-title font-flecha dark:text-white sm:text-5xl">
                     {"<ContactMe />"}
                  </h1>
                  <motion.div
                     variants={codeVariants}
                     className="max-w-2xl mx-auto">
                     <div className="bg-gray-100 dark:bg-black/5 p-6  rounded-lg shadow-lg font-mono text-sm relative">
                        <div className="flex items-center mb-4">
                           <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <pre className="text-[11px] lg:text-sm font-mono">
                           <code>
                              <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                              <span className="text-blue-600 dark:text-blue-400">
                                 frontend_developer
                              </span>{" "}
                              = {"{"}
                              <br />
                              &nbsp;&nbsp;
                              <span className="text-green-600 dark:text-green-400">role:</span>{" "}
                              <span className="text-orange-600">&apos;Frontend Engineer&apos;</span>
                              ,<br />
                              &nbsp;&nbsp;
                              <span className="text-green-600 dark:text-green-400">skills:</span> [
                              <span className="text-orange-600">&apos;JavaScript&apos;</span>,{" "}
                              <span className="text-orange-600">&apos;React&apos;</span>,{" "}
                              <span className="text-orange-600">&apos;Next.js&apos;</span>],
                              <br />
                              &nbsp;&nbsp;
                              <span className="text-green-600 dark:text-green-400">
                                 status:
                              </span>{" "}
                              <span className="text-orange-600">
                                 &apos;Open to opportunities&apos;
                              </span>
                              ,<br />
                              &nbsp;&nbsp;
                              <span className="text-green-600 dark:text-green-400">
                                 location:
                              </span>{" "}
                              <span className="text-orange-600">&apos;Ready to connect&apos;</span>
                              <br />
                              {"};"}
                           </code>
                        </pre>
                     </div>
                  </motion.div>
               </motion.div>

               <div className="grid grid-cols-1 h-full lg:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                     <Card className="border-2 border-black/10 dark:border-white/10">
                        <CardContent className="p-6">
                           <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                              <Terminal className="h-5 w-5" />
                              <span>Initialize Connection</span>
                           </h2>
                           <form
                              onSubmit={handleMessage}
                              className="space-y-4">
                              <div className="space-y-2">
                                 <Input
                                    placeholder="Your Name"
                                    className="border-2 border-black/10 dark:border-white/10 focus:ring-2 focus:ring-black dark:focus:ring-white"
                                 />
                              </div>
                              <div className="space-y-2">
                                 <Input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border-2 border-black/10 dark:border-white/10 focus:ring-2 focus:ring-black dark:focus:ring-white"
                                 />
                              </div>
                              <div className="space-y-2">
                                 <Textarea
                                    placeholder="Your Message"
                                    className="min-h-[150px] border-2 border-black/10 dark:border-white/10 focus:ring-2 focus:ring-black dark:focus:ring-white"
                                 />
                              </div>
                              <motion.div
                                 className="flex justify-end"
                                 whileHover={{ scale: 1.02 }}
                                 whileTap={{ scale: 0.98 }}>
                                 <Button className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white">
                                    Send Message
                                    <Send className="ml-2 h-4 w-4" />
                                 </Button>
                              </motion.div>
                           </form>
                        </CardContent>
                     </Card>
                  </motion.div>

                  <motion.div
                     variants={itemVariants}
                     className="space-y-9 h-full">
                     <Card className="border-2 border-black/10 dark:border-white/10">
                        <CardContent className="p-6">
                           <h2 className="text-xl font-semibold mb-6">Connect via API Endpoints</h2>
                           <div className="space-y-4">
                              {contactLinks.map((link) => (
                                 <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}>
                                    <div className="flex items-center gap-3">
                                       {link.icon}
                                       <span className="text-gray-700 dark:text-gray-300">
                                          {link.label}
                                       </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                       <Badge
                                          variant="outline"
                                          className="group-hover:border-black dark:group-hover:border-white">
                                          {link.badge}
                                       </Badge>
                                       <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                 </motion.a>
                              ))}
                           </div>
                        </CardContent>
                     </Card>

                     <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}>
                        <Button
                           onClick={() =>
                              window.open("https://calendly.com/sohagsheik32/30min", "_blank")
                           }
                           variant="outline"
                           className="w-full border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                           Schedule a Technical Discussion
                           <Terminal className="ml-2 h-4 w-4" />
                        </Button>
                     </motion.div>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </div>
   );
}
