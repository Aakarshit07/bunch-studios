"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { validationRules } from "@/lib/validation";
import { useFormValidation } from "@/hooks/useFormValidation";
import LoaderFlat from "../skletons/LoaderFlat";
import { toast } from "sonner";

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

export function ContactForm() {
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
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast("Message sent successfully!");

      resetForm();

      router.push("/thank-you");
    } catch (error: any) {
      toast(error.message || "Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full bg-secondary-100 shadow-lg rounded-2xl">
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
                className="w-4 h-4 bg-white text-gray-950 border-gray-300 focus:ring-primary-400"
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
                className="w-4 h-4 bg-white text-gray-950 border-gray-300 focus:ring-primary-400"
              />
              <span className="text-sm font-medium text-gray-700">
                Get a Quote
              </span>
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
              onBlur={handleBlur}
              required
              className={`bg-white focus:border-primary-600 focus:ring-primary-400 ${
                errors.name ? "border-danger-50" : "border-gray-300"
              }`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-danger-50 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email*
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              className={`bg-white focus:border-primary-600 focus:ring-primary-400 ${
                errors.email ? "border-danger-50" : "border-gray-300"
              }`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-danger-50 mt-1">
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
              <span className="text-xs text-gray-700">
                {formData.message.length} / 300
              </span>
            </div>
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              className={`bg-white focus:border-primary-600 focus:ring-primary-400 resize-none ${
                errors.message ? "border-danger-50" : "border-gray-300"
              }`}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-danger-50 mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-600/90 text-white py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderFlat />
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
