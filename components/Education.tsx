'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { education } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'

const Education = () => {
  const { ref } = useSectionInView('Education')
  const { theme } = useTheme()

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My academic qualifications</SectionHeading>
      <VerticalTimeline lineColor="">
        {education.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light'
                    ? 'rgba(8, 47, 73, 0.1)'
                    : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                color:
                  theme === 'light'
                    ? 'rgba(8, 47, 73, 1)'
                    : 'rgba(255, 255, 255, 1)',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <div className="flex items-center space-x-3 ">
                <Image
                  className="px-2 py-2 rounded dark:bg-white/20 bg-cyan-950/20"
                  src={item.image}
                  alt="logo"
                  height={72}
                  width={72}
                />
                <p className="font-normal !mt-0">{item.location}</p>
              </div>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Education
