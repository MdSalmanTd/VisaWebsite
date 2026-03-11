"use client"

import { useState, useEffect } from "react"
import { testimonials } from "@/data/index"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-change slider every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const handleSlideChange = (index: number) => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 600)
  }

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    handleSlideChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length
    handleSlideChange(newIndex)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 transition-all duration-700 ${
              i < rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 bg-transparent">

      <div className="max-w-4xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-[#332483] font-semibold text-sm pb-2 tracking-wide">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold mb-3 text-gray-900">
            Success Stories
          </h2>
          <p className="text-gray-600 text-base">
            Hear from our satisfied students
          </p>
        </div>

        {/* Testimonial Card with Navigation Arrows */}
        <div className="relative">
          {/* Previous Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-[#332483] text-white shadow-lg hover:bg-[#4a35b3] transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Content */}
          <div 
            className={`rounded-xl p-8 md:p-12 flex flex-col justify-center transition-all duration-1000 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            
            {renderStars(testimonials[currentIndex].rating)}

            <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center italic">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-[#332483] font-medium text-sm">
                {testimonials[currentIndex].location}
              </p>
            </div>

          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-[#332483] text-white shadow-lg hover:bg-[#4a35b3] transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-700 rounded-full ${
                index === currentIndex
                  ? 'w-10 h-2.5 bg-[#332483]'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  )
}