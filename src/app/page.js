import Image from "next/image";
import DotGrid from "./components/ui/DotGrid";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Counter from "./components/Counter";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden">
      <Loader/>
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={16}
          gap={32}
          baseColor="#141313"
          activeColor="#c9f31d"
          proximity={150}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <Navbar />

      <div className="relative z-10 flex w-full lg:h-screen lg:overflow-hidden">

        {/* LEFT */}
        <div className="hidden lg:flex w-[35%] shrink-0 h-screen flex-col justify-center p-10">
          <Intro />
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[65%] lg:h-screen lg:overflow-y-auto flex flex-col gap-20 pt-10 lg:pt-[150px] px-4 sm:px-6 lg:p-10">
          <div className="flex lg:hidden flex-col items-center">
            <Intro />
          </div>

          <section id="home"><Hero /></section>
          <Counter />
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Footer /></section>
        </div>

      </div>
    </div>
  )
}
