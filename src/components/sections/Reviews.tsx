"use client"

import React from 'react'
import ReviewCard from '@/components/ui/ReviewCard'
import { testimonials } from '@/data/index'

const Reviews = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-[#332483] font-semibold text-sm pb-2 tracking-wide">REVIEWS</p>
          <h2 className="text-4xl font-bold mb-3 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base">
            Hear from our satisfied students and families
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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