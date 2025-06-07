"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import bunch_logo from "../../../public/bunch_studios_logo.png"
import { footerSections, legalLinks, socialLinks } from "@/lib/constants"
import { usePathname, useRouter } from "next/navigation"


export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

   const handleSectionClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    // Extract the section ID from href (e.g., "#services" from "/#services")
    const sectionId = href.replace("/#", "#")
    // If user is on homepage, just scroll to section
    if (pathname === "/") {
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If user is on another page, navigate to homepage first, then scroll
      router.push("/")
      // Wait for navigation to complete, then scroll to section
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Render navigation link with smart behavior
  const renderNavLink = (item: { name: string; href: string }) => (
    <Link
      key={item.name}
      href={item.href}
      onClick={(e) => handleSectionClick(item.href, e)}
      className="text-white/80 hover:text-white transition-colors text-sm"
    >
      {item.name}
    </Link>
  )

  return (
    <footer className="bg-primary-600 text-white">
      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Logo Section - Always on the Left */}
            <div className="space-y-6">
              <div className="text-2xl font-bold text-white">
                <Link href="/">
                  <Image src={bunch_logo || "/placeholder.svg"} alt="bunch studios" width={168} height={68} />
                </Link>
              </div>
            </div>

            {/* Right Side Container */}
            <div className="flex flex-row gap-8" style={{ width: "300px" }}>
              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Services</h3>
                <ul className="space-y-2">
                  {footerSections.services.map((item) => (
                    <li key={item.name}>{renderNavLink(item)}</li>
                  ))}
                </ul>
              </div>

              {/* Jump To */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Jump to</h3>
                <ul className="space-y-2">
                  {footerSections.jumpTo.map((item) => (
                    <li key={item.name}>{renderNavLink(item)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Legal Links */}
              <div className="flex flex-wrap items-center space-x-6">
                {legalLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 justify-center">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
              <div>
                <p>Copyright &copy; 2023 Bunch Studios</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden">
        <div className="p-4">
          {/* Logo */}
          <div className="py-4">
            <Link href="/">
              <Image src={bunch_logo || "/placeholder.svg"} alt="bunch studios" width={100} height={34} />
            </Link>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-2">
            {/* Services Section */}
            <div className="border-b border-white/10">
              <button
                className="flex items-center justify-between w-full py-3"
                onClick={() => toggleSection("services")}
              >
                <span className="font-medium">Services</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openSection === "services" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === "services" && (
                <div className="pb-3">
                  <ul className="space-y-2">
                    {footerSections.services.map((item) => (
                      <li key={item.name}>{renderNavLink(item)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Jump To Section */}
            <div className="border-b border-white/10">
              <button className="flex items-center justify-between w-full py-3" onClick={() => toggleSection("jumpTo")}>
                <span className="font-medium">Jump to</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openSection === "jumpTo" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === "jumpTo" && (
                <div className="pb-3">
                  <ul className="space-y-2">
                    {footerSections.jumpTo.map((item) => (
                     <li key={item.name}>{renderNavLink(item)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Legal Links */}
          <div className="py-4 space-y-2">
            {legalLinks.map((item) => (
              <div key={item.name}>
                <Link href={item.href} className="text-white/80 hover:text-white text-sm">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 py-4 items-center justify-center">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label={social.label}
                target="_blank"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
