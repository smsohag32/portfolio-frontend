"use client";
import { FloatingLabelInput } from "@/components/ui/floating-input";
import { FloatingTextarea } from "@/components/ui/floating-textarea";
import { SendHorizontal } from "lucide-react";
import React from "react";

const GetinTouch = () => {
   return (
      <div className="main-container flex items-center flex-col justify-center py-16">
         <div className="flex items-center mt-6 w-full justify-center">
            <div className="mb-6 flex items-end gap-4">
               <div className="">
                  {" "}
                  <p className="text-[#545454] text-center text-[28px] lg:text-[44px] leading-[50px] lg:leading-[76.8px] font-normal">
                     Have an Idea...?
                  </p>
                  <h2 className="lg:text-[64px] text-[35px] lg:leading-[76.8px] leading-[50px] font-normal ">
                     Let&apos;s Get in Touch
                  </h2>
                  <span className="pb-5 flex items-center justify-center mt-4">
                     <svg
                        width="135"
                        height="2"
                        viewBox="0 0 135 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M0 1H135"
                           stroke="#545454"
                        />
                     </svg>
                  </span>
               </div>
            </div>
         </div>

         <div className=" mt-[48px] w-full lg:max-w-[70%]">
            <form className="w-full space-y-7 lg:col-span-2">
               <FloatingLabelInput
                  labelClassName=""
                  id="name"
                  label="Full Name"
                  type="text"
                  className="py-4 px-1 outline-none text-[20px] font-normal placeholder:font-normal placeholder:text-[20px] border-b w-full border-b-[#2F2F2F] placeholder:text-[#616161] text-[#3b3b3b]"
               />
               <FloatingLabelInput
                  labelClassName=""
                  id="email"
                  label="Email Address"
                  type="text"
                  className="py-4 px-1 outline-none text-[20px] font-normal placeholder:font-normal placeholder:text-[20px] border-b w-full border-b-[#2F2F2F] placeholder:text-[#616161] text-[#3b3b3b]"
               />
               <FloatingTextarea
                  labelClassName=""
                  id="email"
                  label="Your message"
                  className="py-4 px-1 outline-none text-[20px] font-normal placeholder:font-normal placeholder:text-[20px] border-b w-full border-b-[#2F2F2F] placeholder:text-[#616161] text-[#3b3b3b]"
               />

               <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 w-full">
                  <button
                     type="button"
                     className="flex items-center text-base font-normal text-[#2F2F2F] border border-[#000000] rounded-full px-6 py-[10px]  gap-3">
                     Book a meeting on Calendly{" "}
                     <span>
                        <svg
                           width="20"
                           height="22"
                           viewBox="0 0 20 22"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                              stroke="#2F2F2F"
                              strokeWidth="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                     </span>
                  </button>
                  <button
                     type="button"
                     className="flex items-center text-base text-[#ffffff] font-normal bg-[#2F2F2F] border border-[#000000] rounded-full px-6 py-[10px]  gap-3">
                     Send Message
                     <span className="bg-white text-[#2F2F2F] ps-2 py-2 pe-1.5 rounded-full ">
                        {" "}
                        <SendHorizontal size={16} />
                     </span>
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default GetinTouch;
