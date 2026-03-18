// TYPES
export interface TeamMember {
  id: number
  name: string
  department: string
  phone: string
  image: string
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
  "/universities/1.png",
  "/universities/2.png",
  "/universities/3.png",
  "/universities/4.png",
  "/universities/5.png",
  "/universities/6.png",
  "/universities/7.png",
  "/universities/8.png",
  "/universities/9.png",
  "/universities/10.png",
  "/universities/11.png",
   "/universities/13.png",
  "/universities/14.png",
  "/universities/15.png",
  "/universities/18.png",
]

export const services = [
  { title: "Study Visa Solution", link: "/our-services/study-visa-solution", icon: "/services/student-visa.jpg" },
  { title: "Exam Preparation", link: "https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20exam%20preparation%20services.", icon: "/services/examprep.jpg" },
  { title: "Admission Assistance", link: "https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20admission%20assistance%20services.", icon: "/services/admission.jpg" },
  { title: "Interview Training", link: "https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20interview%20training%20services.", icon: "/services/interview.jpg" },
  { title: "Sponsor Documentation", link: "https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20sponsor%20documentation%20services.", icon: "/services/sponsor.jpg" },
  { title: "Accommodation & Visa", link: "https://wa.me/8801722381992?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20accommodation%20and%20visa%20services.", icon: "/services/accomodation.jpg" },
]

export const countries = [
  { name: "Italy", img:"/flags/Italy.svg",link: "/our-services/study-visa-solution/italy" },
  { name: "Denmark", img:"/flags/Denmark.svg",link: "/our-services/study-visa-solution/denmark" },
  { name: "Finland", img: "/flags/Finland.svg",link: "/our-services/study-visa-solution/finland" },
  { name: "Hungary", img: "/flags/Hungary.svg",link: "/our-services/study-visa-solution/hungary" },
  { name: "South Korea", img: "/flags/Korea.svg",link: "/our-services/study-visa-solution/south-korea" },
  { name: "Malta", img: "/flags/Malta.svg",link: "/our-services/study-visa-solution/malta" },
]

export const events = [
  {
    id: 1,
    title: "European Study Visa Workshop 2025 - Grand Success",
    description:
      "We successfully hosted an exclusive workshop guiding over 150 students through the complete process of obtaining study visas for European universities. Participants learned about application requirements, documentation, interview preparation, and scholarship opportunities.",
    image: "/events/event1.jpg",
    date: "November 20, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Eduvance Office, Dhaka",
    category: "Workshop",
    details: "This comprehensive workshop covered everything students needed to know about studying in Europe. Our experienced consultants provided one-on-one guidance and answered questions about visa processes for Italy, Malta, Hungary, Denmark, and Finland. Over 120 students received personalized visa roadmaps."
  },
  {
    id: 2,
    title: "Success Story Meet & Greet Session - Alumni Meetup",
    description:
      "An inspiring evening where our successful students who achieved their dreams of studying abroad shared their stories. Attendees heard firsthand experiences and received valuable tips on visa applications, university selection, and adapting to life overseas.",
    image: "/events/event2.jpg",
    date: "December 8, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Eduvance Conference Hall",
    category: "Networking",
    details: "An inspiring evening with students who successfully secured their study visas through Eduvance. They shared their journey, challenges, and invaluable tips. Over 80 aspiring students networked and gained first-hand insights from alumni studying in Italy, Malta, Hungary, and Denmark."
  },
  {
    id: 3,
    title: "IELTS Preparation Seminar - Complete Bootcamp",
    description:
      "We conducted an intensive IELTS preparation seminar where students enhanced their English language skills. Expert trainers guided participants through test strategies, practice sessions, and provided personalized feedback to help achieve target band scores.",
    image: "/events/event1.jpg",
    date: "October 15, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Eduvance Training Center",
    category: "Training",
    details: "A full-day intensive seminar focused on all four IELTS modules: Listening, Reading, Writing, and Speaking. Students received expert tips, practiced with real test materials, and learned the scoring system. 95% of attendees reported improved confidence in taking the IELTS exam."
  },
  {
    id: 4,
    title: "University Fair 2025 - European Education Expo",
    description:
      "A landmark event featuring direct interaction with admission officers from 18 leading European universities. Students explored study programs, scholarship opportunities, campus life, and received answers from university representatives from Italy, Malta, Hungary, Denmark, and Finland.",
    image: "/events/event2.jpg",
    date: "September 28, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "Radisson Blu Hotel, Dhaka",
    category: "University Fair",
    details: "Representatives from 18 top-ranked European universities attended. Students learned about bachelor's and master's programs, admission criteria, tuition fees, and scholarships. Over 200 students received on-spot document evaluations, and 45 received conditional offer letters."
  },
  {
    id: 5,
    title: "Visa Interview Preparation Workshop - Mastering Success",
    description:
      "Students mastered the art of visa interviews through our specialized workshop. They learned how to answer tough questions confidently, understood what visa officers look for, and practiced with mock interviews conducted by our expert consultants.",
    image: "/events/event1.jpg",
    date: "January 18, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Eduvance Office, Dhaka",
    category: "Workshop",
    details: "Comprehensive visa interview preparation included common questions, do's and don'ts, body language tips, and document presentation. Each participant received individual mock interview sessions with personalized feedback. 92% visa approval rate among attendees."
  },
  {
    id: 6,
    title: "Pre-Departure Orientation Program - Journey Begins",
    description:
      "We provided essential guidance for students preparing to travel abroad. They learned about travel arrangements, accommodation, banking, cultural adaptation, health insurance, and everything needed before starting their international education journey.",
    image: "/events/event2.jpg",
    date: "February 10, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Eduvance Conference Hall",
    category: "Orientation",
    details: "A comprehensive session for students who received their visas. Topics covered included airport procedures, currency exchange, opening bank accounts abroad, finding accommodation, cultural tips, and emergency contacts. Alumni shared their settling-in experiences. 65 students departed successfully."
  }
]

