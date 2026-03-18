import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white to-[#F5F3FF] flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center bg-white border border-gray-100 rounded-2xl shadow-sm p-8 md:p-10">
        <p className="text-[#0F4C8A] font-semibold tracking-[0.2em] text-xs md:text-sm mb-3">ERROR 404</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#0F4C8A] text-white font-semibold hover:bg-[#1E6BB8] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="https://wa.me/8801722381992?text=Hello!%20I%20need%20help%20finding%20the%20right%20page."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#0F4C8A] text-[#0F4C8A] font-semibold hover:bg-[#0F4C8A] hover:text-white transition-colors"
          >
            Contact on WhatsApp
          </Link>
        </div>
      </div>
    </main>
  )
}
