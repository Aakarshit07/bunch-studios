"use client"
import Image from "next/image"
import { useStore } from "@/store/use-store"

const projects = [
  {
    id: "1",
    title: "Bright Arc Web Development Project",
    category: "Web Design",
    date: "May 20, 2025",
    description:
      "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
    images: [
      "/placeholder.svg?height=600&width=300&query=bright arc website page 1",
      "/placeholder.svg?height=600&width=300&query=bright arc website page 2",
      "/placeholder.svg?height=600&width=300&query=bright arc website page 3",
      "/placeholder.svg?height=600&width=300&query=bright arc website page 4",
      "/placeholder.svg?height=600&width=300&query=bright arc website page 5",
    ],
    content: `Bright Arc is a counselling, career mentorship, and guidance platform committed to helping individuals find clarity and purpose. They approached us to design a website that reflects their mission of empowering their users to publish, update, and organise content effortlessly—keeping their platform fresh and relevant.

We delivered a 7-page website that strikes the perfect balance between minimalism and functionality. The layout is intentionally light and reader-friendly—ideal for showcasing blogs, success stories, and engaging projects without overwhelming the user. Every page is thoughtfully designed to reflect the trust, care, and expertise Bright Arc brings to its audience.

To ensure long-term scalability and ease of content management, we also built a custom CMS with a dynamic backend, empowering their team to publish, update, and organise content effortlessly—keeping the platform fresh and relevant. From visual identity to user experience, Bright Arc's digital presence now feels as empowering as their mission.`,
    thumbnail: "/placeholder.svg?height=400&width=600&query=bright arc website homepage",
    similarProjects: ["2", "3"],
  },
  {
    id: "2",
    title: "Value Logic Responsive UI Design",
    category: "Web Design",
    date: "June 20, 2025",
    description: "A comprehensive business logic platform with responsive design and user-friendly interface.",
    images: [
      "/placeholder.svg?height=600&width=300&query=value logic website page 1",
      "/placeholder.svg?height=600&width=300&query=value logic website page 2",
      "/placeholder.svg?height=600&width=300&query=value logic website page 3",
    ],
    content:
      "Value Logic required a complete redesign of their business platform to improve user experience and increase conversion rates.",
    thumbnail: "/placeholder.svg?height=400&width=600&query=value logic website homepage",
    similarProjects: ["1", "3"],
  },
  {
    id: "3",
    title: "Other Work UI Design Header goes here",
    category: "Web Design",
    date: "June 20, 2022",
    description: "A clean, modern UI design for a corporate website with focus on user experience.",
    images: [
      "/placeholder.svg?height=600&width=300&query=other work website page 1",
      "/placeholder.svg?height=600&width=300&query=other work website page 2",
    ],
    content: "A corporate client needed a fresh, modern website design that would reflect their brand values.",
    thumbnail: "/placeholder.svg?height=400&width=600&query=other work website homepage",
    similarProjects: ["1", "2"],
  },
  {
    id: "4",
    title: "Fineart Web Design Project",
    category: "App Design",
    date: "June 20, 2024",
    description: "A modern art gallery website with interactive features and stunning visual presentation.",
    images: [
      "/placeholder.svg?height=600&width=300&query=fineart app page 1",
      "/placeholder.svg?height=600&width=300&query=fineart app page 2",
      "/placeholder.svg?height=600&width=300&query=fineart app page 3",
    ],
    content:
      "Fineart gallery needed a sophisticated online presence that would showcase their collection while providing an intuitive browsing experience for art enthusiasts.",
    thumbnail: "/placeholder.svg?height=400&width=600&query=fineart app homepage",
    similarProjects: ["1", "3"],
  },
  {
    id: "5",
    title: "Value Logic Responsive UI Design",
    category: "App Design",
    date: "June 20, 2022",
    description: "A comprehensive business logic platform with responsive design and user-friendly interface.",
    images: [
      "/placeholder.svg?height=600&width=300&query=value logic app page 1",
      "/placeholder.svg?height=600&width=300&query=value logic app page 2",
    ],
    content: "Value Logic required a complete redesign of their business platform.",
    thumbnail: "/placeholder.svg?height=400&width=600&query=value logic app homepage",
    similarProjects: ["1", "4"],
  },
]

export function ProjectsSection() {
  const { setSelectedProject, setProjectModalOpen } = useStore()

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setProjectModalOpen(true)
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-poppins font-bold text-[32px] leading-[42px] tracking-[0.2px] capitalize text-gray-900 mb-6">
              We Are Masters Of Building Short Form Websites
            </h2>
            <p className="font-poppins font-normal text-base leading-[140%] text-gray-600">
              At Bunch, we craft short-form websites that captivate, convert, and help your brand grow. We specialise in
              clean, minimal designs short form website built to give your business an edge.
            </p>
          </div>

          {/* Projects Stack */}
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-sm text-gray-500">
                    {project.category} - {project.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6d49e2] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
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
              <h2 className="font-poppins font-bold text-[40px] leading-[52px] tracking-[0.2px] capitalize text-gray-900">
                We Are Masters Of Building Short Form Websites
              </h2>
            </div>
            <div className="space-y-4">
              <p className="font-poppins font-normal text-base leading-[140%] text-gray-600">
                At Bunch, we craft short-form websites that captivate, convert, and help your brand grow. We specialise
                in clean, minimal designs short form website built to give your business an edge.
              </p>
            </div>
          </div>

          {/* Projects Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Large Featured Project - Left Side */}
            <div
              className="cursor-pointer group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              onClick={() => handleProjectClick(projects[0])}
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={projects[0].thumbnail || "/placeholder.svg"}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-sm text-gray-500">
                  {projects[0].category} - {projects[0].date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#6d49e2] transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{projects[0].description}</p>
              </div>
            </div>

            {/* 4 Small Projects - Right Side in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {projects.slice(1, 5).map((project) => (
                <div
                  key={project.id}
                  className="cursor-pointer group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="text-xs text-gray-500">
                      {project.category} - {project.date}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#6d49e2] transition-colors line-clamp-2">
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
