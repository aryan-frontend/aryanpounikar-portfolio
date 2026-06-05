import Link from 'next/link'
import React from 'react'

export default function Navbar({isOpen, setIsOpen}) {
  return (
    <nav className={`flex flex-col lg:flex-row gap-5 fixed top-16 ${isOpen ? 'left-0' : '-left-full' }  lg:static text-xl bg-red-600 lg:bg-transparent w-full lg:w-auto p-5 lg:p-0 duration-300 md:duration-0`}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/skills"}>Skills</Link>
        <Link href={"/contact"}>Contact</Link>
    </nav>
  )
}
