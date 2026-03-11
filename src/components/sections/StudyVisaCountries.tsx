import Image from "next/image"
import Link from "next/link"
import { countries } from "@/data/index"

export default function StudyVisaCountries() {
  const countryLinks: Record<string, string> = {
    "Italy": "/our-services/italy",
    "England": "/our-services/england",
    "Hungary": "/our-services/hungary",
    "Denmark": "/our-services/denmark",
    "South Korea": "/our-services/south-korea",
    "Finland": "/our-services/finland",
  }

  return (
    <section className="py-20 bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <p className="text-gray-600 font-bold text-lg pb-4">WHERE WE SERVE</p>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Study Visa Solution
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive study visa solutions for top destinations around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {countries.map((country) => (
            <Link 
              key={country.name} 
              href={countryLinks[country.name] || "#"}
              className="group cursor-pointer"
            >

              <div className="flex flex-col items-center gap-3">
                <div className="relative h-32 w-40">
                  <Image
                    src={country.img}
                    alt={`${country.name} flag`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-gray-800 font-semibold text-sm text-center group-hover:text-[#332483] transition-colors duration-300">
                  {country.name}
                </h3>
              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  )
}