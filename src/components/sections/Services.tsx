import Link from "next/link"
import Image from "next/image"
import { services } from "@/data/index"

export default function ServicesSection() {
  return (
    <section className="py-20 bg-linear-to-t from-[#D8D8F5] to-[#FFFFFF]">

      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#332483] font-bold text-lg pb-4">What we do</p>
        <h2 className="text-left text-5xl font-bold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center group-hover:text-[#332483] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}

        </div>

      </div>

    </section>
  )
}