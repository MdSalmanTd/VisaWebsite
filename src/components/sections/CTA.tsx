"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Consultation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="bg-[linear-gradient(135deg,#0053A1_0%,#024490_60%)] text-white overflow-hidden"
    >
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        {/* Left Image */}
        <motion.div 
          className="relative h-96 md:h-screen w-full"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/Cta1.jpg"
            alt="student"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="px-8 md:px-16 py-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Wish to Study Abroad?<br />
            <span className="text-[#8FC9FF]">Make It Happen!</span>
          </h2>

          <p className="text-white/90 mb-8 leading-relaxed text-lg">
            Start your journey to international education with expert guidance.
            Our personalized consultation helps you explore study options,
            choose the right destination, and achieve your academic dreams.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-[#0053A1] px-8 py-4 rounded-lg font-bold hover:bg-[#024490] hover:text-white transition-all duration-300 shadow-lg"
          >
            Get a Free Consultation
          </Link>

        </motion.div>

      </div>
    </section>
  )
}