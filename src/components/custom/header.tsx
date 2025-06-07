"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CrossIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import bunch_logo from "../../../public/bunch-main-logo.svg";
import { scrollToSection } from "@/lib/scroll-utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact Us", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    // Extract section ID without the hash
    const sectionId = href.replace("#", "");
    // If we're already on the homepage, just scroll
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      // If on another page, navigate to homepage first
      router.push("/");
      // Wait for navigation to complete, then scroll
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <Image
              src={bunch_logo || "/placeholder.svg"}
              alt="bunch studios"
              width={80}
              height={68}
              style={{ width: "100%", height: "100%" }}
              quality={70}
            />
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
                <Button className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="w-full h-full py-6 px-4 [&>button:first-of-type]:hidden"
              >
                <SheetHeader className="mb-6">
                  <div className="w-full flex items-center justify-between">
                    <SheetTitle>
                      <Image
                        src={bunch_logo || "/placeholder.svg"}
                        alt="bunch studios"
                        width={80}
                        height={68}
                        quality={70}
                      />
                    </SheetTitle>
                    <SheetClose>
                      <X width={28} height={28} />
                    </SheetClose>
                  </div>
                </SheetHeader>
                <div className="flex flex-col items-start justify-start h-full">
                  <nav className="flex flex-col items-start">
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
  );
}
