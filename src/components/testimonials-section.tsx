"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Working with Bunch studio was one the best decision I had made. I needed a digital home for my wellness practice, and this team delivered more than just a website—they gave me growth. Definitely recommended!",
    author: "Anya Patel",
    role: "Wellness Coach",
    avatar: "/placeholder.svg?height=60&width=60&query=woman wellness coach",
  },
  {
    id: 2,
    content:
      "Consultancy is a high competition market and we needed to stand out. That's the problem statement we gave to Bunch Studios and they delivered. In just a few weeks, my consultancy looked sharper, loaded faster, and ranked higher. The clean layout worked like a charm.",
    author: "Rahul Mishra",
    role: "Director at Career Consultancy",
    avatar: "/placeholder.svg?height=60&width=60&query=man business director",
  },
  {
    id: 3,
    content:
      "We needed a website that could showcase our portfolio while being easy to navigate. Bunch Studios delivered exactly what we needed, and our clients love the new site!",
    author: "Sarah Johnson",
    role: "Creative Director",
    avatar: "/placeholder.svg?height=60&width=60&query=woman creative director",
  },
  {
    id: 4,
    content:
      "The team at Bunch Studios understood our vision perfectly and delivered a website that exceeded our expectations. Their attention to detail and commitment to quality is impressive.",
    author: "Michael Chen",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=60&width=60&query=man marketing director",
  },
  {
    id: 5,
    content:
      "Working with Bunch Studios was a seamless experience from start to finish. They took our ideas and transformed them into a beautiful, functional website.",
    author: "Emma Wilson",
    role: "Startup Founder",
    avatar: "/placeholder.svg?height=60&width=60&query=woman startup founder",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1) // Mobile: 1 slide
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2) // Tablet: 2 slides
      } else {
        setSlidesToShow(3) // Desktop: 3 slides
      }
    }

    updateSlidesToShow()
    window.addEventListener("resize", updateSlidesToShow)
    return () => window.removeEventListener("resize", updateSlidesToShow)
  }, [])

  // Calculate max index based on slides to show
  const maxIndex = testimonials.length - slidesToShow

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [maxIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  // Calculate the transform percentage
  const getTransformValue = () => {
    return -(currentIndex * (100 / slidesToShow))
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 -ml-6"
              onClick={goToPrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 -mr-6"
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>

            {/* Testimonials */}
            <div className="overflow-hidden px-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(${getTransformValue()}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="shrink-0 px-4"
                    style={{
                      width: `${100 / slidesToShow}%`,
                    }}
                  >
                    <div className="flex flex-col max-w-[600px] min-w-[300px] mx-auto">
                      {/* Speech Bubble */}
                      <div className="bg-[#5B4B8A] text-white p-6 lg:p-8 rounded-3xl relative mb-8 w-full">
                        <p className="text-sm leading-relaxed">"{testimonial.content}"</p>
                        {/* Triangle pointer */}
                        <div className="absolute -bottom-3 left-8 w-6 h-6 bg-[#5B4B8A] rotate-45"></div>
                      </div>

                      {/* Author Info - Left aligned */}
                      <div className="flex items-center space-x-3 pl-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#EFC100]" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
