import React from "react"

import { TbWorldWww, TbSquareRoundedLetterW } from "react-icons/tb"
import { LuGraduationCap } from "react-icons/lu"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },

  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Languages",
    hash: "#languages",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experience = [
  {
    title: "Front-End Developer",
    location: "Axis Communications, Lund, Sweden",
    description:
      "My main work duties included front-end development using Typescript, HTML, React and GraphQL. I worked with bug fixes but also with implementation of new features in Axis built-in web client.",
    icon: React.createElement(TbWorldWww),
    date: "June-August 2023",
    image: "/logos/axis-logo.png",
  },
  {
    title: "Internship as Front-End Developer",
    location: "Axis Communications, Lund, Sweden",
    description:
      "My main duties as an intern included front-end development using Typescript, HTML, React and GraphQL. I worked with bug fixes but also with implementation of new features in Axis built-in web client.",
    icon: React.createElement(TbWorldWww),
    date: "January-June 2023",
    image: "/logos/axis-logo.png",
  },
  {
    title: "Front-End Developer",
    location: "24HR, Malmö, Sweden",
    description: "My main work duties included cloning entire websites.",
    icon: React.createElement(TbWorldWww),
    date: "June-August 2022",
    image: "/logos/24HR-logo.png",
  },
  {
    title: "Internship as Front-End Developer",
    location: "24HR, Malmö, Sweden",
    description:
      "My main duties as an intern included cloning entire websites.",
    icon: React.createElement(TbWorldWww),
    date: "April-June 2022",
    image: "/logos/24HR-logo.png",
  },
] as const

export const jobs = [
  {
    title: "Laundry Worker",
    location: "CWS-boco Sandby, Södra Sandby, Sweden",
    description:
      "High-volume laundry operations at Cws-boco Sandby, ensuring efficient processing of large-scale textiles, equipment maintenance, and adherence to quality standards.",
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "2007-2021",
    image: "/logos/cws-logo.png",
  },
  {
    title: "Circle Leader for Spanish Beginners",
    location: "Medborgarskolan, Lund, Sweden",
    description:
      "Led beginner-level Spanish courses at Medborgarskolan in Lund, facilitating language learning, managing classroom dynamics, and ensuring students grasped foundational Spanish concepts.",
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "2008",
    image: "/logos/medborgarskolan-logo.png",
  },
  {
    title: "Manager",
    location: "Taberna Salinas, Granada, Spain",
    description:
      "Oversaw daily operations. Responsibilities included staff management, customer service, and ensuring a high-quality dining experience for patrons.",
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "2005-2007",
    image: "/logos/taberna-salinas-logo.png",
  },
  {
    title: "European Voluntary Service",
    location: "Youth Center, Eksjö, Sweden",
    description:
      "Served as a volunteer at a youth center under the European Voluntary Service in Eksjö. Assisted with organizing activities, mentoring youth, and supporting daily operations to ensure a positive environment for participants.",
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "2004-2005",
    image: "/logos/evs-logo.png",
  },
  {
    title: "Waiter",
    location: "Granada, Spain",
    description:
      "Worked as a waiter, catering to diners by taking orders, serving meals, and ensuring a pleasant dining experience for all customers.",
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "2002-2004",
    image: "/logos/waiter-logo.png",
  },
  {
    title: "Bartender and Waiter",
    location: "All Bar One, London, United Kingdom",
    description:
      'Served as a bartender and waiter at All Bar One in London, providing top-notch customer service and ensuring a smooth dining experience for patrons. Demonstrated exceptional performance by being selected as "Employee of the Month" and was subsequently promoted to the role of Shift Leader.',
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "2000-2001",
    image: "/logos/allbarone-logo.png",
  },
  {
    title: "Congress assistant and receptionist",
    location: "Granada, Spain",
    description:
      "As a Congress Assistant at a congress hall, responsibilities encompassed assisting with event logistics, setting up conference rooms, managing registration, and ensuring attendees had a smooth experience during the events. My duties as a receptionist included welcoming guests, handling check-ins and check-outs, managing reservations, addressing guest inquiries, and ensuring optimal guest satisfaction throughout their stay.",
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "2000",
    image: "/logos/receptionist-logo.png",
  },
  {
    title: "Telemarketer",
    location: "Granada, Spain",
    description:
      "Worked as a Telemarketer. Responsibilities included reaching out to potential customers over the phone, pitching products or services, addressing inquiries, and achieving sales targets.",
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "1999",
    image: "/logos/telemarketer-logo.png",
  },
  {
    title: "Machine Operator",
    location: "Granada, Spain",
    description:
      "Operated machinery at a plastic bag factory. Responsibilities included the efficient production of plastic bags, ensuring consistent quality, performing routine maintenance checks, and packing the bags for shipment or storage. Maintained a focus on safety standards and production goals throughout the process.",
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "1999",
    image: "/logos/factory-logo.png",
  },
  {
    title: "Kitchen Assistant",
    location: "Granada, Spain",
    description:
      "Served as a kitchen assistant. Responsibilities included aiding chefs and cooks, preparing ingredients, maintaining cleanliness in the kitchen, and ensuring smooth culinary operations to support the timely delivery of meals to diners.",
    icon: React.createElement(TbSquareRoundedLetterW),
    date: "1996-1999",
    image: "/logos/kitchen-logo.png",
  },
] as const

