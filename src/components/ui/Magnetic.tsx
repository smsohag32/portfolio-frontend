"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticProps {
   children: React.ReactElement;
   strength?: number; // 0.1 to 0.5 (default: 0.3)
   className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({
   children,
   strength = 0.3,
   className = "",
}) => {
   const ref = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      const el = ref.current;
      if (!el) return;

      // Check for touch / fine pointer
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

      const handleMouseMove = (e: MouseEvent) => {
         const rect = el.getBoundingClientRect();
         const centerX = rect.left + rect.width / 2;
         const centerY = rect.top + rect.height / 2;

         const deltaX = (e.clientX - centerX) * strength;
         const deltaY = (e.clientY - centerY) * strength;

         xTo(deltaX);
         yTo(deltaY);
      };

      const handleMouseLeave = () => {
         xTo(0);
         yTo(0);
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
         el.removeEventListener("mousemove", handleMouseMove);
         el.removeEventListener("mouseleave", handleMouseLeave);
      };
   }, [strength]);

   return (
      <div
         ref={ref}
         className={`inline-block will-change-transform ${className}`}
         data-magnetic="true">
         {children}
      </div>
   );
};

export default Magnetic;
