import About from '@/components/About'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'
import Languages from '@/components/Languages'
import Skills from '@/components/Skills'

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <Contact />
    </main>
  )
}

export default Home
