"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import contactImage from "../../public/contact_us_logo.png";

export function ContactSection() {
  const [formType, setFormType] = useState<"sayHi" | "getQuote">("sayHi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { formType, ...formData });
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-secondary-100 rounded-xl mx-8 sm:mx-16">
      <div className="flex flex-row justify-center items-center px-10 py-8">
        {/* Left Content - Form */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Still Got Questions? Message Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Type Selection */}
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="formType"
                  checked={formType === "sayHi"}
                  onChange={() => setFormType("sayHi")}
                  className="w-4 h-4 text-gray-900 border-gray-300 bg-white focus:ring-primary-400"
                />
                <span className="text-sm font-medium text-gray-700">
                  Say Hi
                </span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="formType"
                  checked={formType === "getQuote"}
                  onChange={() => setFormType("getQuote")}
                  className="w-4 h-4 text-gray-900 border-gray-300 bg-white focus:ring-primary-400"
                />
                <span className="text-sm font-medium text-gray-700">
                  Get a Quote
                </span>
              </label>
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
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
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-xs focus:outline-hidden focus:ring-primary focus:border-primary-600"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
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
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-xs focus:outline-hidden focus:ring-primary-400 focus:border-primary-600"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
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
                maxLength={300}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-xs focus:outline-hidden focus:ring-primary-400 focus:border-primary-600 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary/90 text-white py-3"
            >
              Send Message
            </Button>
          </form>
        </div>       
      </div>
    </section>
  );
}
