import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  time_perod: string;
  price: string;
  extend: boolean;
  image: string;
};

const CardComponent = ({ price, time_perod, title, extend, image }: Props) => {
  return (
    <div
      className={`
    w-[90vw] md:w-[20rem] ${
      extend ? "h-[31rem]" : "max-h-[30rem]"
    } bg-white rounded-md overflow-hidden shadow
    `}
    >
      <div className="relative w-full h-64">
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
      <div className="px-5 py-2 flex flex-col gap-3">
        <div className="flex flex-col gap-2 w-full">
          <h6 className="text-center text-xl font-bold flex-wrap">{title}</h6>
          <p className="text-center text-appTextGray text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil
            aliquid, exercitationem
          </p>
        </div>
        <div className="border-t border-appBorderColor flex items-center justify-between py-3">
          <div className="flex gap-2 font-semibold">{time_perod} Days</div>
          <div className="flex gap-2 text-violet-950">
            <span className="font-semibold text-[20px]">${price}</span>
            <p className="text-[20px]">USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
