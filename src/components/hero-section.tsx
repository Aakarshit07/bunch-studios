"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import avatar_10 from "../../public/ava6.jpeg";
import avatar_20 from "../../public/ava7.png";
import avatar_30 from "../../public/ava10.png";


const websiteMockups = [
  {
    id: 1,
    image:
      "/placeholder.svg?height=400&width=300&query=amazing web designs business website",
    alt: "Amazing Web Designs for Business",
  },
  {
    id: 2,
    image:
      "/placeholder.svg?height=400&width=300&query=business course platform website",
    alt: "Business Course Platform",
  },
  {
    id: 3,
    image:
      "/placeholder.svg?height=400&width=300&query=styles collection website design",
    alt: "Styles Collection Website",
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Minimal. Powerful.{" "}
                <span className="text-primary-600">Growth-Driven</span>{" "}
                <span className="text-primary-600">Websites</span>
              </h1>
              <p className="text-base font-medium text-gray-700 max-w-lg">
                We craft minimalistic sites built to drive organic traffic,
                conversions, and growth —for businesses & brands that value
                clarity over clutter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:space-x-4">
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-600/90 text-white"
              >
                Get Started
              </Button>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="flex -space-x-2">
                    <Image
                      src={avatar_10}
                      alt="User 1"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src={avatar_20}
                      alt="User 2"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src={avatar_30}
                      alt="User 3"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-secondary-400 text-secondary-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.8</span>
                  </div>

                  <span className="text-xs text-gray-500"><span className="font-medium text-gray-900">700+</span> Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3-Card Carousel */}
          <div className="relative">
            {/* Desktop Carousel - Show exactly 3 cards */}
            <div className="hidden md:flex justify-center items-center gap-3 h-[400px] overflow-hidden">
              {websiteMockups.map((mockup, index) => (
                <div
                  key={mockup.id}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
                    hoveredIndex === index ||
                    (hoveredIndex === null && index === activeIndex)
                      ? "w-[320px]" // Expanded width
                      : "w-[160px]" // Default width
                  } h-[400px]`} // Fixed height for all cards
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={mockup.image || "/placeholder.svg"}
                    alt={mockup.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  {/* Overlay for non-active cards */}
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                      hoveredIndex === index ||
                      (hoveredIndex === null && index === activeIndex)
                        ? "opacity-0"
                        : "opacity-20"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={websiteMockups[activeIndex].image || "/placeholder.svg"}
                alt={websiteMockups[activeIndex].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {websiteMockups.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary scale-110"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
