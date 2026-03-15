"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [mobileActiveSubDropdown, setMobileActiveSubDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 md:py-5 lg:py-6 px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0 relative z-70">
            <Image
              src={isScrolled ? "/images/logo.svg" : "/images/logowhite.svg"}
              alt="logo"
              width={100}
              height={40}
              className="w-32 h-auto md:w-36 lg:w-40 transition-all duration-300"
              priority
            />
          </Link>

          <nav className={`hidden lg:flex items-center gap-6 xl:gap-8 font-semibold transition-all duration-300 ${
            isScrolled ? "text-gray-800 text-sm xl:text-base" : "text-white text-sm xl:text-base"
          }`}>
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition-colors duration-200 py-2 ${
                    isScrolled ? "hover:text-purple-700" : "hover:text-purple-300"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 z-100">
                    <div className="bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 w-60 py-2">
                      {item.dropdown.map((drop) => (
                        <div
                          key={drop.label}
                          className="relative"
                          onMouseEnter={() => setActiveSubDropdown(drop.label)}
                          onMouseLeave={() => setActiveSubDropdown(null)}
                        >
                          <Link
                            href={drop.href}
                            className="flex items-center justify-between px-5 py-2.5 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150 rounded-md mx-2"
                          >
                            <span>{drop.label}</span>
                            {drop.submenu && (
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                          </Link>

                          {/* Sub Dropdown */}
                          {drop.submenu && activeSubDropdown === drop.label && (
                            <div className="absolute left-full top-0 pl-1 z-101">
                              <div className="bg-white shadow-xl border border-gray-100 rounded-lg w-52 py-2">
                                {drop.submenu.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    className="block px-4 py-2.5 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150 rounded-md mx-2"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link
            href="https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20apply%20for%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block bg-[#332483] hover:bg-[#4a35b3] text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:scale-105 whitespace-nowrap"
          >
            APPLY NOW!
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2.5 active:bg-gray-100 rounded-lg transition-colors relative z-70"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-gray-800" : "bg-white"
              } ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-gray-800" : "bg-white"
              } ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-gray-800" : "bg-white"
              } ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-dvh w-[85vw] max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-60 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden overflow-y-auto`}
      >
        <div className="flex flex-col h-full p-5 sm:p-6">

          <div className="flex items-center justify-between mb-6 pt-1">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={110}
              height={40}
              className="w-32 h-auto"
            />
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setMobileActiveDropdown(null);
                setMobileActiveSubDropdown(null);
              }}
              className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-3 flex-1 overflow-y-auto">
            {navLinks.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-gray-900 font-semibold text-base active:text-purple-700 transition-colors flex-1"
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() =>
                        setMobileActiveDropdown(
                          mobileActiveDropdown === item.label ? null : item.label
                        )
                      }
                      className="p-2 active:bg-gray-100 rounded-lg transition-colors shrink-0"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <svg
                        className={`w-5 h-5 text-gray-700 transition-transform duration-200 ${
                          mobileActiveDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {item.dropdown && mobileActiveDropdown === item.label && (
                  <div className="mt-2 mb-1 flex flex-col gap-1 bg-purple-50 rounded-lg p-2">
                    {item.dropdown.map((drop) => (
                      <div key={drop.label}>
                        <div className="flex items-center justify-between">
                          <Link
                            href={drop.href}
                            className="text-gray-800 py-2.5 px-3 active:bg-white active:text-purple-700 rounded-md transition-colors text-sm font-medium flex-1"
                            onClick={() => {
                              if (!drop.submenu) {
                                setIsMobileMenuOpen(false);
                                setMobileActiveDropdown(null);
                              }
                            }}
                          >
                            {drop.label}
                          </Link>
                          {drop.submenu && (
                            <button
                              onClick={() =>
                                setMobileActiveSubDropdown(
                                  mobileActiveSubDropdown === drop.label
                                    ? null
                                    : drop.label
                                )
                              }
                              className="p-2 active:bg-white rounded-md transition-colors shrink-0"
                            >
                              <svg
                                className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${
                                  mobileActiveSubDropdown === drop.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          )}
                        </div>

                        {/* Mobile Sub-dropdown */}
                        {drop.submenu &&
                          mobileActiveSubDropdown === drop.label && (
                            <div className="ml-4 mt-2 mb-1 flex flex-col gap-1 bg-white rounded-lg p-2">
                              {drop.submenu.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="text-gray-700 py-2 px-3 active:bg-purple-50 active:text-purple-700 rounded-md transition-colors text-sm"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileActiveDropdown(null);
                                    setMobileActiveSubDropdown(null);
                                  }}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-4 pb-[max(env(safe-area-inset-bottom),0.5rem)] shrink-0 bg-white">
            <Link
              href="/apply"
              className="block w-full bg-[#332483] active:bg-[#4a35b3] text-white px-6 py-3.5 rounded-full font-semibold text-center transition-all duration-200"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setMobileActiveDropdown(null);
                setMobileActiveSubDropdown(null);
              }}
            >
              APPLY NOW!
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-55 lg:hidden"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setMobileActiveDropdown(null);
            setMobileActiveSubDropdown(null);
          }}
        ></div>
      )}
    </>
  );
}
