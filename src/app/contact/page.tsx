import React from 'react'
import PageCover from '@/components/ui/PageCover'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get Expert Visa Assistance',
  description: 'Contact Eduvance for expert study abroad consulting. Located in Mirpur DOHS, Dhaka. Call 01722-381992 or 01986-626015. Email: eduvancebd@gmail.com. Office hours: 10 AM - 7 PM daily. Get personalized visa assistance today.',
  keywords: [
    'contact Eduvance',
    'visa consultant Dhaka contact',
    'study abroad consultant Bangladesh phone',
    'Mirpur DOHS education consultant',
    'Eduvance contact number',
    'visa assistance contact'
  ],
  openGraph: {
    title: 'Contact Eduvance - Expert Study Abroad Consulting',
    description: 'Get in touch with our expert team for personalized visa assistance. Located in Mirpur DOHS, Dhaka.',
    url: 'https://eduvancebd.com/contact',
    images: ['/images/about.jpg'],
  },
  alternates: {
    canonical: 'https://eduvancebd.com/contact'
  }
}

const ContactPage = () => {

  return (
    <>
      <PageCover 
        title="Contact Us" 
        subtitle="Get in touch with our expert team for personalized visa assistance" 
        image="/images/about.jpg" 
      />

      {/* Contact Cards Section */}
     <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs tracking-widest text-[#0053A1] font-semibold uppercase">
            Don't Be Shy
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Let's Start Your Global Journey Together
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Contact Info */}
          <div>

            <h3 className="font-semibold text-lg mb-4 border-b pb-2">
              Get in Touch
            </h3>
            <h4 className="font-semibold mb-2">
                Dhaka Office
              </h4>

            <p className="text-gray-600 mb-6">
              To empower individuals to achieve their global aspirations through
              expert visa guidance and personalized support.
            </p>

            <div className="space-y-4 text-gray-700">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>01722-381992</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>01986-626015</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>eduvancebd@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@eduvancebd.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  House 594, (Lift 5th), Avenue -05, Road -08,
                  Mirpur DOHS, Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={18} />
                <span>10:00 AM – 7:00 PM (Daily)</span>
              </div>

            </div>

            {/* International Office */}
            <div className="mt-8">

              <h4 className="font-semibold mb-2">
                Italy Office
              </h4>

              <p className="text-gray-600 text-sm">
                Via Enea Silvio Piccolomini 51,
              </p>

              <p className="text-gray-600 text-sm">
                53100 Siena (SI), Italy
              </p>

            </div>

          </div>

          {/* Map */}
          <div>

            <h3 className="font-semibold text-lg mb-4 border-b pb-2">
              Find Us
            </h3>

            <div className="w-full h-80 rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564982567876!2d90.36914431498242!3d23.824842584558976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14a3366b005%3A0x901b8774cdfd0796!2sMirpur%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">

          <p className="text-xs uppercase tracking-widest text-indigo-600 mb-2">
            Your Global Adventure Awaits
          </p>

          <h3 className="text-3xl font-bold mb-6">
            Let's Make It Happen Together
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="tel:01722381992"
              className="bg-[#0F4C8A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0B3C6D] transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
            <a 
              href="mailto:eduvancebd@gmail.com"
              className="bg-white border-2 border-[#0F4C8A] text-[#0F4C8A] px-8 py-3 rounded-lg font-semibold hover:bg-[#0F4C8A] hover:text-white transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>

        </div>

      </div>
    </section>

    </>
  )
}


export default ContactPage