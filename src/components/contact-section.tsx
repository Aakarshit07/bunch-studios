"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [formType, setFormType] = useState<"sayHi" | "getQuote">("sayHi")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { formType, ...formData })
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-16 lg:py-24 bg-[#fff9c4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Form */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Still Got Questions? Message Us</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Type Selection */}
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="formType"
                      checked={formType === "sayHi"}
                      onChange={() => setFormType("sayHi")}
                      className="w-4 h-4 text-[#6d49e2] border-gray-300 focus:ring-[#6d49e2]"
                    />
                    <span className="text-sm font-medium text-gray-700">Say Hi</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="formType"
                      checked={formType === "getQuote"}
                      onChange={() => setFormType("getQuote")}
                      className="w-4 h-4 text-[#6d49e2] border-gray-300 focus:ring-[#6d49e2]"
                    />
                    <span className="text-sm font-medium text-gray-700">Get a Quote</span>
                  </label>
                </div>

                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6d49e2] focus:border-[#6d49e2]"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6d49e2] focus:border-[#6d49e2]"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6d49e2] focus:border-[#6d49e2] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-[#6d49e2] hover:bg-[#6d49e2]/90 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right Content - Decorative Elements */}
            <div className="relative hidden lg:block">
              {/* Purple star */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-[#6d49e2] rotate-45 transform"></div>
              </div>

              {/* Yellow star */}
              <div className="absolute bottom-0 right-0">
                <div className="w-16 h-16 bg-[#efc100] rotate-45 transform"></div>
              </div>

              {/* Decorative lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
