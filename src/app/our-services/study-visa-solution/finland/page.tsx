import React from 'react'
import PageCover from '@/components/ui/PageCover'

export default function FinlandPage() {
  return (
    <>
      <PageCover 
        title="Study in Finland" 
        subtitle="Your Gateway to Finnish Education" 
        image="/flags/Finland.svg" 
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            REQUIREMENTS FOR APPLICATION
          </h2>

          {/* Bachelor's Degree Programs */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F4C8A] mb-6">
              Bachelor's Degree Programs:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">High School Certificate (HSC) or A-Level/O-Level Certificates and Transcripts</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">IELTS or TOEFL (required)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Valid passport (minimum 18 months validity)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Europass CV</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Two Letters of Recommendation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Recent passport-sized photograph (35mm x 45mm)</span>
              </li>
            </ul>
          </div>

          {/* Master's Degree Programs */}
          <div>
            <h3 className="text-2xl font-bold text-[#0F4C8A] mb-6">
              Master's Degree Programs:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Bachelor's Degree Certificate and Transcripts</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Medium of Instruction in English (or IELTS/TOEFL score)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Valid passport (minimum 18 months validity)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Europass CV</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Letter of Motivation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Two Letters of Recommendation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F4C8A] mr-3 mt-1">•</span>
                <span className="text-gray-700">Recent passport-sized photograph (35mm x 45mm)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
