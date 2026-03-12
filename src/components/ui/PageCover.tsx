import Image from "next/image"

interface PageCoverProps {
  title: string
  subtitle?: string
  image: string
}

export default function PageCover({ title, subtitle, image }: PageCoverProps) {
  const isFlag = image.includes('/flags/')
  
  return (
    <section className={`relative w-full ${isFlag ? 'h-75 md:h-100' : 'h-100 md:h-125'} flex items-center ${isFlag ? 'bg-linear-to-br from-[#332483] to-[#4a35b3]' : ''}`}>
      
      {/* Background Image or Flag */}
      {isFlag ? (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative w-75 h-50 md:w-100 md:h-75">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
        {subtitle && (
          <p className="uppercase tracking-widest text-sm mb-3">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl font-bold">
          {title}
        </h1>
      </div>

    </section>
  )
}