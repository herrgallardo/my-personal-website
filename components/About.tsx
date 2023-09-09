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
            Born with an innate fascination for languages and cultures, I
            embarked on a journey that led me to acquire a degree in Spanish and
            Linguistics from Lund University. My time at university provided me
            with a profound understanding of language structures, which later
            served as a foundation when I transitioned into the world of coding
            and web development.
          </p>
          <p className="my-5">
            My passion for understanding systems and structures naturally segued
            into a love for coding, allowing me to draw parallels between the
            intricacies of languages and the logic of programming. In pursuit of
            this newfound interest, I dedicated myself to a two-year program in
            Full-stack Development at Teknikhögskolan i Lund.
          </p>
          <p className="my-5">
            The experience broadened my horizons, equipping me with skills in
            JavaScript, TypeScript, React, Next.js, HTML, CSS, GraphQL, Git, and
            Jira. The challenges of coding never cease to captivate me, and the
            thrill of problem-solving in this domain has been deeply rewarding.
          </p>
          <p className="my-5">
            But my journey is not just limited to the confines of academics and
            programming. Over the years, I&apos;ve worn various hats, from
            diverse jobs in the cities of Granada and London to leading Spanish
            language sessions in Lund. My diverse work experiences, ranging from
            managerial roles in Spain to customer service in London, have
            ingrained in me a unique blend of soft skills and adaptability.
          </p>
          <p className="my-5">
            Whether managing a tavern in Granada or undertaking voluntary
            services in Eksjö, every experience has imparted lessons in
            collaboration, leadership, and resilience.
          </p>
          <p className="my-5">
            After successful internships and summer jobs in companies like Axis
            Communications and 24HR, and a decade-long tenure in the service
            industry, I am now eager to channel my passion for coding into a
            full-time front-end developer position. With a rich tapestry of
            experiences under my belt and a keen analytical mind sharpened by
            linguistic studies and coding challenges, I am excited to contribute
            to a team that values both technical prowess and a multidimensional
            perspective.
          </p>
        </div>
      </motion.section>
    </div>
  )
}
