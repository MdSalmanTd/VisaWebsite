"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { HERO_CONTENT } from "@/data/hero"

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_CONTENT.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const item = HERO_CONTENT[index]

  return (
    <section className="relative h-[90vh] min-h-140 flex items-center overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/herobg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-white w-full">

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-2xl min-h-64 md:min-h-72 lg:min-h-64"
          >

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              {item.title}
            </h1>

            <p className="mt-4 max-w-lg text-base sm:text-lg">
              {item.description}
            </p>

            <Link
              href={item.link}
              className="inline-block mt-6 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
            >
              {item.linkLabel}
            </Link>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_CONTENT.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}