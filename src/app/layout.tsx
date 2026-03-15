import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatIcon from "@/components/FloatIcon";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eduvancebd.com'),
  title: {
    default: "Eduvance - Your Trusted Study Abroad Consultant in Bangladesh",
    template: "%s | Eduvance"
  },
  description: "Eduvance is your trusted partner for study abroad consulting in Bangladesh. We provide expert guidance, personalized support, and comprehensive services to help students achieve their international education dreams. With a team of experienced professionals, we assist with visa applications, program selection, and ongoing support to ensure a smooth and successful study abroad journey.",
  keywords: [
    "study abroad consultant Bangladesh",
    "study visa consultant Dhaka",
    "international education consulting",
    "visa assistance study abroad",
    "student visa Denmark Finland Hungary Italy South Korea England",
    "study in Europe from Bangladesh",
    "overseas education consultant",
    "Eduvance Bangladesh",
    "study visa solution",
    "tourist visa consultant",
    "business visa Bangladesh",
    "family visa assistance",
    "medical visa consultant",
    "Mirpur DOHS consultant",
    "Europe study programs Bangladesh"
  ],
  authors: [{ name: "Eduvance" }],
  creator: "Eduvance",
  publisher: "Eduvance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduvancebd.com",
    siteName: "Eduvance",
    title: "Eduvance - Your Trusted Study Abroad Consultant in Bangladesh",
    description: "Expert study abroad consulting services in Bangladesh. Visa assistance for Denmark, Finland, Hungary, Italy, South Korea, and England. Personalized guidance for your international education journey.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eduvance - Study Abroad Consultant"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduvance - Your Trusted Study Abroad Consultant in Bangladesh",
    description: "Expert study abroad consulting services in Bangladesh. Visa assistance, program selection, and comprehensive support for international education.",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://eduvancebd.com"
  },
  category: "Education Consulting"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Eduvance",
    "alternateName": "Eduvance Bangladesh",
    "url": "https://eduvancebd.com",
    "logo": "https://eduvancebd.com/images/logo.png",
    "description": "Expert study abroad consulting services in Bangladesh. Visa assistance for Denmark, Finland, Hungary, Italy, South Korea, and England.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Road-9, House-47, Mirpur DOHS",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+880-1722-381992",
        "contactType": "customer service",
        "areaServed": "BD",
        "availableLanguage": ["English", "Bengali"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+880-1986-626015",
        "contactType": "customer service",
        "areaServed": "BD",
        "availableLanguage": ["English", "Bengali"]
      }
    ],
    "email": "eduvancebd@gmail.com",
    "sameAs": [
      "https://www.facebook.com/eduvance.bd",
      "https://www.instagram.com/eduvancebd"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <FloatIcon />
      </body>
    </html>
  );
}
