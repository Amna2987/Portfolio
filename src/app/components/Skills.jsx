'use client'

import Image from 'next/image';
import React, { useCallback, useState } from 'react'
// import Next from '@/'
// import Express from '@/images'
// import Git from '@/images'
// import JWT from '@/images'

export default function Skills() {
  const [hover, setHover] = useState(null);
  const [clicked, setClicked] = useState(0)

  const styles = {
    button: {
      padding: "5px",
      borderRadius: "25px",
      border: "1px solid #c9f31d",
      background: "#0a0a0a",
      color: hover ? "#c9f31d" : "#ffffff",
      fontSize: "14px",
      letterSpacing: "0.025em",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: hover
        ? "0 0 6px #c9f31d, 0 0 20px rgba(201,243,29,0.4)"
        : "none",
      transform: hover ? "scale(1.03)" : "scale(1)",
    },
  };


  const techStacks = [
    {
      name: "Core Stack",
      img: ["/JavaScript.png", "/React.png", "/MongoDB.png", "/NextJs.png", "/NestJs.png", "/Node.js.png",],
    },
    {
      name: "Frontend",
      img: ["/HTML.png", "/CSS.png", "/Bootstrap.png"],
    },
    {
      name: "Backend",
      img: ["/JWT.png", "/Rest Api.png"],
    },
    {
      name: "Tools",
      img: ["/Github.png", "/Git.png"],
    },
    {
      name: "CMS",
      img: ["/Wordpress.png"],
    },
  ];

  const handleClick = useCallback((indx) => {
    // console.log(indx);

    if (clicked == indx) {
      setClicked(null)
    }
    else {
      setClicked(indx)
    }
  }, [clicked])

  return (
    <div className='h-auto flex flex-col gap-8 bg-[#111111b2] p-10'>
      <h2 className='text-[32px] lg:text-[50px]'>My Tech Stack</h2>
      {/* <p className='text-[18px] tracking-wider'>I'm a Full Stack Web Developer based in Lahore, Pakistan, with hands-on experience building complete web applications using modern JavaScript technologies.</p> */}

      <div className="flex w-full flex-col gap-5">
        {
          techStacks.map((tech, idx) => (
            <div onClick={() => handleClick(idx)}  className="bg-black cursor-pointer gap-5 p-4 rounded-2xl flex flex-col items-center justify-between mb-3" key={idx}>

              <div className='flex gap-3'>
                <button className="text-2xl">{clicked === idx ? '+' : '-'}</button>
                <h1 onClick={() => handleClick(idx)} className="text-2xl cursor-pointer flex items-center gap-3 font-semibold text-white">
                  {tech.name}
                </h1>

              </div>
              <div className='flex flex-wrap gap-4 justify-center'>

                {clicked === idx &&

                  tech.img.map((img, i) => (
                    <button
                      key={i}
                      // style={styles.button}
                      style={{
                        ...styles.button,
                        color: hover === i ? "#c9f31d" : "#fff",
                        boxShadow:
                          hover === i
                            ? "0 0 6px #c9f31d, 0 0 20px rgba(201,243,29,0.4)"
                            : "none",
                      }}
                      className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] flex items-center justify-center"

                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <Image
                        src={img}
                        alt="tech"
                        width={75}
                        height={75}
                      />
                    </button>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
