import Image from "next/image"

interface RequiredDocumentsProps {
  countryFlag: string
  countryName: string
  documents: {
    title: string
    description?: string
  }[]
}

export default function RequiredDocuments({ countryFlag, countryName, documents }: RequiredDocumentsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Flag */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm h-[250px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={countryFlag}
                alt={`${countryName} flag`}
                fill
                className="object-contain p-6"
              />
            </div>
          </div>

          {/* Right Side - Required Documents */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Required Documents
            </h2>

            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#332483] text-white flex items-center justify-center font-semibold text-xs mt-0.5">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                      {doc.title}
                    </h3>
                    {doc.description && (
                      <p className="text-gray-600 text-sm leading-snug">
                        {doc.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 bg-blue-50 border-l-4 border-[#332483] rounded">
              <p className="text-xs text-gray-700">
                <strong>Please note:</strong> Specific requirements may vary depending on the purpose of your visit and the institution you're visiting. It's always recommended to check the official embassy or consulate website for the most accurate and up-to-date information.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
