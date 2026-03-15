import Image from "next/image"
import { Star } from "lucide-react"

interface Props {
  name: string
  location: string
  rating: number
  text: string
  image: string
}

const ReviewCard = ({ name, location, rating, text, image }: Props) => {
  return (
    <div className="h-full bg-white border border-[#332483]/10 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold tracking-wide text-[#332483] bg-[#332483]/8 px-3 py-1 rounded-full">
          Verified Review
        </span>
        <div className="flex items-center gap-1 text-sm">
          <span className="font-semibold text-gray-900">{rating}.0</span>
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-22">
        “{text}”
      </p>

      <div className="pt-4 border-t border-gray-100">

        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={name}
            width={46}
            height={46}
            className="rounded-full object-cover ring-2 ring-[#332483]/15"
          />

          <div>
            <p className="font-semibold text-gray-900 text-sm md:text-base">{name}</p>
            <p className="text-xs text-[#332483] font-medium tracking-wide uppercase">{location}</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ReviewCard