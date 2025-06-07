"use client"
import Image from "next/image"
import { useSharedStore } from '@/store/useSharedStore';
import { projects } from "@/lib/constants"

export function ProjectsSection() {
  const { setSelectedProject, setProjectModalOpen } = useSharedStore()

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setProjectModalOpen(true)
  }

  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-bold text-[32px] tracking-[0.2px] capitalize text-gray-950 mb-6">
              We Are Masters Of Building Short Form Websites
            </h2>
            <p className="font-normal text-base leading-[140%] text-gray-700">
              At Bunch, we craft short-form websites that captivate, convert, and help your brand grow. We specialise in
              clean, minimal designs short form website built to give your business an edge.
            </p>
          </div>

          {/* Projects Stack */}
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer group overflow-hidden"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="py-4 space-y-3 bg-white">
                  <div className="text-sm text-gray-500">
                    {project.category} - {project.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed ">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Large card left, 4 small cards right */}
        <div className="hidden lg:block">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <div className="space-y-6">
              <h2 className="font-bold text-[40px] leading-[52px] tracking-[0.2px] capitalize text-gray-950">
                We Are Masters Of Building Short Form Websites
              </h2>
            </div>
            <div className="space-y-4">
              <p className="font-normal text-base leading-[140%] text-gray-700">
                At Bunch, we craft short-form websites that captivate, convert, and help your brand grow. We specialise
                in clean, minimal designs short form website built to give your business an edge.
              </p>
            </div>
          </div>

          {/* Projects Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Large Featured Project - Left Side */}
            <div
              className="cursor-pointer group overflow-hidden"
              onClick={() => handleProjectClick(projects[0])}
            >
              <div className="relative h-[448px] overflow-hidden rounded-3xl">
                <Image
                  src={projects[0].thumbnail || "/placeholder.svg"}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="py-4 space-y-3 bg-white">
                <div className="text-sm text-gray-500">
                  {projects[0].category} - {projects[0].date}
                </div>
                <h3 className="text-2xl font-bold text-gray-950 group-hover:text-primary-600 transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{projects[0].description}</p>
              </div>
            </div>

            {/* 4 Small Projects - Right Side in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {projects.slice(1, 5).map((project) => (
                <div
                  key={project.id}
                  className="cursor-pointer group  overflow-hidden"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative h-48 overflow-hidden rounded-3xl">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="py-4 space-y-2 bg-white">
                    <div className="text-xs text-gray-500">
                      {project.category} - {project.date}
                    </div>
                    <h3 className="text-lg font-bold text-gray-950 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
