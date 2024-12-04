"use client";
import { SquareArrowOutUpRight } from "lucide-react";

import React, { useState } from "react";

const ThoughtCard: React.FC<{ thought: { title: string; summary: string } }> = ({ thought }) => {
   const [isExpanded, setIsExpanded] = useState(false);

   const handleToggle = () => {
      setIsExpanded((prev) => !prev);
   };

   return (
      <div className="flex items-start  gap-6">
         <div className="w-full">
            <p className="text-[44px] font-[500] text-[#1D1D1D] font-flecha  line-clamp-1">
               {thought?.title}
            </p>
            <p
               className={`text-[20px] font-normal font-outfit text-[#545454] transition-max-height duration-500 overflow-hidden ${
                  isExpanded
                     ? "max-h-[500px] duration-500"
                     : "max-h-[180px] duration-500 line-clamp-6"
               }`}>
               {thought?.summary}
            </p>
            <div className="mt-6">
               <button
                  onClick={handleToggle}
                  type="button"
                  className="flex items-center text-sm text-[#ffffff] font-normal bg-[#2f2f2ff3] border border-[#000000] rounded-full px-5 py-[8px] gap-3">
                  {isExpanded ? "See Less" : "Read Details"}
                  <span className="bg-white text-[#2F2F2F] ps-2 py-2 pe-1.5 rounded-full">
                     <SquareArrowOutUpRight size={14} />
                  </span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default ThoughtCard;
