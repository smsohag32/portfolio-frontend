import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/assets/logo3.png";
import Link from "next/link";
export default function AnimatedLogo() {
   return (
      <Link href={"/"}>
         <motion.div
            className="relative cursor-pointer overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <Image
               src={logo}
               alt="Developer Logo"
               width={95}
               height={10}
               className="transition-transform duration-300 group-hover:scale-105"
            />
         </motion.div>
      </Link>
   );
}
