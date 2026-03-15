export const navLinks = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Our Services",
    href: "/our-services",
    dropdown: [
      {
        label: "Study Visa Solution",
        href: "/our-services/study-visa-solution",

        submenu: [
          { label: "Italy", href: "/our-services/study-visa-solution/italy" },
          { label: "Denmark", href: "/our-services/study-visa-solution/denmark" },
          { label: "Finland", href: "/our-services/study-visa-solution/finland" },
          { label: "USA", href: "/our-services/study-visa-solution/usa" },
          { label: "UK", href: "/our-services/study-visa-solution/uk" },
          { label: "Australia", href: "/our-services/study-visa-solution/australia" },
        ],
      },

      { label: "Medical Visa", href: "/our-services/medical-visa" },
      { label: "Tourist Visa", href: "/our-services/tourist-visa" },
      { label: "Family Visa", href: "/our-services/family-visa" },
      { label: "Business Visa", href: "/our-services/business-visa" },
      { label: "Work Visa", href: "https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20work%20visa%20services." },
      { label: "Air Ticket & Hotel Booking", href: "https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20air%20ticket%20and%20hotel%20booking%20services." },
      { label: "Diplomatic Visa", href: "https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20diplomatic%20visa%20services." },
    ],
  },

  {
    label: "Success Stories",
    href: "/success-stories",
  },

  {
    label: "Newsflash",
    href: "/newsflash/gallery",
    dropdown: [
      {
        label: "Gallery",
        href: "/newsflash/gallery"
      },
      {
        label: "Events & Activities",
        href: "/events"
      }
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];
