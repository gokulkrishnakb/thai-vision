import React from "react";

const HeaderComponent = () => {
  return (
    <>
      <section className="border-b py-3 border-appBorderColor">
        <div className="mx-smallScreenMargin xl:mx-auto xl:w-containerWidth">
          <div className="flex justify-between items-center">
            <h6>Tai Tourism</h6>
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
      <nav className="py-7 shadow-xl/30 bg-navBgColor hidden lg:block">
        <div className="xl:w-containerWidth flex gap-3 mx-smallScreenMargin xl:mx-auto">
          <div className="flex items-center gap-2 text-appTextGray cursor-pointer">
            <p>Thailand Tours</p>
          </div>
          <div className="flex items-center gap-2 text-appTextGray cursor-pointer">
            <p>Things to do</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
