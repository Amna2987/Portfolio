'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [text, setText] = useState('')
  const message = "Oops! This page doesn't exist."

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(message.slice(0, i + 1))
      i++
      if (i === message.length) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">

        {/* Glowing background blob */}
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,243,29,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* 404 big text */}
        <h1
          className="font-black leading-none select-none"
          style={{
            fontSize: 'clamp(120px, 25vw, 220px)',
            color: 'transparent',
            WebkitTextStroke: '2px #c9f31d',
            textShadow: '0 0 40px rgba(201,243,29,0.2)',
            letterSpacing: '-4px',
            lineHeight: 1,
          }}
        >
          404
        </h1>

        {/* Divider line */}
        <div style={{
          width: '60px',
          height: '2px',
          background: '#c9f31d',
          boxShadow: '0 0 12px #c9f31d',
          margin: '24px 0',
          borderRadius: '2px',
        }} />

        {/* Typewriter message */}
        <p
          className="text-center mb-2"
          style={{
            fontFamily: 'monospace',
            fontSize: 'clamp(14px, 3vw, 20px)',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.05em',
          }}
        >
          <span style={{ color: '#c9f31d' }}>&gt; </span>
          {text}
          <span style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            background: '#c9f31d',
            marginLeft: '4px',
            verticalAlign: 'middle',
            animation: 'blink 1s infinite',
          }} />
        </p>

        {/* Back home button */}
        <Link href="/" style={{
          display: 'inline-block',
          border: '1px solid #c9f31d',
          color: '#fff',
          padding: '12px 36px',
          borderRadius: '999px',
          fontFamily: 'monospace',
          fontSize: '13px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 15px rgba(201,243,29,0.2)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#c9f31d'
          e.currentTarget.style.color = '#000'
          e.currentTarget.style.boxShadow = '0 0 30px rgba(201,243,29,0.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = '#fff'
          e.currentTarget.style.boxShadow = '0 0 15px rgba(201,243,29,0.2)'
        }}
        >
          ← Back to Home
        </Link>

        {/* Corner decoration */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          amna majeed · portfolio
        </div>

      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  )
}