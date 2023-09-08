import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="group dark:text-white flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-cyan-950/30  rounded-full outline-none transition-all focus:scale-110 hover:scale-110 dark:hover:bg-white/40 hover:bg-cyan-950/50 active:scale-105 dark:bg-white/20 "
      disabled={pending}
    >
      {pending ? (
        <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
        </>
      )}
    </button>
  )
}
export default SubmitButton
