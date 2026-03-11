import React from 'react'
import PageCover from '@/components/ui/PageCover'
import Image from 'next/image'
import { services } from '@/data'
import ServicesSection from '@/components/sections/Services'
import Testimonials from '@/components/sections/TestimonialsSection'
import Client from '@/components/sections/Client'

const page = () => {
  return (
    <>
      <PageCover 
        title="Our Services" 
        subtitle="Discover the range of services we offer to support your journey" 
        image='/images/ourservices.jpg' 
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#332483] font-semibold text-sm tracking-wider uppercase mb-3 bg-purple-50 px-4 py-1.5 rounded-full">
                Expert Visa Guidance
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                Empowering Your Global Journey
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                At Eduvance Consultant, we're dedicated to helping you navigate the complexities of international education and travel. Our team of experienced professionals offers comprehensive visa assistance, tailored program selection, and ongoing support to ensure a seamless and successful experience.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                From student visas to business travel permits, we provide personalized guidance every step of the way. Let us be your trusted partner in achieving your global aspirations.
              </p>
            </div>
            
            <div className="relative h-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/services-intro.jpg"
                alt="Our Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection/>

      <Testimonials/>

        <Client/>
    </>
  )
}

export default page