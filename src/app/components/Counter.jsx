import React from 'react'

export default function Counter() {
  return (
    <div className='flex flex-col lg:flex-row gap-5'>
        <div className='bg-[#111111b2] w-full lg:w-1/3 rounded-2xl p-5 lg:p-9 flex flex-col justify-center gap-3'>
            <p className='text-[40px] font-extrabold text-[#c9f31d]'>50+</p>
            <p>Projects Built</p>
        </div>
        <div className='bg-[#111111] w-full lg:w-1/3 rounded-2xl p-9 flex flex-col justify-center gap-3'>
            <p className='text-[40px] font-extrabold text-[#c9f31d]'>1+</p>
            <p>Years Experience</p>
        </div>
        <div className='bg-[#111111] w-full lg:w-1/3 rounded-2xl p-9 flex flex-col justify-center gap-3'>
            <p className='text-[40px] font-extrabold text-[#c9f31d]'>10+</p>
            <p>Technologies</p>
        </div>
    </div>
  )
}
