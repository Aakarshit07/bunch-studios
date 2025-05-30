"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

const websiteMockups = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=300&query=amazing web designs business website",
    alt: "Amazing Web Designs for Business",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=300&query=business course platform website",
    alt: "Business Course Platform",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=300&query=styles collection website design",
    alt: "Styles Collection Website",
  },
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Minimal. Powerful. <span className="text-primary">Growth-Driven</span>{" "}
                <span className="text-primary">Websites</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                We craft minimalistic sites built to drive organic traffic, conversions, and growth —for businesses &
                brands that value clarity over clutter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="flex -space-x-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32&query=user avatar 1"
                      alt="User 1"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/placeholder.svg?height=32&width=32&query=user avatar 2"
                      alt="User 2"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/placeholder.svg?height=32&width=32&query=user avatar 3"
                      alt="User 3"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="flex items-center ml-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-xs text-gray-500">700+ Reviews</span>
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
                  className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-out cursor-pointer ${
                    hoveredIndex === index || (hoveredIndex === null && index === activeIndex)
                      ? "w-[320px]" // Expanded width
                      : "w-[180px]" // Default width
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
                      hoveredIndex === index || (hoveredIndex === null && index === activeIndex)
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
                    index === activeIndex ? "bg-primary scale-110" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
