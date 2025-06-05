"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import bunch_logo from "../../public/bunch-main-logo.svg"
import { scrollToSection } from "@/lib/scroll-utils"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact Us", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white backdrop-blur-xs shadow-xs" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 ">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={bunch_logo || "/placeholder.svg"} alt="bunch studios" width={80} height={68} />
          </Link>

          {/* Desktop Navigation - Moved to right */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Button>
            ))}
          </nav>

          {/*  Mobile Menu Button  */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-full pt-16 pb-8 px-6">
                <SheetHeader className="pb-4 mb-4">
                <SheetTitle className="flex items-center">
                  <Image src={bunch_logo || "/placeholder.svg"} alt="bunch studios" width={80} height={68} />
                </SheetTitle>
              </SheetHeader>
                <div className="flex flex-col items-start justify-start h-full">
                  <nav className="flex flex-col items-start space-y-4">
                    {navigation.map((item) => (
                      <Button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="text-2xl font-medium text-start text-gray-900 hover:text-primary-600 transition-colors p-0"
                      >
                        {item.name}
                      </Button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
