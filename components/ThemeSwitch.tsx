'use client'

import { useTheme } from '@/context/ThemeContext'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="fixed bottom-5 right-5 bg-cyan-950/20 w-[3rem] h-[3rem] 
      backdrop-blur-[0.5rem] shadow-2xl 
      rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-white/20"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ThemeSwitch
