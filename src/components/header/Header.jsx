import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
const Header = () => {
   return (
      <div className='py-3 px-5'>
         <div>
            <Image src={logo} alt='logo' width={40} />
         </div>
      </div>
   );
};

export default Header;
