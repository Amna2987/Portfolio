'use client'

import React from 'react'
import ScrambledText from './ui/ScrambledText'
import TextType from './ui/TextType'
import ContactBtn from './ContactBtn'

export default function Hero() {
    return (
        <div className='h-auto flex flex-col gap-8 bg-[#111111b2] p-5 lg:p-10'>
            <TextType className='lg:text-[50px] text-[32px] !whitespace-normal !inline w-full'
                text={["Welcome, Good to see you!", "Let's Build some amazing experiences!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                texts={["Welcome! Good to see you!", "Let's Build some amazing experiences!"]}
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
            />

            <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
            >
                My passion lies in crafting elegant, straightforward digital experiences.
                It's a love for simplicity, pure and simple
            </ScrambledText>
            <div className='w-full lg:w-[30%]'>
                <a href='tel:+923274059035'>

            <ContactBtn/>
                </a>

            </div>
        </div>
    )
}
