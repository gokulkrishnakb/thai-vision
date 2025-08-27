import Image from "next/image";
import React from "react";

const HeaderComponent = () => {
  return (
    <div className="shadow-xl/30 bg-navBgColor ">
      <section className="py- border-b border-appBorderColor">
        <div className="mx-smallScreenMargin xl:mx-auto xl:w-containerWidth flex">
          <div className="flex justify-between items-center">
             {/* <Image
                               src="/logo.webp" // 👈 replace with your logo file in public/
                               alt="Company Logo"
                               width={40}
                               height={40}
                               className="mr-2 rounded-full object-cover"
                             /> */}
            <h6 className="font-bold text-xl">THAI VISION</h6>
            <div className="lg:hidden block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu-icon lucide-menu"
              >
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 6h16" />
              </svg>
            </div>
          </div>
          <nav className="py-7 hidden lg:block ms-auto">
        <div className="xl:w-containerWidth flex gap-7 mx-smallScreenMargin xl:mx-auto">
          <div className="flex items-center gap-2 text-appTextGray cursor-pointer">
            <p className="text-md font-semibold">About</p>
          </div>
          <div className="flex items-center gap-2 text-appTextGray cursor-pointer">
            <p className="text-md font-semibold">Contact </p>
          </div>
          <div className="flex items-center gap-2 text-appTextGray cursor-pointer">
            <p className="text-md font-semibold">Blog </p>
          </div>
        </div>
      </nav>
        </div>
      </section>
      
    </div>
  );
};

export default HeaderComponent;
