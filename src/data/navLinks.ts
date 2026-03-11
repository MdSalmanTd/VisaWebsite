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
          { label: "Italy", href: "/our-services/italy" },
          { label: "England", href: "/our-services/england" },
          { label: "Hungary", href: "/our-services/hungary" },
          { label: "Denmark", href: "/our-services/denmark" },
          { label: "South Korea", href: "/our-services/south-korea" },
          { label: "Finland", href: "/our-services/finland" },
        ],
      },

      { label: "Medical Visa", href: "/medical-visa" },
      { label: "Tourist Visa", href: "/tourist-visa" },
      { label: "Family Visa", href: "/family-visa" },
      { label: "Business Visa", href: "/business-visa" },
      { label: "Work Visa", href: "/work-visa" },
      { label: "Air Ticket & Hotel Booking", href: "/ticket-booking" },
      { label: "Diplomatic Visa", href: "/diplomatic-visa" },
    ],
  },

  {
    label: "Success Stories",
    href: "/success-stories",
  },

  {
    label: "Newsflash",
    href: "/news",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];
