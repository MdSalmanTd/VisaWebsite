// TYPES
export interface TeamMember {
  id: number;
  name: string;
  department: string;
  image: string;
}

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
  { href: '/', key: 'services', label: 'Services' },
  { href: '/', key: 'pricing ', label: 'Pricing ' },
  { href: '/', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};


export const universities = [
  "/universities/uni1.png",
  "/universities/uni2.png",
  "/universities/uni3.png",
  "/universities/uni4.png",
  "/universities/uni5.png",
  "/universities/uni6.png",
  "/universities/uni7.png"
]

export const services = [
  { title: "Student Visa", link: "/services/student-visa", icon: "/services/student-visa.jpg" },
  { title: "Medical Visa", link: "/services/medical-visa", icon: "/services/photo2.jpg" },
  { title: "Tourist Visa", link: "/services/tourist-visa", icon: "/services/photo3.jpg" },
  { title: "Family Visa", link: "/services/family-visa", icon: "/services/photo4.jpg" },
  { title: "Business Visa", link: "/services/business-visa", icon: "/services/photo5.jpg" },
  { title: "Work Visa", link: "/services/work-visa", icon: "/services/photo6.jpg" },
  { title: "Air Ticket & Hotel Booking", link: "/services/ticket-booking", icon: "/services/photo7.jpg" },
  { title: "Diplomatic Visa", link: "/services/diplomatic-visa", icon: "/services/photo8.jpg" },
]

export const countries = [
  { name: "Italy", img:"/flags/Italy.svg" },
  { name: "England", img:"/flags/England.svg" },
  { name: "Hungary", img:"/flags/Hungary.svg" },
  { name: "Denmark", img:"/flags/Denmark.svg" },
  { name: "South Korea", img: "/flags/Korea.svg" },
  { name: "Finland", img: "/flags/Finland.svg" },
]

export const events = [
  {
    title: "Using Technology to Help the Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/events/event1.jpg",
  },
  {
    title: "Has Consumer Behavior Changed Forever?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/events/event2.jpg",
  },
]

export const testimonials = [
  {
    name: "Rahim Ahmed",
    location: "Italy",
    rating: 5,
    text: "Eduvance made my dream of studying in Italy come true! Their professional guidance and support throughout the visa process was exceptional. I highly recommend their services to anyone looking to study abroad.",
    image: "/testimonials/person1.jpg"
  },
  {
    name: "Nusrat Jahan",
    location: "England",
    rating: 5,
    text: "Very professional consultancy with excellent customer service. They handled every detail of my UK student visa application with care and expertise. Thank you for making my journey smooth!",
    image: "/testimonials/person2.jpg"
  },
  {
    name: "Karim Uddin",
    location: "Hungary",
    rating: 5,
    text: "Highly recommended visa service! The team at Eduvance was incredibly helpful and knowledgeable. They answered all my questions and made the entire process stress-free. Best decision I made!",
    image: "/testimonials/person3.jpg"
  },
  {
    name: "Fatima Rahman",
    location: "Denmark",
    rating: 5,
    text: "Outstanding service from start to finish! Eduvance helped me secure my student visa to Denmark without any hassle. Their expertise and dedication are truly commendable.",
    image: "/testimonials/person4.jpg"
  },
  {
    name: "Shakib Hassan",
    location: "Finland",
    rating: 5,
    text: "I couldn't have asked for better support. The team guided me through every step and ensured my visa application was perfect. Now I'm studying in Finland thanks to Eduvance!",
    image: "/testimonials/person5.jpg"
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    department: "CEO & Founder",
    image: "/images/member1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    department: "Head of Admissions",
  image: "/images/member1.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    department: "Visa Counselor",
  image: "/images/member1.jpg"
  },
  {
    id: 4,
    name: "David Kumar",
    department: "Education Consultant",
image: "/images/member1.jpg"
  },
  {
    id: 5,
    name: "Jessica Williams",
    department: "Student Relations",
    image: "/images/member1.jpg"
  },
  {
    id: 6,
    name: "Robert Anderson",
    department: "Financial Advisor",
   image: "/images/member1.jpg"
  },
  {
    id: 7,
    name: "Priya Patel",
    department: "Marketing Director",
   image: "/images/member1.jpg"
  },
  {
    id: 8,
    name: "James Thompson",
    department: "Operations Manager",
    image: "/images/member1.jpg"
  },
  {
    id: 9,
    name: "Lisa Martinez",
    department: "Senior Counselor",
    image: "/images/member1.jpg"
  },
  {
    id: 10,
    name: "Daniel Lee",
    department: "Technical Support",
  image: "/images/member1.jpg"
  }
]