import React from "react";
import PageCover from "@/components/ui/PageCover";
import { AboutBlock } from "@/components/sections/About";
import Ceo from "@/components/sections/Ceo";
import Team from "@/components/sections/Team";
import FrequentQ from "@/components/sections/FrequentQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about Eduvance - your trusted partner for study abroad consulting in Bangladesh. Discover our journey, mission, and commitment to helping students achieve their international education dreams with expert guidance and personalized support.",
  keywords: [
    "about Eduvance",
    "study abroad consultant story",
    "education consulting Bangladesh",
    "our mission vision",
    "study visa expert team",
    "international education consulting team",
  ],
  openGraph: {
    title: "About Eduvance - Your Trusted Study Abroad Partner",
    description:
      "Learn about our journey and mission to help students achieve their international education dreams.",
    url: "https://eduvancebd.com/about",
    images: ["/images/about.jpg"],
  },
  alternates: {
    canonical: "https://eduvancebd.com/about",
  },
};

const page = () => {
  return (
    <>
      <PageCover
        title="About Us"
        subtitle="Learn more about our journey and mission"
        image="/images/about.jpg"
      />

      {/* First Block - Image Left */}
      <AboutBlock
        imageSrc="/images/overview.jpg"
        imageAlt="Students studying abroad"
        imagePosition="left"
        eyebrow="Overview"
        title="Your Trusted Partner in Global Education."
        description="Eduvance is dedicated to guiding students through the complexities of international education. With a team of experienced professionals, we provide personalized visa assistance, program selection, and ongoing support to help students achieve their academic dreams abroad. Our commitment to excellence and tailored solutions ensures that every student's journey is smooth, successful, and aligned with their goals. At Eduvance, your academic aspirations are our priority."
        backgroundColor="bg-gradient-to-br from-[#F8F9FF] via-[#EEF0FF] to-white"
      />

      {/* Second Block - Image Right */}
      <AboutBlock
        imageSrc="/images/story.jpg"
        imageAlt="Our story and values"
        imagePosition="right"
        eyebrow="Our Story"
        title="Building Pathways to Global Success"
        description="Eduvance was founded with a vision to make international education accessible and achievable for students worldwide. Recognizing the challenges of navigating complex visa processes and selecting the right programs, we set out to offer expert guidance and personalized support. Over the years, our dedicated team has helped countless students realize their academic dreams, transforming aspirations into reality. Our story is one of commitment, passion, and a relentless drive to empower students to reach their full potential on a global stage."
      />

      <Ceo />
      
      <Team />

      <FrequentQ />
    </>
  );
};

export default page;
