import React from 'react'
import PageCover from '@/components/ui/PageCover'
import RequiredDocuments from '@/components/sections/RequiredDocuments'
import { businessVisaDocuments_Italy, businessVisaDocuments_Denmark, businessVisaDocuments_Finland } from '@/data/visadocuments'

export default function BusinessVisaPage() {
  
  return (
    <>
      <PageCover 
        title="Seamless Business Visa Solutions" 
        subtitle="Business Visa" 
        image="/services/business-visa.jpg" 
      />

      <RequiredDocuments 
        countryFlag="/flags/Italy.svg"
        countryName="Italy"
        headings="Visa Application Requirements"  
        documents={businessVisaDocuments_Italy}
      />

      <RequiredDocuments 
        countryFlag="/flags/Denmark.svg"
        countryName="Denmark"
        headings="Visa Application Requirements"
        documents={businessVisaDocuments_Denmark}
      />

      <RequiredDocuments 
        countryFlag="/flags/Finland.svg"
        countryName="Finland"
        headings="Visa Application Requirements"
        documents={businessVisaDocuments_Finland}
      />
    </>
  )
}
