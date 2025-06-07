"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { validationRules } from "@/lib/validation";
import { useFormValidation } from "@/hooks/useFormValidation";

const contactFormRules = {
  name: validationRules.name,
  email: validationRules.email,
  message: validationRules.message,
};

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [formType, setFormType] = useState<"sayHi" | "getQuote">("sayHi");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const {
    formData,
    errors,
    handleInputChange,
    handleBlur,
    validateAllFields,
    resetForm,
  } = useFormValidation({
    initialData: initialFormData,
    validationRules: contactFormRules,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAllFields()) {
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle form submission here
      console.log("Form submitted:", { formType, ...formData });

      // Reset form
      resetForm();

      // Navigate to thank you page
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-secondary-100 rounded-xl mx-6 sm:mx-16" id="contact">
      <div className="flex flex-row justify-center items-center px-4 sm:px-10 py-8">
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
                htmlFor="contact-name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
                className={`w-full px-3 py-2 border bg-white rounded-md shadow-xs focus:outline-hidden focus:ring-primary focus:border-primary-600 ${
                  errors.name ? "border-danger-50" : "border-gray-300"
                }`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
              />
              {errors.name && (
                <p
                  id="contact-name-error"
                  className="text-sm text-danger-50 border-danger-50 mt-1"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
                className={`w-full px-3 py-2 border bg-white rounded-md shadow-xs focus:outline-hidden focus:ring-primary-400 focus:border-primary-600 ${
                  errors.email ? "border-danger-50" : "border-gray-300"
                }`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  className="text-sm text-danger-50 border-danger-50 mt-1"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message*
                </label>
                <span className="text-xs text-gray-700">{formData.message.length} / 300</span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
                maxLength={300}
                className={`w-full px-3 py-2 border bg-white rounded-md shadow-xs focus:outline-hidden focus:ring-primary-400 focus:border-primary-600 resize-none ${
                  errors.message ? "border-danger-50" : "border-gray-300"
                }`}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
              />
              {errors.message && (
                <p
                  id="contact-message-error"
                  className="text-sm text-danger-50 border-danger-50 mt-1"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-500/90 text-white py-3"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending..
                </>
              )}
              {!isSubmitting && "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
