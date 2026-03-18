"use client"

import { useState, useEffect } from "react"
import { testimonials } from "@/data/index"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

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
    <section className="py-20 md:py-24 bg-linear-to-b from-white via-[#F9F8FF] to-white">

      <div className="max-w-5xl mx-auto px-4 md:px-6">

        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#0F4C8A] font-semibold text-xs md:text-sm pb-2 tracking-[0.18em]">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            Success Stories
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Hear from our satisfied students
          </p>
        </div>

        {/* Testimonial Card with Navigation Arrows */}
        <div className="relative overflow-hidden rounded-3xl border border-[#0F4C8A]/10">
          {/* Previous Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 text-[#0F4C8A] border border-[#0F4C8A]/20 shadow-md hover:bg-[#0F4C8A] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Content */}
          <div 
            className={`rounded-3xl px-12 py-10 md:px-20 md:py-14 flex flex-col justify-center min-h-80 md:min-h-90 transition-all duration-700 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            
            {renderStars(testimonials[currentIndex].rating)}

            <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-8 text-center italic max-w-3xl mx-auto">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="text-center">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-[#0F4C8A] font-medium text-xs md:text-sm tracking-wide uppercase">
                {testimonials[currentIndex].location}
              </p>
            </div>

          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 text-[#0F4C8A] border border-[#0F4C8A]/20 shadow-md hover:bg-[#0F4C8A] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2.5 mt-7">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-700 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2.5 bg-[#0F4C8A]'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#0F4C8A]/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  )
}