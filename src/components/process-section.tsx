"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Your goals, our ears - We begin with a free consultation where we listen, ask the right questions, and understand your vision, goals, and what makes your brand tick. Whether you're starting fresh or redesigning, this step ensures we're aligned from day one.",
    isOpen: true,
  },
  {
    number: "02",
    title: "Initial Proposal",
    description:
      "No guesswork, just clarity - Based on our discovery, we share a tailored proposal outlining your site's structure, timeline, and investment. You'll see how we plan to bring your ideas to life with clear expectations, no hidden steps.",
    isOpen: false,
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "Where ideas become digital experiences - Our design team creates a custom UI/UX that reflects your brand while prioritizing ease and conversion. Once approved, our developers bring it to life—clean, responsive, fast-loading, and SEO-ready.",
    isOpen: false,
  },
  {
    number: "04",
    title: "Testing and Deployment",
    description:
      "Smooth. Secure. Set to scale. - Before going live, we rigorously test your site across devices and browsers, optimizing performance, accessibility, and speed. Once everything's perfect, we launch—and celebrate your new digital identity!",
    isOpen: false,
  },
]

export function ProcessSection() {
  const [openStep, setOpenStep] = useState(0)

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? -1 : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Your Perfect Website Is Just <span className="text-[#6d49e2]">4 Step Away</span>
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                No chaos, no confusion. Just a smooth, four-step process designed to bring your vision to life—whether
                you're a small business, a solo creator, or a local shop looking to stand out. We stay in touch every
                step of the way, so you always know what's happening and what's next.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`rounded-3xl border-2 overflow-hidden transition-all duration-300 ${
                  openStep === index ? "border-[#6d49e2]/30 bg-[#f8f6ff]" : "border-gray-200 bg-[#f5f5f5]"
                }`}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                  onClick={() => toggleStep(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-gray-900">{step.number}</div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
                    {openStep === index ? (
                      <Minus className="h-5 w-5 text-gray-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {openStep === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-12 border-t border-gray-300 pt-4">
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
