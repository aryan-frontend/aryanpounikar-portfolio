"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { IoMenu } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'

export default function Header() {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <header className='flex items-center justify-between bg-black text-white p-4 border-b border-gray-700 fixed top-0 w-full'>
        <Link href={"/"} className='text-2xl font-bold'>Portfolio</Link>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <button className='text-xl block lg:hidden' onClick={()=> setIsOpen(!isOpen)}>
          {
            isOpen ? <RxCross1/> :  <IoMenu/>
          }
        </button>
    </header>
  )
}
