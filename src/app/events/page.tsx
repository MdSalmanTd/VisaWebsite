import Image from "next/image"
import { events } from "@/data/index"
import PageCover from "@/components/ui/PageCover"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events & Activities - Workshops, Seminars & Success Stories',
  description: 'Explore Eduvance past events including study visa workshops, university fairs, scholarship guidance sessions, and networking events. We have successfully guided over 500 students through workshops on visa preparation, cultural orientation, and university selection.',
  keywords: [
    'study visa workshop Bangladesh',
    'university fair Dhaka',
    'education seminar events',
    'visa preparation workshop',
    'study abroad events',
    'Eduvance events activities',
    'student networking events',
    'scholarship guidance session'
  ],
  openGraph: {
    title: 'Eduvance Events - Educational Workshops & Seminars',
    description: 'Explore our past workshops, seminars, and educational events that have helped hundreds of students achieve their study abroad dreams.',
    url: 'https://eduvancebd.com/events',
    images: ['/images/about-banner.jpg'],
  },
  alternates: {
    canonical: 'https://eduvancebd.com/events'
  }
}

export default function EventsPage() {
  return (
    <>
      <PageCover
        title="Events and Activities"
        subtitle="Explore our past workshops, seminars, and educational events that have helped hundreds of students achieve their study abroad dreams"
        image="/images/about-banner.jpg"
      />

      <section className="py-16 bg-linear-to-b from-white to-[#F5F5FF]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Event Highlights & Success Stories
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Eduvance has successfully organized numerous workshops, seminars, and networking events to guide students 
              through their study abroad journey. From visa preparation to university fairs, we have provided 
              comprehensive support to over 500 students. Explore our past events and success stories below.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#332483]/90 via-[#332483]/50 to-transparent opacity-80" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-[#332483] px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      {event.category}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-lg p-3 shadow-xl text-center min-w-17.5">
                      <p className="text-[#332483] font-bold text-lg leading-none">
                        {new Date(event.date).getDate()}
                      </p>
                      <p className="text-gray-600 text-xs font-semibold uppercase mt-1">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#332483] transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Event Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#332483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#332483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-5 leading-relaxed text-sm line-clamp-3">
                    {event.description}
                  </p>

                  <details className="group/details">
                    <summary className="cursor-pointer text-[#332483] font-semibold text-sm hover:underline list-none flex items-center gap-2">
                      <span>Read More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-open/details:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {event.details}
                    </p>
                  </details>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-linear-to-r from-[#5340c0] to-[#3f2bbe] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Want to Be Part of Our Success Stories?
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              Join hundreds of students who have successfully achieved their study abroad dreams through Eduvance. 
              We organize regular workshops and seminars to help you every step of the way. 
              Contact us to learn about our upcoming programs and how we can help you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact"
                className="bg-white text-[#332483] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a 
                href="https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20upcoming%20events."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#332483] transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
