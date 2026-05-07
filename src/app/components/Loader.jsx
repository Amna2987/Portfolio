'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2500)
    const removeTimer = setTimeout(() => setGone(true), 3800)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (gone) return null

  const letters = ['S','t','a','y','\u00A0','T','u','n','e','d']

  return (
    <>
      {/* LEFT curtain panel */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '50%',
        height: '100%',
        background: '#000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        transition: 'transform 1s cubic-bezier(0.76, 0, 0.24, 1)',
        transform: fading ? 'translateX(-100%)' : 'translateX(0)',
      }} />

      {/* RIGHT curtain panel */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        background: '#000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        transition: 'transform 1s cubic-bezier(0.76, 0, 0.24, 1)',
        transform: fading ? 'translateX(100%)' : 'translateX(0)',
      }} />

      {/* Loader text — sits above both panels in center */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
        opacity: fading ? 0 : 1,
      }}>
        <div className="loader-wrapper">
          {letters.map((letter, i) => (
            <span
              key={i}
              className="loader-letter"
              style={{ animationDelay: `${0.1 + i * 0.105}s` }}
            >
              {letter}
            </span>
          ))}
          <div className="loader-bar" />
        </div>
      </div>

      <style>{`
        .loader-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
          width: auto;
          margin: 2rem;
          font-family: "Poppins", sans-serif;
          font-size: 1.6em;
          font-weight: 600;
          user-select: none;
          color: #fff;
          scale: 2;
        }

        .loader-bar {
          position: absolute;
          top: 0; left: 0;
          height: 100%; width: 100%;
          z-index: 1;
          background-color: transparent;
          mask: repeating-linear-gradient(
            90deg,
            transparent 0, transparent 6px,
            black 7px, black 8px
          );
        }

        .loader-bar::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image:
            radial-gradient(circle at 50% 50%, #c9f31d 0%, transparent 50%),
            radial-gradient(circle at 45% 45%, #c9f31d 0%, transparent 45%),
            radial-gradient(circle at 55% 55%, #c9f31d 0%, transparent 45%),
            radial-gradient(circle at 45% 55%, #c9f31d 0%, transparent 45%),
            radial-gradient(circle at 55% 45%, #c9f31d 0%, transparent 45%);
          mask: radial-gradient(
            circle at 50% 50%,
            transparent 0%, transparent 10%, black 25%
          );
          animation: bar-move 2s infinite alternate, bar-fade 4s infinite;
          animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
        }

        @keyframes bar-move {
          0%   { transform: translate(-55%); }
          100% { transform: translate(55%); }
        }
        @keyframes bar-fade {
          0%, 100% { opacity: 0; }
          15%       { opacity: 1; }
          65%       { opacity: 0; }
        }

        .loader-letter {
          display: inline-block;
          opacity: 0;
          z-index: 2;
          animation: letter-pop 4s infinite linear;
        }

        @keyframes letter-pop {
          0%   { opacity: 0; transform: scale(1) translateY(0); }
          5%   {
            opacity: 1;
            text-shadow: 0 0 8px #c9f31d, 0 0 20px rgba(201,243,29,0.5);
            transform: scale(1.1) translateY(-2px);
            color: #c9f31d;
          }
          20%  { opacity: 0.2; color: #fff; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  )
}