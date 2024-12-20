"use client"

import React from "react"
import SectionHeading from "./SectionHeading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <div className="sm:pt-20">
      <motion.section
        ref={ref}
        className="max-w-6xl sm:pt-10 mx-10 leading-8 text-justify mb-28 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <div className="mb-3">
          <p className="my-5">
            Full-stack developer specializing in frontend technologies, with a
            distinctive background in linguistics and international business
            operations. My technical expertise includes React, TypeScript,
            Next.js, and modern JavaScript frameworks, complemented by proven
            experience at Axis Communications and 24HR digital agency.
          </p>
          <p className="my-5">
            My unconventional path from linguistics to software development has
            equipped me with unique advantages. Language analysis skills
            translate directly to code structure and syntax mastery, while
            cross-cultural communication abilities were refined through work
            across Spain, UK, and Sweden. These experiences are enhanced by
            problem-solving capabilities developed through managing complex
            language systems and technical implementations.
          </p>
          <p className="my-5">
            Recent achievements demonstrate my technical growth and
            adaptability. I completed the Full-stack Development program at
            Teknikhögskolan with top grades across all courses, successfully
            delivered frontend projects during internships at Axis
            Communications and 24HR, and effectively combined linguistic
            expertise with technical skills to create intuitive user interfaces
            and readable, maintainable code.
          </p>
          <p className="my-5">
            Currently seeking a frontend developer role where I can leverage
            both my technical proficiency and diverse professional background to
            contribute to innovative web development projects. This combination
            of skills positions me uniquely to bridge technical implementation
            with effective communication and user-centered design thinking.
          </p>
        </div>
      </motion.section>
    </div>
  )
}
