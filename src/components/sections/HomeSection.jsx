import Link from 'next/link'
import React from 'react'

export default function HomeSection() {
  return (
    <section id='home' className="text-center py-20 bg-black px-5 lg:px-10">
      <h1 className="lg:text-7xl text-5xl text-white font-bold mb-5 pt-15">Hi, I'm</h1>
      <h1 className="lg:text-7xl text-5xl font-bold gradient-text mb-10 gradient-text">
        Aryan Pounikar
      </h1>
      <h2 className="text-gray-200 text-3xl mb-10">Frontend Developer crafting modern UI</h2>
      <p className="text-gray-300 text-xl mb-5">Crafting beautiful digital experiences with modern web
        technologies</p>
      <div className="my-15 flex md:flex-row flex-col gap-10 items-center justify-center">
        <Link href="#project"
          className="gradient-bg px-7 py-2 rounded-3xl text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-transform duration-300 hover:scale-110 ">
          View My Work
        </Link>
        <Link href="#contact"
          className="border-2 border-gray-300 px-7 py-2 text-white font-bold rounded-3xl hover:bg-gray-900 hover:scale-110 transition-transform duration-300">
          Get In Touch
        </Link>
        <Link href="/AryanPounikar.pdf" download
          className="text-white font-bold border-2 px-7 py-2 rounded-3xl hover:scale-110 transition-transform duration-300">Download
          Resume</Link>
      </div>
    </section>
  )
}
