// components/Loader.js
'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    // Start fade out after 2.5s
    const fadeTimer = setTimeout(() => setFading(true), 2500)
    // Fully remove from DOM after fade completes (0.8s)
    const removeTimer = setTimeout(() => setGone(true), 3300)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (gone) return null

  return (
    <>
      <div
        className="loader-wrapper"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <div className="socket">
          <div className="gel center-gel"><div className="circle" /></div>
          <div className="gel c1 r1"><div className="circle" /></div>
          <div className="gel c2 r1"><div className="circle" /></div>
          <div className="gel c3 r1"><div className="circle" /></div>
          <div className="gel c4 r1"><div className="circle" /></div>
          <div className="gel c5 r1"><div className="circle" /></div>
          <div className="gel c6 r1"><div className="circle" /></div>
          <div className="gel c7 r2"><div className="circle" /></div>
          <div className="gel c8 r2"><div className="circle" /></div>
          <div className="gel c9 r2"><div className="circle" /></div>
          <div className="gel c10 r2"><div className="circle" /></div>
          <div className="gel c11 r2"><div className="circle" /></div>
          <div className="gel c12 r2"><div className="circle" /></div>
          <div className="gel c13 r2"><div className="circle" /></div>
          <div className="gel c14 r2"><div className="circle" /></div>
          <div className="gel c15 r2"><div className="circle" /></div>
          <div className="gel c16 r2"><div className="circle" /></div>
          <div className="gel c17 r2"><div className="circle" /></div>
          <div className="gel c18 r2"><div className="circle" /></div>
          <div className="gel c19 r3"><div className="circle" /></div>
          <div className="gel c20 r3"><div className="circle" /></div>
          <div className="gel c21 r3"><div className="circle" /></div>
          <div className="gel c22 r3"><div className="circle" /></div>
          <div className="gel c23 r3"><div className="circle" /></div>
          <div className="gel c24 r3"><div className="circle" /></div>
          <div className="gel c25 r3"><div className="circle" /></div>
          <div className="gel c26 r3"><div className="circle" /></div>
          <div className="gel c28 r3"><div className="circle" /></div>
          <div className="gel c29 r3"><div className="circle" /></div>
          <div className="gel c30 r3"><div className="circle" /></div>
          <div className="gel c31 r3"><div className="circle" /></div>
          <div className="gel c32 r3"><div className="circle" /></div>
          <div className="gel c33 r3"><div className="circle" /></div>
          <div className="gel c34 r3"><div className="circle" /></div>
          <div className="gel c35 r3"><div className="circle" /></div>
          <div className="gel c36 r3"><div className="circle" /></div>
          <div className="gel c37 r3"><div className="circle" /></div>
        </div>
      </div>

      <style>{`
        .loader-wrapper {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.8s ease, transform 0.8s ease;
          transform: ${fading ? 'scale(1.05)' : 'scale(1)'};
        }

        .socket {
          width: 300px;
          height: 300px;
          position: relative;
        }

        .circle {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          animation: fade00 2s infinite;
        }

        .gel {
          height: 45px;
          width: 45px;
          position: absolute;
          top: 50%;
          left: 50%;
          transition: all 0.3s;
        }

        .center-gel {
          margin-left: -22px;
          margin-top: -22px;
          animation: pulse00 2s infinite;
        }

        /* Ring 1 positions — scaled 1.5x from original */
        .c1  { margin-left: -70px; margin-top: -22px; }
        .c2  { margin-left: -46px; margin-top: -64px; }
        .c3  { margin-left:   2px; margin-top: -64px; }
        .c4  { margin-left:  26px; margin-top: -22px; }
        .c5  { margin-left: -46px; margin-top:  20px; }
        .c6  { margin-left:   2px; margin-top:  20px; }

        /* Ring 2 positions */
        .c7  { margin-left: -94px;  margin-top: -64px; }
        .c8  { margin-left:  50px;  margin-top: -64px; }
        .c9  { margin-left: -22px;  margin-top:  62px; }
        .c10 { margin-left: -94px;  margin-top:  20px; }
        .c11 { margin-left:  50px;  margin-top:  20px; }
        .c12 { margin-left: -22px;  margin-top:-106px; }
        .c13 { margin-left: -70px;  margin-top:-106px; }
        .c14 { margin-left:  26px;  margin-top:-106px; }
        .c15 { margin-left: -70px;  margin-top:  62px; }
        .c16 { margin-left:  26px;  margin-top:  62px; }
        .c17 { margin-left:-118px;  margin-top: -22px; }
        .c18 { margin-left:  74px;  margin-top: -22px; }

        /* Ring 3 positions */
        .c19 { margin-left: -94px;  margin-top:-148px; }
        .c20 { margin-left:  50px;  margin-top:-148px; }
        .c21 { margin-left:   2px;  margin-top:-148px; }
        .c22 { margin-left: -46px;  margin-top:-148px; }
        .c23 { margin-left: -94px;  margin-top: 104px; }
        .c24 { margin-left:  50px;  margin-top: 104px; }
        .c25 { margin-left:   2px;  margin-top: 104px; }
        .c26 { margin-left: -46px;  margin-top: 104px; }
        .c28 { margin-left:-142px;  margin-top: -64px; }
        .c29 { margin-left:-142px;  margin-top:  20px; }
        .c30 { margin-left:  74px;  margin-top:  62px; }
        .c31 { margin-left:-118px;  margin-top:-106px; }
        .c32 { margin-left:-166px;  margin-top: -22px; }
        .c33 { margin-left:  98px;  margin-top: -64px; }
        .c34 { margin-left:  98px;  margin-top:  20px; }
        .c35 { margin-left:-118px;  margin-top:  62px; }
        .c36 { margin-left:  74px;  margin-top:-106px; }
        .c37 { margin-left: 122px;  margin-top: -22px; }

        /* Animation delays */
        .r1, .r1 > .circle { animation-delay: 0.2s; }
        .r2, .r2 > .circle { animation-delay: 0.4s; }
        .r3, .r3 > .circle { animation-delay: 0.6s; }

        .r1 { animation: pulse00 2s 0.2s infinite; }
        .r2 { animation: pulse00 2s 0.4s infinite; }
        .r3 { animation: pulse00 2s 0.6s infinite; }

        .r1 > .circle { animation: fade00 2s 0.2s infinite; }
        .r2 > .circle { animation: fade00 2s 0.4s infinite; }
        .r3 > .circle { animation: fade00 2s 0.6s infinite; }

        @keyframes pulse00 {
          0%   { transform: scale(1); }
          50%  { transform: scale(0.01); }
          100% { transform: scale(1); }
        }

        @keyframes fade00 {
          0%   { background: #c9f31d; box-shadow: 0 0 10px #c9f31d, 0 0 30px #c9f31d; }
          50%  { background: #6a8010; box-shadow: none; }
          100% { background: #c9f31d; box-shadow: 0 0 10px #c9f31d, 0 0 30px #c9f31d; }
        }
      `}</style>
    </>
  )
}