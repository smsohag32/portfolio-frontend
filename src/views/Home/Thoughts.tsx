import { blogsList } from "@/data/blogs";
import ThoughtCard from "./ThoughtCard";

const Thoughts = () => {
   return (
      <div className="main-container">
         <div className="mb-6 font-flecha flex items-end gap-4">
            <div className="">
               <h2 className="lg:text-[64px] text-[35px] lg:leading-[76.8px] leading-[50px] font-medium ">
                  Thoughts
               </h2>
            </div>
            <span className="pb-5">
               <svg
                  width="135"
                  height="2"
                  viewBox="0 0 135 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M0 1H135"
                     stroke="black"
                  />
               </svg>
            </span>
         </div>

         <div className="grid lg:grid-cols-1 mt-11 gap-[48px]">
            {blogsList?.map((thought, index) => (
               <ThoughtCard
                  thought={thought}
                  key={index}
               />
            ))}
         </div>
      </div>
   );
};

export default Thoughts;
