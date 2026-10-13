"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const SmoothCursor: React.FC = () => {
   const cursorRef = useRef<HTMLDivElement | null>(null);
   const followerRef = useRef<HTMLDivElement | null>(null);
   const [isVisible, setIsVisible] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   useEffect(() => {
      // Check for fine pointer (mouse / trackpad)
      if (typeof window === "undefined") return;
      if (!window.matchMedia("(pointer: fine)").matches) return;

      const cursor = cursorRef.current;
      const follower = followerRef.current;
      if (!cursor || !follower) return;

      // QuickTo setters for 60fps performance
      const cursorX = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power2.out" });
      const cursorY = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power2.out" });
      const followerX = gsap.quickTo(follower, "x", { duration: 0.35, ease: "power3.out" });
      const followerY = gsap.quickTo(follower, "y", { duration: 0.35, ease: "power3.out" });

      const handleMouseMove = (e: MouseEvent) => {
         cursorX(e.clientX);
         cursorY(e.clientY);
         followerX(e.clientX);
         followerY(e.clientY);

         if (!isVisible) setIsVisible(true);
      };

      const handleMouseEnter = () => setIsVisible(true);
      const handleMouseLeave = () => setIsVisible(false);

      const handleMouseOver = (e: MouseEvent) => {
         const target = e.target as HTMLElement | null;
         if (!target) return;
         const isInteractive = target.closest("a, button, [data-magnetic], input, textarea, [role='button']");
         setIsHovered(!!isInteractive);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseLeave);
      document.body.addEventListener("mouseover", handleMouseOver, { passive: true });

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         document.body.removeEventListener("mouseenter", handleMouseEnter);
         document.body.removeEventListener("mouseleave", handleMouseLeave);
         document.body.removeEventListener("mouseover", handleMouseOver);
      };
   }, [isVisible]);

   return (
      <div
         className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
         }`}>
         {/* Inner Dot */}
         <div
            ref={cursorRef}
            className="fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 pointer-events-none"
         />

         {/* Outer Follower Halo */}
         <div
            ref={followerRef}
            className={`fixed top-0 left-0 -ml-5 -mt-5 h-10 w-10 rounded-full border pointer-events-none transition-transform duration-200 ${
               isHovered
                  ? "scale-150 border-blue-500 bg-blue-500/15 backdrop-blur-[1px] dark:border-blue-400 dark:bg-blue-400/20"
                  : "scale-100 border-slate-400/60 bg-transparent dark:border-slate-500/50"
            }`}
         />
      </div>
   );
};

export default SmoothCursor;
