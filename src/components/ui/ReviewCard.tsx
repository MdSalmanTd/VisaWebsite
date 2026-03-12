import React from 'react'
import Image from 'next/image'

interface ReviewCardProps {
  name: string
  location: string
  rating: number
  text: string
  image?: string
  className?: string
}

const ReviewCard = ({ name, location, rating, text, image, className = '' }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 transition-all duration-300 ${
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
    <div className={`rounded-xl p-8 md:p-10 flex flex-col justify-center hover:shadow-xl transition-shadow duration-300 ${className}`}>
      
      {/* Star Rating */}
      {renderStars(rating)}

      {/* Review Text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center italic">
        &ldquo;{text}&rdquo;
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center justify-center gap-4 mt-4">
        {image && (
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="text-left">
          <h4 className="text-lg font-bold text-gray-900">
            {name}
          </h4>
          <p className="text-[#332483] font-medium text-sm">
            {location}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
