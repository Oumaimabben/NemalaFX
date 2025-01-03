import Logo from '../assets/Logo.png';
import React, { useState } from "react";

export const Frame = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const navItems = ["Home", "Products", "Strategies", "Services", "School", "About Us"];

  return (
    <div className="flex w-[1512px] items-center justify-between pt-10 pb-6 px-[60px] relative">
      <img className="relative w-[147.95px] h-[21px]" alt="Logo" src={Logo} />

      <div className="flex w-[617px] items-center gap-10 relative">
        {navItems.map((item) => (
          <div 
            key={item}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway-Regular',Helvetica] font-normal text-[#003366] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
              {item}
            </div>
            {hoveredItem === item && (
              <div className="absolute -bottom-2 w-2 h-2 bg-[#003366] rounded-full" />
            )}
          </div>
        ))}
      </div>

      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        <button className="all-[unset] box-border bg-[#003366] inline-flex items-center justify-center gap-2.5 px-10 py-2.5 relative flex-[0_0_auto] rounded-[40px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Log In
          </div>
        </button>

        <button className="all-[unset] box-border border border-solid border-[#003366] inline-flex items-center justify-center gap-2.5 px-10 py-2.5 relative flex-[0_0_auto] rounded-[40px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway-Medium',Helvetica] font-medium text-[#003366] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Sign Up
          </div>
        </button>
      </div>
    </div>
  );
};

export default Frame;