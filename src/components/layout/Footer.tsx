import Image from "next/image"
import Link from "next/link"


import {
  FOOTER_LINKS,
  FOOTER_CONTACT_INFO,
  OPEN_HOURS,
  SOCIALS,
} from "@/data/footer"

export default function Footer() {
  return (
    <footer className="bg-[#02021a] text-white flex justify-center">

      <div className="max-w-7xl w-full px-6 py-16 flex flex-col gap-14">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-12 justify-between">

          {/* Logo + Description */}
          <div className="max-w-sm">
            <Link href="/" className="mb-6 block">
              <Image
                src="/images/logo.png"
                alt="Visacore"
                width={140}
                height={50}
              />
            </Link>

            <p className="text-gray-400 leading-relaxed">
              Start your journey to international education with expert guidance.
              Our personalized visa assistance ensures a smooth process helping
              you achieve your academic dreams abroad.
            </p>

            <div className="flex gap-4 mt-6">
              {SOCIALS.links.map((icon) => (
                <Link 
                  href="/" 
                  key={icon}
                  className="transition-all duration-300 hover:scale-110 hover:opacity-80 border border-gray-700 rounded-full p-2"
                >
                  <Image src={icon} alt="social" width={22} height={22} />
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Footer Links */}
          <div className="flex flex-wrap gap-12">

            {FOOTER_LINKS.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className="flex flex-col gap-3 text-gray-400">
                  {column.links.map((link) => (
                    <Link key={link} href="/">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Bangladesh Office */}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <div key={link.value} className="flex items-start gap-2 text-gray-400">
                  {link.label.includes('Phone') || link.label.includes('Call') ? (
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ) : link.label.includes('Email') || link.label.includes('Mail') ? (
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ) : link.label.includes('Address') || link.label.includes('Location') ? (
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <p>
                    <span className="font-medium">{link.label}: </span>
                    {link.value}
                  </p>
                </div>
              ))}
            </FooterColumn>

            {/* International Office */}
            {/* <FooterColumn title={INTERNATIONAL_OFFICE.title}>
              {INTERNATIONAL_OFFICE.links.map((link) => (
                <div key={link.value} className="flex items-start gap-2 text-gray-400">
                  {link.label.includes('Phone') || link.label.includes('Call') ? (
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ) : link.label.includes('Email') || link.label.includes('Mail') ? (
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ) : link.label.includes('Address') || link.label.includes('Location') ? (
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <p>
                    <span className="font-medium">{link.label}: </span>
                    {link.value}
                  </p>
                </div>
              ))}
            </FooterColumn> */}

            {/* Open Hours */}
            <FooterColumn title={OPEN_HOURS.title}>
              {OPEN_HOURS.links.map((link) => (
                <div key={link.label} className="flex items-start gap-2 text-gray-400">
                  <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>
                    <span className="font-medium">{link.label}: </span>
                    {link.value}
                  </p>
                </div>
              ))}
            </FooterColumn>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700" />

        {/* Bottom */}
        <p className="text-center text-gray-500 text-sm">
          © Eduvance 2026 All Rights Reserved | Tech Powered by Quanteins
        </p>

      </div>
    </footer>
  )
}


type FooterColumnProps = {
  title: string
  children: React.ReactNode
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-lg font-semibold">{title}</h4>
      {children}
    </div>
  )
}