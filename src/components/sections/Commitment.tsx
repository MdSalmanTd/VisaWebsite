import Image from "next/image"

export default function Commitment() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-sm text-indigo-600 font-semibold mb-2">
            WHY CHOOSE US?
          </p>

          <h2 className="text-3xl font-bold mb-6">
            Our Commitment
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            At Eduvance, we are dedicated to maintaining the highest
            standards of service and integrity. We continuously update our
            knowledge of visa policies and international education systems to
            provide the most accurate and reliable guidance for students who
            wish to study abroad.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Expertise:</strong> Experienced professionals with deep
              knowledge of visa regulations and international education.
            </li>

            <li>
              <strong>Personalized Service:</strong> Tailored solutions that
              address each student’s unique goals and aspirations.
            </li>

            <li>
              <strong>Proven Success:</strong> A strong track record with a
              high visa approval rate for students studying abroad.
            </li>

            <li>
              <strong>Comprehensive Support:</strong> End-to-end assistance
              from consultation to post-arrival support.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative h-125 w-full">
          <Image
            src="/images/commitment.jpg"
            alt="commitment"
            fill
            className="object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  )
}