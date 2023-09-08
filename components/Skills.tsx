'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { skills } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.75,
    },
  }),
}

const Skills = () => {
  const { ref } = useSectionInView('Skills')

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-cyan-950">
        {skills.map((skill, index) => (
          <motion.li
            className="px-5 py-3 bg-cyan-950/20 rounded-xl dark:bg-white/20 dark:text-white"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
          >
            <div className="flex items-center space-x-5">
              <div>{skill.name}</div>
              <div className="w-12 h-12">
                <Image src={skill.icon} alt="icon" height={72} width={72} />
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
