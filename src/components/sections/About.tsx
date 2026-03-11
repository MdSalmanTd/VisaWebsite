import Image from "next/image";

export interface AboutBlockProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  eyebrow?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
}

export function AboutBlock({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  eyebrow,
  title,
  description,
  buttonText,
  buttonLink = "#",
  backgroundColor = "bg-gradient-to-br from-[#F8F9FF] via-[#EEF0FF] to-white",
}: AboutBlockProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <div className={`relative overflow-hidden ${backgroundColor}`}>
      <div className="grid md:grid-cols-2 gap-0 items-center">
        {/* Image Container */}
        <div
          className={`relative h-125 md:h-150 lg:h-175 ${
            isImageLeft ? "md:order-first" : "md:order-last"
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent md:hidden" />
        </div>

        {/* Content Container */}
        <div className="p-8 md:p-12 lg:p-16">
          {eyebrow && (
            <span className="inline-block text-[#332483] font-semibold text-sm tracking-wider uppercase mb-3 bg-white/60 px-4 py-1.5 rounded-full">
              {eyebrow}
            </span>
          )}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
            {description}
          </p>

          {buttonText && (
            <a
              href={buttonLink}
              className="inline-block bg-[#332483] text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:bg-[#4a35b3] hover:shadow-lg hover:scale-105 transform"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="space-y-0">
        {/* Main About Block */}
        <AboutBlock
          imageSrc="/images/about.jpg"
          imageAlt="Students studying abroad"
          imagePosition="left"
          eyebrow="ABOUT US"
          title="Welcome to Eduvance Consultant"
          description="At Eduvance Consultant, we are your trusted partner in navigating the complexities of international education. With expert visa guidance and personalized support, we help students achieve their academic dreams abroad, ensuring a smooth and successful journey. Let us empower you with the tools and resources needed to reach world-class educational opportunities."
          buttonText="Learn More"
          buttonLink="#"
        />

      </div>
    </section>
  );
}