export const testimonials = [
  {
    name: "Rahim Ahmed",
    location: "Italy",
    rating: 5,
    text: "Eduvance made my dream of studying in Italy come true! Their professional guidance and support throughout the visa process was exceptional. I highly recommend their services to anyone looking to study abroad.",
    image: "/images/logo.jpg"
  },
  {
    name: "Nusrat Jahan",
    location: "South Korea",
    rating: 5,
    text: "Very professional consultancy with excellent customer service. They handled every detail of my South Korea student visa application with care and expertise. Thank you for making my journey smooth!",
    image: "/images/logo.jpg"
  },
  {
    name: "Karim Uddin",
    location: "Hungary",
    rating: 5,
    text: "Highly recommended visa service! The team at Eduvance was incredibly helpful and knowledgeable. They answered all my questions and made the entire process stress-free. Best decision I made!",
    image: "/images/logo.jpg"
  },
  {
    name: "Fatima Rahman",
    location: "Denmark",
    rating: 5,
    text: "Outstanding service from start to finish! Eduvance helped me secure my student visa to Denmark without any hassle. Their expertise and dedication are truly commendable.",
    image: "/images/logo.jpg"
  },
  {
    name: "Shakib Hassan",
    location: "Finland",
    rating: 5,
    text: "I couldn't have asked for better support. The team guided me through every step and ensured my visa application was perfect. Now I'm studying in Finland thanks to Eduvance!",
    image: "/images/logo.jpg"
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Md Ashikul Islam",
    department: "Founder & CEO",
    phone: "+880 1986 626015",
    image: "/teams/Md-Ashikul-Islam Founder & CEO.jpg"
  },
  {
    id: 2,
    name: "Wasim Iqbal",
    department: "Managing Director",
    phone: "+39 351 153 1646",
    image: "/teams/Wasim-Iqbal Managing Director.jpg"
  },
  {
    id: 3,
    name: "Md Ekramul Hossain",
    department: "Accounts Manager",
    phone: "+880 1650 120001",
    image: "/teams/Md-Ekramul-Hossain Accounts Manager.jpg"
  },
  {
    id: 4,
    name: "Md Tomal Munshi",
    department: "Student Consultant",
    phone: "+880 1636 498191",
    image: "/teams/Tomal-Munshi.jpg"
  },
  {
    id: 5,
    name: "Asma Ahmed",
    department: "Student Consultant & IELTS Instructor",
    phone: "+880 01307 984733",
    image: "/teams/Asma-Ahmed.jpg"
  },
  {
    id: 6,
    name: "Md Mirazul Islam Shafin",
    department: "Social Media Executive",
    phone: "+880 1866 179177",
    image: "/teams/Md-Mirazul-Islam-Shafin.jpg"
  },
  {
    id: 7,
    name: "Sakil Ahmed",
    department: "Executive Member",
    phone: "+880 1402 213230",
    image: "/teams/Md-Sakil-Ahmed.jpg"
  }
]