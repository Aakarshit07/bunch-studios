"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useStore } from "@/store/use-store"
import { ContactForm } from "@/components/contact-form"
import { Spinner } from "@/components/ui/spinner"

export function ProjectModal() {
  const { selectedProject, isProjectModalOpen, setProjectModalOpen, setSelectedProject } = useStore()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [similarProjects, setSimilarProjects] = useState<any[]>([])

  useEffect(() => {
    if (selectedProject) {
      setIsLoading(true)
      setCurrentImageIndex(0)

      // Find similar projects
      if (selectedProject.similarProjects && selectedProject.similarProjects.length > 0) {
        const projects = [
          {
            id: "1",
            title: "Bright Arc Web Development Project",
            category: "Web Design",
            date: "May 20, 2025",
            thumbnail: "/placeholder.svg?height=200&width=300&query=bright arc website homepage",
          },
          {
            id: "2",
            title: "Value Logic Responsive UI Design",
            category: "Web Design",
            date: "June 20, 2022",
            thumbnail: "/placeholder.svg?height=200&width=300&query=value logic website homepage",
          },
          {
            id: "3",
            title: "Fineart Web Design Project",
            category: "App Design",
            date: "June 20, 2024",
            thumbnail: "/placeholder.svg?height=200&width=300&query=fineart app homepage",
          },
        ]

        const similar = projects.filter((p) => selectedProject.similarProjects.includes(p.id))
        setSimilarProjects(similar)
      }

      // Simulate loading time
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [selectedProject])

  useEffect(() => {
    if (isProjectModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isProjectModalOpen])

  if (!isProjectModalOpen || !selectedProject) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setProjectModalOpen(false)} />

      {/* Modal Content - Right Sidebar */}
      <div className="relative w-[70vw] max-w-[1000px] h-full bg-white shadow-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 z-20 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          onClick={() => setProjectModalOpen(false)}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="h-full">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              {/* Blue Header Section */}
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-8 border-b-4 border-blue-600">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-blue-100">
                  {selectedProject.category} - {selectedProject.date}
                </p>
              </div>

              {/* Blue Background Image Carousel Section */}
              <div className="bg-gradient-to-br from-blue-300 to-blue-400 p-8 relative">
                <div className="flex justify-center items-center space-x-4 min-h-[400px]">
                  {selectedProject.images.slice(0, 5).map((image, index) => (
                    <div
                      key={index}
                      className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer ${
                        index === currentImageIndex ? "w-80 h-96 z-10" : "w-48 h-72 opacity-80"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Page ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Dots Navigation */}
                <div className="flex justify-center mt-6 space-x-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>

              {/* White Content Section */}
              <div className="bg-white p-8 space-y-8">
                {/* Project Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                    {selectedProject.content}
                  </p>
                </div>

                {/* Similar Projects */}
                {similarProjects.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">See Similar Projects</h3>

                    <div className="grid grid-cols-3 gap-4">
                      {similarProjects.map((project) => (
                        <div
                          key={project.id}
                          className="cursor-pointer group bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <div className="relative h-24 overflow-hidden">
                            <Image
                              src={project.thumbnail || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="p-3">
                            <h4 className="font-semibold text-gray-900 text-xs mb-1 line-clamp-2">{project.title}</h4>
                            <p className="text-xs text-gray-500">
                              {project.category} - {project.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Form */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Interested in a similar project?</h3>
                  <ContactForm />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
