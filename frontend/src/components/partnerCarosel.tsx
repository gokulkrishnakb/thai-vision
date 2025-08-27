"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const partners = [
  { id: 1, logo: "/dusit.png", name: "Dusit" },
  { id: 2, logo: "/hypelogo.jpeg", name: "Hype" },
  { id: 4, logo: "/thai.jpeg", name: "Partner 4" },
  { id: 5, logo: "/amazingthailand.png", name: "Partner 6" },
  { id: 6, logo: "/nokair.png", name: "Partner 5" },
  { id: 7, logo: "/avani.webp", name: "Partner 6" },
  { id: 8, logo: "/sixsenses.jpg", name: "Partner 6" },

];

const PartnerCarousel = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 shadow">
      <h2 className="text-center font-semibold text-3xl m-8">
        Our Partners
      </h2>
      <div className="max-w-4xl mx-auto px-6 mt-4">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center items-center px-4"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerCarousel;
