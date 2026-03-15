import React from 'react'
import PageCover from '@/components/ui/PageCover'
import RequiredDocuments from '@/components/sections/RequiredDocuments'
import { medicalVisaDocuments_India,medicalVisaDocuments_Singapore } from '@/data/visadocuments'

export default function MedicalVisaPage() {
  
  return (
    <>
      <PageCover 
        title="Seamless Medical Visa Solutions" 
        subtitle="Medical Visa" 
        image="/services/medical-visa.jpg" 
      />

      <RequiredDocuments 
        countryFlag="/flags/India.svg"
        countryName="India"
        headings="Required Documents for Medical Visa Application"  
        documents={medicalVisaDocuments_India}
      />

      <RequiredDocuments 
        countryFlag="/flags/Singapore.svg"
        countryName="Singapore"
        headings="Required Documents for Medical Visa Application"
        documents={medicalVisaDocuments_Singapore}
      />
    </>
  )
}
