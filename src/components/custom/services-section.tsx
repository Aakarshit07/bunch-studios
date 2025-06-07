"use client";

import { Button } from "@/components/ui/button";
import icon1 from "../../../public/step1.png";
import icon2 from "../../../public/step2.png";
import icon3 from "../../../public/step3.png";
import Image from "next/image";
import { scrollToSection } from "@/lib/scroll-utils";

const services = [
  {
    title: "Visual Identity & UI/UX Design",
    icon: icon3,
    features: [
      "UI/UX Design with conversion-first approach",
      "Custom layout, branding, and visual identity",
      "Clickable prototype built in Figma",
    ],
  },
  {
    title: "Web Development",
    icon: icon2,
    features: [
      "Front-end and back-end development",
      "Fully responsive builds",
      "Bases level custom CMS integration",
      "Support with On-page SEO",
    ],
  },
  {
    title: "End-End Design + Development",
    icon: icon1,
    features: [
      "End-to-end design and front-end/back-end development",
      "Fully responsive and mobile-optimized",
      "HTML/CSS based builds",
      "CMS setup with Domain, hosting, and launch support",
    ],
  },
];

export function ServicesSection() {
  const handleGetStarted = () => {
    scrollToSection("contact");
  };

  return (
    <section className="py-16 lg:py-24 bg-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-secondary-400 text-sm uppercase tracking-wide font-medium">
                Our Services
              </p>
              <h2 className="text-3xl lg:text-[40px] font-semibold text-primary-50">
                Take a look at the variety of services we offer.
              </h2>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-lg font-normal text-primary-50">
              We don't just build websites—we craft digital spaces that feel
              good, work fast, and grow with you. Whether you need a fresh
              design, expert development, or both—we've got you covered.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_5px_6px_-1px_#271C4A] border-r-8 border-b-8 border-primary-900 "
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="rounded-xl flex items-center justify-center w-[100px] h-[100px] p-2 bg-white shadow-md">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={60}
                      height={60}
                      style={{ width: "100%", height: "100%" }}     
                      quality={70}
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-950">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-2 list-disc pl-5">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className=" text-primary-900 font-normal text-base"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="bg-primary-600 hover:bg-primary-600/85 text-white font-medium px-6 py-2 rounded-lg"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
