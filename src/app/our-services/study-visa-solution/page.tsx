import React from 'react'
import PageCover from '@/components/ui/PageCover'
import StudyVisaCountries from '@/components/sections/StudyVisaCountries'
import CTA from '@/components/sections/CTA'

const page = () => {
  return (
    <>
    <PageCover title="Consulting Services" subtitle="Study Visa Solution" image="/services/student-visa.jpg" />
    <StudyVisaCountries  />
    <CTA/>
    </>
    
  )
}

export default page