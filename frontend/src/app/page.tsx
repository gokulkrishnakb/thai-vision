"use client";
import React, { useRef } from "react";
import HeaderComponent from "@/components/shared/header";
import Image from "next/image";
import CardComponent from "@/components/shared/cards";
import LeftIcon from "@/components/icons/left-icon";
import RightIcon from "@/components/icons/right-icon";
import PartnerCarousel from "@/components/partnerCarosel";
import TestimonialCarousel from "@/components/UserReview";
import Footer from "@/components/shared/footer";

const demoPackage = [
  {
    title: "4 Days Yi Peng Chiang mia Tour",
    time_period: "4",
    price: "998",
    extend: false,
  },
  {
    title: "4 Days Yi Peng Chiang mia Tour",
    time_period: "4",
    price: "998",
    extend: true,
  },
  {
    title: "4 Days Yi Peng Chiang mia Tour",
    time_period: "4",
    price: "998",
    extend: false,
  },
  {
    title: "4 Days Yi Peng Chiang mia Tour",
    time_period: "4",
    price: "998",
    extend: true,
  },
  {
    title: "4 Days Yi Peng Chiang mia Tour",
    time_period: "4",
    price: "998",
    extend: false,
  },
];

const LandingPage = () => {
  const packageCouroselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (scrollOffSet: number) => {
    if (!packageCouroselRef.current) return;
    packageCouroselRef.current.scrollBy({
      left: scrollOffSet,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <HeaderComponent />
      <section>
        <div className="h-[75vh] relative overflow-hidden bg-[url(/hero-banner.jpg)] bg-no-repeat bg-cover bg-center">
          <div className="w-full xl:w-containerWidth mx-smallScreenMargin xl:mx-auto pt-24 flex flex-col text-white">
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
      <section className="mt-16">
        <h6 className="text-center font-semibold text-3xl">
          What We Offer as a Thailand DMC
        </h6>
        <div className="flex flex-col gap-4 mt-10 w-containerWidth mx-auto">
          <h6 className="text-center text-appTextGray text-2xl font-semibold">
            FIT Travel Service
          </h6>
          <p className="text-appTextGray text-[18px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            numquam, asperiores reiciendis suscipit nobis ipsa, ipsum ab sequi
            officia nam facilis fugit non iure! Deserunt eos magnam eius dolore
            expedita?
          </p>
          <div className="grid grid-cols-2 mt-10 gap-10">
            <div className="relative w-full h-80 rounded-tl-[50px] rounded-br-[150px] overflow-hidden">
              <Image
                src={"/hero-banner.jpg"}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-2xl">Thailand Family Tours</p>
              <p className="text-appTextGray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                nesciunt iste libero quas ducimus. Molestias rem nam natus sunt
                fugiat quia accusamus, possimus commodi expedita sit pariatur
                consectetur doloremque officia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Perferendis a, quis omnis,
                laboriosam deserunt blanditiis, modi nam mollitia optio sed
                fugit. Labore tempore asperiores autem laborum qui neque totam
                cumque?
              </p>
              <button className="px-4 py-2 border-2 border-violet-950 rounded-sm text-violet-950 font-semibold">
                View Family Options
              </button>
            </div>
          </div>
          <p className="text-violet-950 font-semibold text-center cursor-pointer mt-10 underline">
            Explore FIT Travel Services
          </p>
        </div>
        <div className="bg-appBgGray py-20 mt-12">
          <div className="w-containerWidth mx-auto grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-5 pt-8">
              <h6 className="text-2xl font-semibold">
                Group Travel & Set Departures
              </h6>
              <p className="text-appTextGray text-[18px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore eius nam quos. Vero inventore, cumque neque corporis
                magnam eos iusto consectetur praesentium laudantium error
                numquam repellendus architecto, sit cum excepturi!
              </p>
              <p className="text-violet-950 underline font-semibold">
                Request Group Proposal
              </p>
            </div>
            <div className="w-full h-80 relative rounded-tr-[50px] rounded-bl-[150px] overflow-hidden">
              <Image
                src={"/hero-banner.jpg"}
                alt="image"
                fill
                className="bg-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 w-containerWidth mx-auto">
          <h6 className="text-2xl text-appTextGray text-center font-semibold">
            MICE & Corporate Events
          </h6>
          <p className="text-appTextGray text-[18px] text-center mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            distinctio ipsam omnis ratione iste veritatis cumque blanditiis,
            consectetur commodi inventore culpa voluptatum incidunt amet
            pariatur vel velit molestias nesciunt dolorem?
          </p>
          <div className="grid grid-cols-2 mt-10 gap-10">
            <div className="relative w-full h-80 rounded-tl-[50px] rounded-br-[150px] overflow-hidden">
              <Image
                src={"/hero-banner.jpg"}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-2xl">Corporate Event</p>
              <p className="text-appTextGray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                nesciunt iste libero quas ducimus. Molestias rem nam natus sunt
                fugiat quia accusamus, possimus commodi expedita sit pariatur
                consectetur doloremque officia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Perferendis a, quis omnis,
                laboriosam deserunt blanditiis, modi nam mollitia optio sed
                fugit. Labore tempore asperiores autem laborum qui neque totam
                cumque?
              </p>
              <button className="px-4 py-2 border-2 border-violet-950 rounded-sm text-violet-950 font-semibold">
                View Family Options
              </button>
            </div>
          </div>
          <p className="text-violet-950 font-semibold underline text-center mt-8">
            Explore MICE Solutions
          </p>
        </div>
      </section>
      <section className="bg-appBgGray mt-8">
        <div className="w-containerWidth py-16 mx-auto">
          <h6 className="text-4xl font-semibold text-center">
            Our Top Selling Thailand Itineraries
          </h6>
          <p className="text-center text-appTextGray mt-5 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            illum eius unde neque eligendi cumque, nihil possimus nisi quis
            quidem deleniti? Quidem labore unde, repudiandae sit odit ipsum.
            Deserunt, delectus.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <button
              className="bg-appBorderColor rounded-full p-4 cursor-pointer"
              onClick={() => handleScroll(-380)}
            >
              <LeftIcon />
            </button>
            <div
              ref={packageCouroselRef}
              className="flex gap-5 flex-1 overflow-x-scroll no-scrollbar"
            >
              {demoPackage.map((tourPackage, index) => (
                <div key={index} className="w-[22rem]">
                  <CardComponent
                    title={tourPackage.title}
                    price={tourPackage.price}
                    time_perod={tourPackage.time_period}
                    extend={tourPackage.extend}
                  />
                </div>
              ))}
            </div>
            <button
              className="bg-appBorderColor rounded-full p-4 cursor-pointer"
              onClick={() => handleScroll(380)}
            >
              <RightIcon />
            </button>
          </div>
          <p className="font-semibold text-center mt-10 cursor-pointer">
            View all Itineraries
          </p>
        </div>
      </section>
      <PartnerCarousel/>
      <TestimonialCarousel/>
      <Footer/>
     </div>
  );
};

export default LandingPage;
