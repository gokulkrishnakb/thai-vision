import React from "react";
import HeaderComponent from "@/components/shared/header";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="w-screen">
      <HeaderComponent />
      <section>
        <div className="h-[30rem] relative overflow-hidden">
          <Image
            src={"/hero-banner.jpg"}
            alt="banner"
            fill
            className="object-cover -z-10 object-center"
          />
          <div className="absolute top-10 left-4 sm:left-6 lg:top-32 lg:left-32 flex flex-col text-white">
            <div className="flex gap-3 flex-wrap text-sm">
              <p>We are the leading</p>
              <p>DMC in thailand</p>
            </div>
            <h6 className="text-3xl lg:text-5xl mt-3">Tailor Made</h6>
            <h6 className="text-3xl lg:text-5xl font-bold">Tahailand Tours</h6>
            <div className="flex gap-3 mt-3 ps-2 md:ps-3">
              <div className="px-2 sm:px-4 md:px-8 py-2 md:py-3 bg-white text-black cursor-pointer">
                <p className="font-semibold text-sm md:text-[1rem]">
                  Check Our Tour
                </p>
              </div>
              <div className="px-2 sm:px-4 md:px-8 py-2 md:py-3 border-2 border-white text-white cursor-pointer">
                <p className="font-semibold text-sm md:text-[1rem]">
                  Request a Quote
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