export const education = [
  {
    title:
      "Full-stack developer with a focus on JavaScript (Fullstackutvecklare – inriktning JavaScript)",
    location: "Teknikhögskolan, Lund, Sweden",
    description:
      'I pursued a comprehensive program that covered various domains of software development. I began with a foundational course in Basic Programming with a focus on Java, followed by studies in Frontend Development, delving into technologies like Javascript, HTML, CSS, and React. I also mastered the intricacies of Databases and Secure Software practices. The course also incorporated work-integrated learning modules, known as LIA, where practical application and integration of knowledge took center stage. Advanced courses like Java Spring and Object-oriented Analysis and Design further enhanced my expertise. Throughout my academic journey, I maintained a consistent performance, securing a grade of A, which corresponds to the Swedish grade "VG".',
    icon: React.createElement(LuGraduationCap),
    date: "August 2021-August 2023",
    image: "/logos/teknikhogskolan-logo.png",
  },
  {
    title: "Programming 1. C#",
    location: "Hermods, Lund, Sweden",
    description:
      'I completed the "Programming 1" course with a focus on C# at Hermods in Lund. Throughout the course, I consistently excelled and achieved a grade of A.',
    icon: React.createElement(LuGraduationCap),
    date: "2021",
    image: "/logos/hermods-logo.png",
  },
  {
    title: "Bachelor's degree in Spanish (Linguistic focus)",
    location: "Lund University, Lund, Sweden",
    description:
      "I earned my Bachelor's degree in Spanish with a linguistic emphasis from Lund University. I successfully completed the program with a final grade of A.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
    image: "/logos/lund-university-logo.png",
  },
  {
    title: "Linguistics: Basic Course",
    location: "Lund University, Lund, Sweden",
    description:
      "I completed the basic course in Linguistics at Lund University, achieving a grade of A.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
    image: "/logos/lund-university-logo.png",
  },
  {
    title: "Japanese I: Basic Language Skills",
    location: "Online-based course, Dalarna University, Dalarna, Sweden",
    description:
      'I undertook the "Japanese I" course focused on basic language skills at Dalarna University, delivered through an online platform.',
    icon: React.createElement(LuGraduationCap),
    date: "2014",
    image: "/logos/dalarna-university-logo.png",
  },
  {
    title: "Beginner's Course I: Italian / Beginner's Course II: Italian",
    location: "Lund University, Lund, Sweden",
    description:
      "I completed both the Beginner's Course I and II in Italian at Lund University, achieving a grade of A in both courses.",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
    image: "/logos/lund-university-logo.png",
  },
  {
    title: "Swedish as a Foreign Language",
    location: "Lund University, Lund, Sweden",
    description:
      'I took the "Swedish as a Foreign Language" course at Lund University, which is equivalent to the Tisus test. Tisus is a proficiency examination in the Swedish language, and obtaining its certificate qualifies an individual to undertake academic studies in Swedish institutions.',
    icon: React.createElement(LuGraduationCap),
    date: "2010",
    image: "/logos/lund-university-logo.png",
  },
  {
    title: "Translation and Interpreting",
    location:
      "University of Granada, Granada, Spain / University of Westminster, London, UK",
    description:
      'I studied "Translation and Interpreting" at the University of Granada in Spain. Additionally, as part of the Erasmus program, I continued my studies in "Translation and Interpreting" for a year at the University of Westminster in London.',
    icon: React.createElement(LuGraduationCap),
    date: "2001-2004",
    image: "/logos/granada-university-logo.png",
  },
] as const

export const skills = [
  {
    name: "HTML",
    icon: "/icons/html-icon.png",
  },
  {
    name: "CSS",
    icon: "/icons/css-icon.png",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript-icon.png",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript-icon.png",
  },
  {
    name: "React",
    icon: "/icons/react-icon.png",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs-icon.png",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs-icon.png",
  },
  {
    name: "Git",
    icon: "/icons/git-icon.png",
  },
  {
    name: "Jira",
    icon: "/icons/jira-icon.png",
  },
  {
    name: "TailwindCSS",
    icon: "/icons/tailwindcss-icon.png",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb-icon.png",
  },
  {
    name: "GraphQL",
    icon: "/icons/graphql-icon.png",
  },
  {
    name: "Express",
    icon: "/icons/express-icon.png",
  },
  {
    name: "Framer Motion",
    icon: "/icons/framer-motion-icon.png",
  },
  {
    name: "Elementor Pro",
    icon: "/icons/elementor-pro-icon.png",
  },
] as const

export const languages = [
  {
    name: "Spanish",
    level: "Native",
    icon: "/icons/spanish-icon.png",
  },
  {
    name: "English",
    level: "Fluent",
    icon: "/icons/english-icon.png",
  },
  {
    name: "Swedish",
    level: "Fluent",
    icon: "/icons/swedish-icon.png",
  },
  {
    name: "Italian",
    level: "Intermediate",
    icon: "/icons/italian-icon.png",
  },
] as const

export const typewriterWords = [
  "adaptable.",
  "analytical.",
  "creative.",
  "curious.",
  "dedicated.",
  "diligent.",
  "disciplined.",
  "efficient.",
  "empathetic.",
  "flexible.",
  "focused.",
  "friendly.",
  "hard-working.",
  "helpful.",
  "honest.",
  "innovative.",
  "motivated.",
  "organized.",
  "passionate.",
  "patient.",
  "punctual.",
  "reliable.",
  "responsible.",
  "self-motivated.",
  "sociable.",
  "a team player.",
  "thorough.",
  "trustworthy.",
  "versatile.",
  "well-organized.",
]
