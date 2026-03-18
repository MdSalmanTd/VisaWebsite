import React from "react";
import Image from "next/image";

const Ceo = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative h-95 md:h-120 rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/teams/Md-Ashikul-Islam Founder & CEO.jpg"
              alt="Md Ashikul Islam, Founder and CEO"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6 md:p-10 lg:p-12">
            <span className="inline-block text-[#0F4C8A] font-semibold text-sm tracking-wider uppercase mb-4 bg-white px-4 py-1.5 rounded-full">
              Founder & CEO
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Md Ashikul Islam
            </h2>

            <p className="text-[#0F4C8A] font-semibold mb-6">Chief Executive Officer, Eduvance</p>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6 pl-4 border-l-4 border-[#0F4C8A]/25">
              "Our goal is simple: guide every student with honesty, clarity, and confidence so they can build a strong future through global education."
            </p>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
              Md Ashikul Islam leads Eduvance with a clear mission to make quality global education opportunities accessible for every ambitious student. His leadership is rooted in trust, transparency, and practical guidance for students and families.
            </p>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              With years of experience in study visa counseling and student support, he has built a results-driven team that helps learners at every step—from planning and documentation to visa success and departure readiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;