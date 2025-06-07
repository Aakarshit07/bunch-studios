"use client";
import React from 'react'
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SimilarProjectsProps } from '@/types/project.types';
import { useSharedStore } from '@/store/useSharedStore';



const SimilarProjectCard: React.FC<SimilarProjectsProps> = ({similarProjects}) => {
  const { setSelectedProject } = useSharedStore()

  return (  
     <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          See Similar Projects
        </h3>
        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            {similarProjects.map((project) => (
              <CarouselItem
                key={project.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="cursor-pointer group overflow-hidden" onClick={() => setSelectedProject(project)}>
                  <div className="relative h-48 overflow-hidden rounded-3xl">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
  )
}

export default SimilarProjectCard
