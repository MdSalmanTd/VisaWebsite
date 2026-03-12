import React from 'react'
import PageCover from '@/components/ui/PageCover'
import RequiredDocuments from '@/components/sections/RequiredDocuments'
import { familyVisaDocuments_Italy, familyVisaDocuments_Denmark, familyVisaDocuments_England } from '@/data/visadocuments'

export default function FamilyVisaPage() {
  
  return (
    <>
      <PageCover 
        title="Seamless Family Visa Solutions" 
        subtitle="Family Visa" 
        image="/services/family-visa.jpg" 
      />

      <RequiredDocuments 
        countryFlag="/flags/Italy.svg"
        countryName="Italy"
        headings="Required Documents"  
        documents={familyVisaDocuments_Italy}
      />

      <RequiredDocuments 
        countryFlag="/flags/Denmark.svg"
        countryName="Denmark"
        headings="Visa Application Requirements"
        documents={familyVisaDocuments_Denmark}
      />

      <RequiredDocuments 
        countryFlag="/flags/England.svg"
        countryName="England"
        headings="Visa Application Requirements"
        documents={familyVisaDocuments_England}
      />
    </>
  )
}
