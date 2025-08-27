import Image from "next/image";
import React from "react";

const HeaderComponent = () => {
  return (
    <div className="shadow-xl/30 h-[18vh] ">
      <section className="py-3 border-b border-appBorderColor">
        <div className="mx-smallScreenMargin xl:mx-auto xl:w-containerWidth">
          <div className="flex justify-between items-center">
            {/* <Image src={"/logo.png"} alt="logo" width={100} height={100} /> */}
            <h6 className="font-bold text-xl">TAI VISION</h6>
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
        </div>
      </section>
      <nav className="py-7 bg-navBgColor hidden lg:block">
        <div className="xl:w-containerWidth flex gap-3 mx-smallScreenMargin xl:mx-auto">
          <div className="flex items-center gap-2 text-appTextGray cursor-pointer">
            <p>Thailand Tours</p>
          </div>
          <div className="flex items-center gap-2 text-appTextGray cursor-pointer">
            <p>Things to do</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
