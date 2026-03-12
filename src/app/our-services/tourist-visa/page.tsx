import React from 'react'
import PageCover from '@/components/ui/PageCover'
import RequiredDocuments from '@/components/sections/RequiredDocuments'
import { touristVisaDocuments_Italy, touristVisaDocuments_Denmark, touristVisaDocuments_England } from '@/data/visadocuments'

export default function TouristVisaPage() {
  
  return (
    <>
      <PageCover 
        title="Seamless Tourism Visa Solutions" 
        subtitle="Tourist Visa" 
        image="/services/tourist-visa.jpg" 
      />

      <RequiredDocuments 
        countryFlag="/flags/Italy.svg"
        countryName="Italy"
        headings="Schengen (C-Type) Visa Application Checklist"  
        documents={touristVisaDocuments_Italy}
      />

      <RequiredDocuments 
        countryFlag="/flags/Denmark.svg"
        countryName="Denmark"
        headings="Visa Application Document Checklist"
        documents={touristVisaDocuments_Denmark}
      />

      <RequiredDocuments 
        countryFlag="/flags/England.svg"
        countryName="England"
        headings="UK Visa Application Document Checklist"
        documents={touristVisaDocuments_England}
      />
    </>
  )
}
