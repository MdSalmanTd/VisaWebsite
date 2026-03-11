import Image from "next/image"
import { events } from "@/data/index"

export default function Events() {
  return (
    <section className="py-16 bg-linear-to-b from-[#F5F5FF] to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-[#332483] font-bold text-base pb-3">LATEST UPDATES</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Events and Activities
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Stay updated with our latest events, workshops, and educational activities
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {events.map((event, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#332483]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#332483] transition-colors duration-300">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                  {event.description}
                </p>

                <button className="bg-[#332483] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1e1650] transition-all duration-300 transform group-hover:translate-x-2 inline-flex items-center gap-2">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}