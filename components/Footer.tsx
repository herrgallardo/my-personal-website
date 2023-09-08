const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-4 mb-10 text-center dark:text-white text-cyan-950">
      <small className="block mb-2 text-xs">
        &copy; {currentYear} Antonio. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}

export default Footer
