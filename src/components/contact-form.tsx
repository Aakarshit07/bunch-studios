"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [formType, setFormType] = useState<"sayHi" | "getQuote">("sayHi")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

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
    <Card className="bg-secondary-100 shadow-lg">
      <CardContent className="p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Type Selection */}
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="formType"
                value="sayHi"
                checked={formType === "sayHi"}
                onChange={(e) => setFormType(e.target.value as "sayHi")}
                className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-primary-400"
              />
              <span className="text-sm font-medium text-gray-700">Say Hi</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="formType"
                value="getQuote"
                checked={formType === "getQuote"}
                onChange={(e) => setFormType(e.target.value as "getQuote")}
                className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-primary-400"
              />
              <span className="text-sm font-medium text-gray-700">Get a Quote</span>
            </label>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border-gray-300 focus:border-primary-600 focus:ring-primary-400"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email*
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border-gray-300 focus:border-primary-600 focus:ring-primary-400"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message*
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="border-gray-300 focus:border-primary-600 focus:ring-primary-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
