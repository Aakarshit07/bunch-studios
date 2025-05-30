"use client"

import Image from "next/image"

const partners = [
  { name: "Sennheiser", logo: "/placeholder.svg?height=60&width=120&query=sennheiser logo" },
  { name: "Allbirds", logo: "/placeholder.svg?height=60&width=120&query=allbirds logo" },
  { name: "KOTN", logo: "/placeholder.svg?height=60&width=120&query=kotn logo" },
  { name: "Spotify", logo: "/placeholder.svg?height=60&width=120&query=spotify logo" },
  { name: "Airbnb", logo: "/placeholder.svg?height=60&width=120&query=airbnb logo" },
  { name: "Stripe", logo: "/placeholder.svg?height=60&width=120&query=stripe logo" },
]

export function PartnersSection() {
  return (
    <section className="py-12 lg:py-16 bg-white border-y overflow-hidden">
      <div className="relative">
        {/* Infinite scrolling container */}
        <div className="flex animate-infinite-scroll">
          {/* Multiple sets for seamless infinite loop */}
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {partners.map((partner, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="h-8 lg:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  )
}
