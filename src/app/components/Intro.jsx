import React from 'react'
import Button from './Button'
import ContactBtn from './ContactBtn'
import Tooltip from './ui/Tooltip'

export default function Intro() {
  return (
    <div className="bg-[#111111] w-full p-5 lg:p-8 rounded-2xl flex flex-col gap-5 justify-center items-center">
      <a href='tel:+923274059035'>

      <Button />
      </a>
      <div className="h-[200px] w-[180px] sm:h-[260px] sm:w-[230px] lg:h-[320px] lg:w-[280px] rounded-2xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1634595477722-7bc68dd410fd?q=80&w=764&auto=format&fit=crop"
          alt="Amna Majeed"
        />
      </div>
      <div className="text-center">
        <h2 className="text-[18px] lg:text-[22px] tracking-wider font-semibold">Amna Majeed</h2>
        <h1 className="tracking-wider text-sm lg:text-base text-[#c9f31d]">Full Stack Developer</h1>
        <p className="tracking-wider text-xs lg:text-sm mt-1 text-gray-400 leading-relaxed">
          Building complete web apps with modern JavaScript.
        </p>
      </div>
      <a href='tel:+923274059035'>
      <ContactBtn />
      </a>

      <Tooltip/>
      
    </div>
  )
}