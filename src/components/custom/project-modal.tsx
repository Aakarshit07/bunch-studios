"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSharedStore } from "@/store/useSharedStore";
import { ContactForm } from "@/components/custom/contact-form";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SimilarProjectCard from "./similar-project-card";
import SafeHtmlRenderer from "@/lib/safeHtmlRenderer";
import { projects } from "@/lib/constants";
import Loaders from "../skletons/Loader";
import { X } from "lucide-react";

export function ProjectModal() {
  const { selectedProject, isProjectModalOpen, setProjectModalOpen } =
    useSharedStore();
  const [isLoading, setIsLoading] = useState(true);
  const [similarProjects, setSimilarProjects] = useState<any[]>([]);

  useEffect(() => {
    if (selectedProject) {
      setIsLoading(true);

      if (
        selectedProject.similarProjects &&
        selectedProject.similarProjects.length > 0
      ) {
        const similar = projects.filter((p) =>
          selectedProject.similarProjects.includes(p.id)
        );
        setSimilarProjects(similar);
      }

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedProject]);

  if (!selectedProject) return null;

  return (
    <Sheet open={isProjectModalOpen} onOpenChange={setProjectModalOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[1000px] overflow-y-auto py-6 px-4 sm:px-10 [&>button:first-of-type]:hidden"
      >
        <SheetHeader className="relative border-b mb-6">
          <div className="flex items-start justify-between">
            <div className="mt-2">
              <SheetTitle className="text-left text-xl sm:text-3xl font-bold text-gray-950 underline">
                <Link href={"#"} target="_blank">
                  {selectedProject.title}
                </Link>
              </SheetTitle>
              <p className="text-gray-700 text-sm font-normal w-full text-left">
                {selectedProject.category} - {selectedProject.date}
              </p>
            </div>
            <SheetClose className="">
              <X width={28} height={28} />
            </SheetClose>
          </div>
        </SheetHeader>

        <div>
          {isLoading ? (
            <div className="w-full min-h-screen flex items-center justify-center">
              <Loaders />
            </div>
          ) : (
            <>
              {/* Responsive Carousel */}
              <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl">
                <Carousel opts={{ align: "center", loop: true }}>
                  <CarouselContent>
                    {selectedProject.images.map(
                      (image: string, index: number) => (
                        <CarouselItem key={index} className="basis-full">
                          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${selectedProject.title} - Page ${
                                index + 1
                              }`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      )
                    )}
                  </CarouselContent>
                  <div className="flex justify-center items-center gap-4 mt-8">
                    <CarouselPrevious className="static translate-y-0 text-primary-900 w-6 h-6" />
                    <CarouselNext className="static translate-y-0 text-primary-900 w-6 h-6" />
                  </div>
                </Carousel>
              </div>

              {/* Description */}
              <div className="bg-white space-y-6 flex flex-col gap-8 mt-6">
                <div className="text-gray-700 leading-relaxed whitesdiv ace-pre-line text-sm">
                  <SafeHtmlRenderer htmlContent={selectedProject.content} />
                </div>

                {/* Similar Projects Carousel */}
                {similarProjects.length > 0 && (
                  <SimilarProjectCard similarProjects={similarProjects} />
                )}

                {/* Contact Form */}
                <div className="max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-950 mb-6">
                    Interested in a similar project?
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
