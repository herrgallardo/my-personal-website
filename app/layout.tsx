import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextProvider from '@/context/ThemeContext'
import { Toaster } from 'react-hot-toast'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Antonio Gallardo | Personal Website',
  description: 'Antonio Gallardo is a front-end developer',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} font-medium dark:font-normal bg-cyan-600/10 text-cyan-950 relative pt-28 sm:pt-36 dark:bg-cyan-950 dark:text-white dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
export default RootLayout
