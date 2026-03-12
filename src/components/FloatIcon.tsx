import React from 'react'
import Link from 'next/link'
import { ImWhatsapp } from "react-icons/im";


const FloatIcon = () => {
  const whatsappNumber = '8801722381992'
  const whatsappMessage = 'Hello! I would like to know more about your visa services.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Chat on WhatsApp"
    >

      <ImWhatsapp className="w-7 h-7"  />

    </Link>
  )
}

export default FloatIcon
