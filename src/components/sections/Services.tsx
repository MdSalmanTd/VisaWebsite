import Link from "next/link"
import Image from "next/image"
import { services } from "@/data/index"

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-linear-to-b from-white via-[#F7F6FF] to-[#ECE9FF]">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-[#332483] font-semibold text-sm md:text-base pb-3 tracking-[0.18em] uppercase">What we do</p>
        <h2 className="text-left text-3xl md:text-5xl font-bold mb-3 text-gray-900 leading-tight">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10 md:mb-12 text-sm md:text-base leading-relaxed">
          End-to-end support for your global education journey, from profile preparation to visa success.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">

          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group block h-full"
            >
              <div className="h-full rounded-3xl p-px bg-linear-to-b from-[#332483]/20 via-[#332483]/10 to-transparent transition-all duration-300 group-hover:from-[#332483]/35 group-hover:via-[#332483]/20 group-hover:-translate-y-1">
                <div className="h-full bg-white rounded-3xl overflow-hidden border border-white/80 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 md:h-52 w-full overflow-hidden">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold bg-white/95 text-[#332483] px-3 py-1 rounded-full shadow-sm">
                    Service
                  </span>
                </div>
                <div className="p-5 md:p-6 flex items-center justify-between gap-3">
                  <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#332483] transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Get details</p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#332483]/10 text-[#332483] group-hover:bg-[#332483] group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                </div>
              </div>
            </Link>
          ))}

        </div>

      </div>

    </section>
  )
}