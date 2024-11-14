import React from "react";

const Footer = () => {
   return (
      <>
         <footer className="flex items-center justify-center py-4">
            <div className="main-container text-center w-full">
               <p className="text-[#545454]">
                  © {new Date().getFullYear()} Mohammad Sohag Sheik. All rights reserved.
               </p>
            </div>
         </footer>
      </>
   );
};

export default Footer;
