import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { typewriterWords } from '@/lib/data'

const Typewriter = () => {
  const [text] = useTypewriter({
    words: typewriterWords,
    loop: true,
    delaySpeed: 1000,
  })
  return (
    <div className="pt-5">
      <h1>
        <span>I am {text}</span>
        <Cursor cursorColor="#14b8a6" />
      </h1>
    </div>
  )
}

export default Typewriter
