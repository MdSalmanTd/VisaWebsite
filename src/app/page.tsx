import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import University from "@/components/sections/University";
import About from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import StudyVisaCountries from "@/components/sections/StudyVisaCountries";
import Events from "@/components/sections/Events";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Consultation from "@/components/sections/CTA";
import Commitment from "@/components/sections/Commitment";

export default function Home() {
  return (
   <>
   <Hero />
   <University />
   <About />
    <ServicesSection />
    <StudyVisaCountries />
    <Events />
    <TestimonialsSection />
    <Consultation />
    <Commitment />
   </>
  );
}
