import React from 'react'
import { RiHomeHeartLine } from "react-icons/ri"
import { RiCodeSSlashLine } from "react-icons/ri"
import { RiContactsBook3Line } from "react-icons/ri"
import { TfiWrite } from "react-icons/tfi"
import { GoProjectSymlink } from "react-icons/go"
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-[#1b1b1b] fixed z-[9999] text-white bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full lg:bottom-auto lg:left-auto lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:right-5 lg:px-4 lg:py-6'>
      <ul className='flex flex-row gap-7 text-2xl lg:flex-col lg:gap-9'>
        <Link href='#home'>
          <li title='Home' className='hover:text-[#c9f31d] cursor-pointer'>
            <RiHomeHeartLine />
          </li>
        </Link>
        <Link  href="#about">
          <li title='About' className='hover:text-[#c9f31d] cursor-pointer'>
            <TfiWrite />
          </li>
        </Link>
        <Link  href="#skills">
          <li title='Skills' className='hover:text-[#c9f31d] cursor-pointer'>
            <RiCodeSSlashLine />
          </li>
        </Link>
        <Link  href="#projects">
          <li title='Projects' className='hover:text-[#c9f31d] cursor-pointer'>
            <GoProjectSymlink />
          </li>
        </Link>
        <Link  href="#contact">
          <li title='Contact' className='hover:text-[#c9f31d] cursor-pointer'>
            <RiContactsBook3Line />
          </li>
        </Link>
      </ul>
    </nav>
  )
}