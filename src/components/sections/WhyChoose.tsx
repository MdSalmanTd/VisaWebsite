import React from 'react'
import Image from 'next/image'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: "🎓",
    title: "Expert Guidance",
    description: "Our experienced counselors provide personalized advice tailored to your academic goals and career aspirations."
  },
  {
    icon: "✅",
    title: "High Success Rate",
    description: "95% visa approval rate with thousands of students successfully placed in top universities worldwide."
  },
  {
    icon: "🌍",
    title: "Global Network",
    description: "Strong partnerships with 500+ universities across 30+ countries, opening doors to endless opportunities."
  },
  {
    icon: "💼",
    title: "End-to-End Service",
    description: "From university selection to visa processing and pre-departure support, we handle everything for you."
  },
  {
    icon: "⏱️",
    title: "Fast Processing",
    description: "Quick turnaround time with efficient documentation and application processing for timely admissions."
  },
  {
    icon: "🤝",
    title: "Personalized Support",
    description: "Dedicated counselor assigned to each student for continuous support throughout your journey."
  }
]

const WhyChoose = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#332483] font-semibold text-sm tracking-wider uppercase mb-3 bg-purple-50 px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Your Success is Our Priority
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We combine expertise, dedication, and a proven track record to help you achieve your dreams of studying abroad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-linear-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#332483] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-4xl bg-linear-to-br from-[#332483] to-[#4a35b3] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="filter brightness-0 invert">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#332483] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 bg-linear-to-br from-[#332483] to-[#4a35b3] rounded-3xl text-white">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
            <div className="text-purple-200 text-sm md:text-base">Students Placed</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
            <div className="text-purple-200 text-sm md:text-base">Partner Universities</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
            <div className="text-purple-200 text-sm md:text-base">Countries</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
            <div className="text-purple-200 text-sm md:text-base">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose