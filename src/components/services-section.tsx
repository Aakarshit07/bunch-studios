"use client"

import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Visual Identity & UI/UX Design",
    icon: "/placeholder.svg?height=48&width=48&query=ui design icon purple",
    features: [
      "UI/UX Design with conversion-first approach",
      "Custom layout, branding, and visual identity",
      "Clickable prototype built in Figma",
    ],
  },
  {
    title: "Web Development",
    icon: "/placeholder.svg?height=48&width=48&query=web development icon purple",
    features: [
      "Front-end and back-end development",
      "Fully responsive builds",
      "Bases level custom CMS integration",
      "Support with On-page SEO",
    ],
  },
  {
    title: "End-End Design + Development",
    icon: "/placeholder.svg?height=48&width=48&query=end to end development icon purple",
    features: [
      "End-to-end design and front-end/back-end development",
      "Fully responsive and mobile-optimized",
      "HTML/CSS based builds",
      "CMS setup with Domain, hosting, and launch support",
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#6d49e2] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-[#efc100] text-sm uppercase tracking-wide font-medium">Our Services</p>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-white">
                Take a look at the variety of services we offer.
              </h2>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-lg text-white/90 leading-relaxed">
              We don't just build websites—we craft digital spaces that feel good, work fast, and grow with you. Whether
              you need a fresh design, expert development, or both—we've got you covered.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="p-3 bg-[#6d49e2]/10 rounded-xl w-fit">
                    <img src={service.icon || "/placeholder.svg"} alt={service.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#6d49e2] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="bg-[#6d49e2] hover:bg-[#6d49e2]/90 text-white font-medium px-6 py-2 rounded-lg">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
