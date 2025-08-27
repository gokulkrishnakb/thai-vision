"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

type Review = {
  id: number;
  name: string;
  date: string;
  rating: number;
  message: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    date: "Aug 20, 2025",
    rating: 5,
    message:
      "Great service and Planning! I booked my honeymoon with Thai Vision and it was almost perfect. Thank you Thai Vision!",
    avatar: "/userAvatar1.avif",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "Aug 18, 2025",
    rating: 4,
    message:
      "Highly recommend Thai Vision! Prompt service and great planning. They did everything they could, perfectly! Really smooth trip with Thai Vision.",
    avatar: "/userAvatar2.jpeg",
  },
  {
    id: 3,
    name: "Robert Brown",
    date: "Aug 15, 2025",
    rating: 5,
    message:
      "They did everything they could, perfectly! Really smooth trip with Thai Vision. Highly recommend Thai Vision! Prompt service and great planning.",
    avatar: "/userAvatar3.jpg",
  },
  {
    id: 4,
    name: "Alice Green",
    date: "Aug 12, 2025",
    rating: 4,
    message:
      "Don't think too much, they over-delivered and I’ll book again for sure! They did everything they could, perfectly! Really smooth trip with Thai Vision.",
    avatar: "/userAvatar2.jpeg",
  },
  {
    id: 5,
    name: "Michael White",
    date: "Aug 10, 2025",
    rating: 5,
    message:
      "Everything was as smooth as it can realistically be :) They did everything they could, perfectly! Really smooth trip with Thai Vision..",
    avatar: "/userAvatar5.avif",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedMap, setExpandedMap] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [isPaused, setIsPaused] = useState(false);

  const total = reviews.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


const nextSlide = useCallback(() => {
  setCurrentIndex((prev) => (prev + 1) % total);
}, [total]);

const prevSlide = useCallback(() => {
  setCurrentIndex((prev) => (prev - 1 + total) % total);
}, [total]);

useEffect(() => {
  if (!isPaused) {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  }
  return () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
}, [isPaused, nextSlide]);

  const toggleExpand = (id: number) => {
    setExpandedMap((prev) => {
      const isExpanded = !prev[id];
      setIsPaused(isExpanded); // pause if expanded
      return { ...prev, [id]: isExpanded };
    });
  };

  return (
    <div className="w-full overflow-hidden bg-appBgGray">
      <div className="relative max-w-4xl mx-auto my-10">
        <h1 className="text-center font-semibold text-3xl">
          What Our Customers Are Saying
        </h1>

        {/* Cards wrapper */}
        <div className="relative h-80 flex items-center justify-center">
          {reviews.map((review, idx) => {
            // compute relative position
            const offset = (idx - currentIndex + total) % total;

            let positionClass = "";
            let zIndex = "z-0";
            if (offset === 0) {
              positionClass = "translate-x-0 scale-110 opacity-100";
              zIndex = "z-20";
            } else if (offset === 1) {
              positionClass =
                "translate-x-full -translate-y-4 scale-80 opacity-70";
              zIndex = "z-10";
            } else if (offset === total - 1) {
              positionClass =
                "-translate-x-full -translate-y-4 scale-80 opacity-70";
              zIndex = "z-10";
            } else {
              positionClass = "opacity-0 scale-75";
              zIndex = "z-0";
            }

            return (
              <div
                key={review.id}
                className={`absolute w-80 bg-white rounded-xl border border-gray-200 shadow-xl p-4 transition-all duration-700 ease-in-out transform ${positionClass} ${zIndex}`}
              >
                {/* Avatar + Name */}
                <div className="flex items-center mb-3">

<Image
  src={review.avatar}
  alt={review.name}
  width={48}
  height={48}
  className="w-12 h-12 rounded-full object-cover mr-3"
/>

                  <div>
                    <span className="font-semibold text-gray-900">
                      {review.name}
                    </span>
                    <span className="block text-gray-500 text-sm">
                      {review.date}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar
                      key={i}
                      className={`mr-1 ${
                        i <= review.rating ? "text-blue-900" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Message */}
                <p
                  className={`text-gray-700 mb-3 ${
                    !expandedMap[review.id] ? "line-clamp-4" : ""
                  }`}
                >
                  {review.message}
                </p>

                {/* Toggle */}
                {review.message.length > 80 && (
                  <button
                    onClick={() => toggleExpand(review.id)}
                    className="text-blue-500 font-medium text-sm hover:underline"
                  >
                    {expandedMap[review.id] ? "Hide" : "Read more"}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-30"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-30"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
