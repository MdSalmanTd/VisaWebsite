import Image from "next/image"
import { universities } from "@/data/index"


export default function Universities() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl text-[#0F172A] text-shadow-lg
        text-shadow-gray-400 font-semibold mb-10">
          Working With Universities
        </h2>

        <p className="text-center text-lg text-gray-700 mb-12">
          We collaborate with leading universities around the world to provide exceptional educational opportunities.
        </p>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-slow hover:pause-animation">

            {universities.map((logo, i) => (
              <div
                key={i}
                className="shrink-0 w-48 h-24 flex items-center justify-center px-6"
              >
                <Image
                  src={logo}
                  alt="university"
                  width={150}
                  height={80}
                  className="opacity-100 hover:scale-110 transition object-contain"
                />
              </div>
            ))}
           
            {universities.map((logo, i) => (
              <div
                key={`duplicate-${i}`}
                className="shrink-0 w-48 h-24 flex items-center justify-center px-6"
              >
                <Image
                  src={logo}
                  alt="university"
                  width={150}
                  height={80}
                  className="opacity-70 hover:opacity-100 transition object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}