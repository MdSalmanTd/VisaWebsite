import React from 'react'
import PageCover from '@/components/ui/PageCover'
import Testimonials from '@/components/sections/TestimonialsSection'
import CTA from '@/components/sections/CTA'
import Reviews from '@/components/sections/Reviews'
import ReviewCard from '@/components/ui/ReviewCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success Stories - Student Testimonials & Reviews',
  description: 'Read success stories from students who achieved their study abroad dreams with Eduvance. Real testimonials and reviews from students who successfully obtained study visas for Denmark, Finland, Hungary, Italy, South Korea, and England through our expert consulting.',
  keywords: [
    'student success stories Bangladesh',
    'study visa testimonials',
    'Eduvance reviews',
    'study abroad success',
    'visa consultant testimonials',
    'student visa success stories',
    'international education testimonials'
  ],
  openGraph: {
    title: 'Success Stories - Students Who Achieved Their Dreams',
    description: 'Read testimonials from students who successfully obtained study visas with Eduvance guidance.',
    url: 'https://eduvancebd.com/success-stories',
    images: ['/images/success-stories.jpg'],
  },
  alternates: {
    canonical: 'https://eduvancebd.com/success-stories'
  }
}

const page = () => {
  return (
    <>
      <PageCover 
        title="Success Stories" 
        subtitle="Hear from our clients" 
        image="/images/success-stories.jpg" 
      />
      <Reviews/>
      <CTA/>
    </>
  )
}

export default page