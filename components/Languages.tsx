'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { languages } from '@/lib/data'
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
      duration: 1.5,
    },
  }),
}

const Languages = () => {
  const { ref } = useSectionInView('Languages')

  return (
    <section
      id="languages"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Languages I speak</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {languages.map((language, index) => (
          <motion.li
            className="px-5 py-3 bg-cyan-950/20 rounded-xl dark:bg-white/10 dark:text-white"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
          >
            <div>
              <div className="flex items-center pb-3 space-x-5">
                <div>{language.name}</div>
                <div className="w-8 h-8">
                  <Image
                    src={language.icon}
                    alt="icon"
                    height={72}
                    width={72}
                  />
                </div>
              </div>
              <div className="text-xs">{language.level}</div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Languages
