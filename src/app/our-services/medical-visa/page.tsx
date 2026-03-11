import React from 'react'
import PageCover from '@/components/ui/PageCover'
import RequiredDocuments from '@/components/sections/RequiredDocuments'

export default function MedicalVisaPage() {
  const documents = [
    {
      title: "National Identity Card (NID) or Birth Certificate",
      description: ""
    },
    {
      title: "Latest Utility Bill",
      description: "Provide a copy of your latest utility bill (e.g., electricity, gas, water)."
    },
    {
      title: "Financial Proof",
      description: "Submit a bank statement, dollar endorsement (not older than one month), active international credit card, or travel card to demonstrate your financial means."
    },
    {
      title: "Medical Invitation Letter",
      description: "Obtain a specific medical invitation letter from the Indian institution or healthcare provider you plan to visit."
    },
    {
      title: "Medical Documents",
      description: "Provide all original medical documents related to your treatment or consultation."
    },
    {
      title: "Proof of Profession",
      description: "If applicable, submit documents proving your profession (e.g., license, certificates)."
    },
    {
      title: "Passport Copies",
      description: "Provide copies of your latest passport and all previous passports."
    }
  ]

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
        documents={documents}
      />
    </>
  )
}
