'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import Typewriter from './Typewriter'

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[80rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              ease: 'easeInOut',
              duration: 1,
            }}
          >
            <Image
              src="/images/profile-image.png"
              alt="Antonio's image"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-52 w-52 rounded-full object-cover border-[0.19rem]
            dark:border-white/30 border-cyan-950/30"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="flex justify-center">Hello, my name is Antonio.</span>
        <span className="flex justify-center">
          I am a front-end developer with foundational skills, eager to grow and
          seeking a full-time position.
        </span>
        <Typewriter />
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 transition border rounded-full outline-none dark:text-white group dark:bg-white/20 bg-cyan-950/20 border-cyan-950/20 dark:border-white/20 text-cyan-950 px-7 focus:scale-110 hover:scale-110 hover:bg-cyan-950/40 active:scale-105"
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="flex items-center gap-2 py-3 transition border rounded-full outline-none group dark:bg-white/20 bg-cyan-950/20 border-cyan-950/20 dark:border-white/20 text-cyan-950 dark:text-white px-7 focus:scale-110 hover:scale-110 hover:bg-cyan-950/40 active:scale-105"
          href="/CV.pdf"
          download
        >
          Download CV{' '}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </a>
        <div className="flex space-x-5">
          <a
            className="h-12 w-12 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition ease-in-out cursor-pointer rounded-xl bg-cyan-950/20 dark:bg-white/30"
            href="https://www.linkedin.com/in/antonio-gallardo-girela-383455231/"
            target="_blank"
          >
            <Image
              src={'/icons/linkedin-icon.png'}
              alt="logo"
              height={72}
              width={72}
            />
          </a>

          <a
            className="h-12 w-12 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition ease-in-out cursor-pointer bg-cyan-950/20 rounded-xl dark:bg-white/30"
            href="https://github.com/herrgallardo"
            target="_blank"
          >
            <Image
              src={'/icons/github-icon.png'}
              alt="logo"
              height={72}
              width={72}
            />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Intro
