"use client"

import React from 'react'
import ReviewCard from '../ui/ReviewCard'
import { testimonials } from '@/data/index'

const Reviews = () => {
  return (
    <section className="py-20 md:py-24 bg-linear-to-b from-white to-[#F8F7FF]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#332483] font-semibold text-xs md:text-sm pb-2 tracking-[0.18em]">REVIEWS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Hear from our satisfied students and families
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {testimonials.map((testimonial, index) => (
            <ReviewCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
              image={testimonial.image}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Reviews