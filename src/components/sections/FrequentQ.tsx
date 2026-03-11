"use client"

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "What services does Eduvance Consultant provide?",
    answer: "We offer comprehensive services including university selection, application assistance, visa processing, document preparation, pre-departure orientation, scholarship guidance, and post-arrival support for students aspiring to study abroad."
  },
  {
    question: "Which countries do you provide services for?",
    answer: "We assist students in pursuing education across 30+ countries including the USA, UK, Canada, Australia, Germany, France, Italy, Hungary, Denmark, Finland, South Korea, and many more destinations worldwide."
  },
  {
    question: "How long does the visa process take?",
    answer: "The visa processing time varies by country and visa type. Generally, student visa processing takes 2-8 weeks depending on the destination country. We ensure timely submission and follow-up to expedite your application."
  },
  {
    question: "What is your visa success rate?",
    answer: "We maintain an impressive 95% visa approval rate. Our experienced team ensures proper documentation, application preparation, and interview coaching to maximize your chances of success."
  }
]

const FrequentQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-left mb-16">
          <span className="inline-block text-[#332483] font-semibold text-sm tracking-wider uppercase mb-3 bg-white px-4 py-1.5 rounded-full shadow-sm">
            FAQ
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content/Paragraph */}
          <div className="lg:sticky lg:top-8">
            <div className="">
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand that planning to study abroad can raise many questions. Our team of experienced consultants is here to provide you with all the information you need to make informed decisions about your education journey.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#332483] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Expert guidance from certified counselors</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#332483] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Free initial consultation and profile evaluation</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#332483] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">24/7 support throughout your journey</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-700 font-semibold mb-3">Still need help?</p>
                <a 
                  href="#contact"
                  className="inline-block bg-[#332483] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#4a35b3] hover:shadow-lg"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-8">
                    {faq.question}
                  </span>
                  
                  <ChevronDown 
                    className={`w-5 h-5 text-[#332483] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrequentQ