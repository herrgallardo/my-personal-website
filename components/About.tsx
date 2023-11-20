'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

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
            Born with a deep interest in languages and cultures, I completed a
            degree in Spanish and Linguistics at Lund University. This education
            gave me an understanding of language structures, which later helped
            me transition into coding and web development. I pursued a
            Full-stack Development program at Teknikhögskolan i Lund, developing
            skills in JavaScript, TypeScript, React, Next.js, HTML, CSS,
            GraphQL, Git, and Jira.
          </p>
          <p className="my-5">
            My journey has been diverse, with work experiences in Granada,
            London, and Lund, including managerial roles and customer service.
            I&apos;ve also held positions such as a Spanish language instructor
            and have extensive experience in the service industry. These roles
            have equipped me with collaboration, leadership, and resilience
            skills.
          </p>
          <p className="my-5">
            After internships and jobs at Axis Communications and 24HR, I am now
            looking for a full-time front-end developer role. I bring a unique
            blend of linguistic knowledge, coding skills, and a wide range of
            soft skills, eager to contribute to a team that values technical
            ability and diverse experiences.
          </p>
        </div>
      </motion.section>
    </div>
  )
}
