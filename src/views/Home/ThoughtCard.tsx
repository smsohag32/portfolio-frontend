import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";

const ThoughtCard = () => {
   return (
      <div>
         <p className="text-[48px] font-[500] text-[#1D1D1D] max-w-3xl line-clamp-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi id
         </p>
         <p className="text-[20px] font-normal text-[#545454]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, hic! Amet alias est
            voluptates modi molestias quibusdam tempora, sint unde totam quisquam? Autem asperiores,
            dignissimos doloremque quo unde fugit sit.
         </p>
         <div className="mt-6">
            <button
               type="button"
               className="flex items-center text-sm text-[#ffffff] font-normal bg-[#2F2F2F] border border-[#000000] rounded-full px-5 py-[8px]  gap-3">
               Read Details
               <span className="bg-white text-[#2F2F2F] ps-2 py-2 pe-1.5 rounded-full ">
                  {" "}
                  <SquareArrowOutUpRight size={14} />
               </span>
            </button>
         </div>
      </div>
   );
};

export default ThoughtCard;
