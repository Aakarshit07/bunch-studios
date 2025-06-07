"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import avatar_1 from "../../../public/ava1.jpeg";
import avatar_2 from "../../../public/ava2.jpeg";
import avatar_3 from "../../../public/ava3.jpeg";
import avatar_4 from "../../../public/ava4.jpeg";
import avatar_5 from "../../../public/ava5.jpeg";

const testimonials = [
  {
    id: 1,
    content:
      "Bunch Studios helped me grow my wellness brand with a clean and beautiful website. I'm beyond happy!",
    author: "Anya Patel",
    role: "Wellness Coach",
    avatar: avatar_1,
  },
  {
    id: 2,
    content:
      "Bunch Studios made my consultancy look sharp and rank high. The clean UI helped boost conversions too.",
    author: "Rahul Mishra",
    role: "Director at Career Consultancy",
    avatar: avatar_2,
  },
  {
    id: 3,
    content:
      "They built a stunning portfolio site that’s easy to use and well-loved by clients. Great job Bunch Studios!",
    author: "Sarah Johnson",
    role: "Creative Director",
    avatar: avatar_3,
  },
  {
    id: 4,
    content:
      "The website delivered by Bunch Studios exceeded all our expectations. Detail and quality were unmatched.",
    author: "Michael Chen",
    role: "Marketing Director",
    avatar: avatar_4,
  },
  {
    id: 5,
    content:
      "From start to finish, Bunch Studios turned our ideas into an elegant and functional experience online.",
    author: "Emma Wilson",
    role: "Startup Founder",
    avatar: avatar_5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>

          <Carousel
            opts={{ align: "center" }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col max-w-[600px] min-w-[300px] mx-auto">
                    <div className="bg-primary-900 text-white p-6 lg:p-8 rounded-3xl relative mb-8 w-full">
                      <p className="text-sm leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="absolute -bottom-3 left-8 w-6 h-6 bg-primary-900 rotate-45"></div>
                    </div>
                    <div className="flex items-center space-x-3 pl-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold text-secondary-700">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-700">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 text-primary-900 w-6 h-6" />
              <CarouselNext className="static translate-y-0 text-primary-900 w-6 h-6" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
 