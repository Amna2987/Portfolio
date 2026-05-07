import React from 'react'
import ScrollVelocity from './ui/ScrollVelocity'

export default function Footer() {
    return (
        <div className='bg-[#c9f31d] rounded-2xl w-full py-4 flex flex-col gap-3 px-2 items-center'>
            <div className="w-full h-[60px] overflow-hidden flex items-center">
                <ScrollVelocity
                    texts={["Let's Build Something Together ✦ Call Now"]}
                    velocity={100}
                    className="custom-scroll-text"
                    numCopies={6}
                    damping={50}
                    stiffness={400}
                />
            </div>
            <p className='text-black/50 text-center text-md mt-2 max-w-2xl'>
                I'm open to freelance projects, full-time roles, or just a chat. Feel free to reach out — I respond quickly!
            </p>
            <ul className='flex flex-col sm:flex-row flex-wrap justify-center gap-2 text-black text-md sm:text-md font-semibold'>
                <a className="hover:text-[#c9f31d] transition" href='mailto:amnamajeed2987@gmail.com' aria-label="Email" target='_blank'>
                    <li>
                        Email:amnamajeed2987@gmail.com
                    </li>
                </a>
                <a className="hover:text-[#c9f31d] transition" href='tel:+923274059035' aria-label="Tel" target='_blank'>
                    <li>
                        Call:+923274059035
                    </li>
                </a>
                <a className="hover:text-[#c9f31d] transition" href='https://github.com/amna2987' aria-label="Github" target='_blank'>
                    <li>
                        Github: https://github.com/amna2987
                    </li>
                </a>
            </ul>
        </div>
    )
}
