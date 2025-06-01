import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bunch Studios - Growth-Driven Websites",
  description:
    "We craft minimalistic sites built to drive organic traffic, conversions, and growth for businesses & brands that value clarity over clutter.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${poppins.variable} font-poppins`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
