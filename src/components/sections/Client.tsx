"use client"

import React from 'react'

interface Stat {
  number: string
  label: string
  suffix: string
}

const stats: Stat[] = [
  {
    label: "Clients Served",
    number: "600",
    suffix: "+"
  },
  {
    label: "Success Stories",
    number: "400",
    suffix: "+"
  },
  {
    label: "Partner Universities",
    number: "500",
    suffix: "+"
  },
  {
    label: "Countries",
    number: "30",
    suffix: "+"
  }
]

const Client = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Proven Results
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-gray-600 text-sm md:text-base mb-2 font-medium">
                {stat.label}
              </p>
              <p className="text-5xl md:text-6xl font-bold text-[#0F4C8A]">
                {stat.number}
                <span className="text-4xl md:text-5xl">{stat.suffix}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Client