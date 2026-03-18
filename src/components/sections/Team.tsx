import Image from 'next/image'
import React from 'react'
import { TeamMember, teamMembers } from '@/data'

const Team = () => {
  return (
    <section className='py-20 bg-gray-50'>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-left mb-16">
          <span className="inline-block text-[#0F4C8A] font-semibold text-sm tracking-wider uppercase mb-3 bg-white px-4 py-1.5 rounded-full shadow-sm">
            Our People
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            Meet the Team
          </h2>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group text-center"
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.department}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {member.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team