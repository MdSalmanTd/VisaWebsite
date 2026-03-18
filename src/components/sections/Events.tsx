import Image from "next/image"
import Link from "next/link"
import { events } from "@/data/index"

export default function Events() {
  const featuredEvents = events.slice(0, 3)

  return (
    <section className="py-16 bg-linear-to-b from-[#F5F5FF] to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-[#0F4C8A] font-bold text-base pb-3">SUCCESS STORIES</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Events and Activities
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Explore highlights from our successful workshops, seminars, and educational events
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {featuredEvents.map((event, i) => (
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
                <div className="absolute inset-0 bg-linear-to-t from-[#0F4C8A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Event Info */}
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span className="bg-[#0F4C8A]/10 text-[#0F4C8A] px-2 py-0.5 rounded-full font-semibold">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#0F4C8A] transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed text-sm line-clamp-3">
                  {event.description}
                </p>

                <Link 
                  href="/events"
                  className="bg-[#0F4C8A] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0B3C6D] transition-all duration-300 transform group-hover:translate-x-2 inline-flex items-center gap-2"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

              </div>
            </div>
          ))}

        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/events"
            className="inline-flex items-center gap-2 bg-[#0F4C8A] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-[#0B3C6D] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Events
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}