import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Home = () => {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -400,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 400,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="min-h-screen pt-5 flex flex-col items-center">
   {/* Hero Section */}
<div className="w-full max-w-[1400px] h-[1140px] mt-10 bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden p-10 flex justify-between items-start relative">

{/* Left Text Side */}
<div className="flex flex-col justify-between h-[800px] max-w-[600px]">
  <div>
  <div className="text-black text-5xl font-semibold font-['Plus_Jakarta_Sans'] flex items-center gap-2">
  Hi I'm Jordan
  <span className="relative inline-block group w-[50px] h-[50px]">
    
    {/* Peace Sign */}
    <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:rotate-90 group-hover:opacity-0">
      ✌🏼
    </span>
    
    {/* DTX */}
    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 text-xl font-bold rotate-0">
      DTX
    </span>
  </span>
</div>

    <div className="mt-6 text-black text-3xl font-medium font-['Plus_Jakarta_Sans']">
      A passionate full stack developer
    </div>

    <div className="mt-10 text-black text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-[60px]">
      <div>Co-founder of Teckes</div>
      <div>Current student at <span className="underline">UTD</span></div>
    </div>
  </div>

  <div className="text-black text-2xl font-medium font-['Plus_Jakarta_Sans']">
    Looking for opportunities
  </div>
</div>

{/* Right Image Side */}
<div className="w-[600px] h-[800px] bg-white rounded-[32px]" />
</div>



      {/* More About Me Section */}
      <div className="w-full flex justify-center gap-20 mt-40">
        {/* Left Column */}
        <div className="flex flex-col gap-20">
          <div className="w-96 h-36 text-black text-5xl font-semibold font-['Plus_Jakarta_Sans']">
            More about me
          </div>
          <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[39px] top-[25px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              About me
            </div>
            <div className="w-96 h-96 left-[39px] top-[64px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
              Lorem ipsum dolor sit amet...
            </div>
          </div>
          <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[38px] top-[36px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              Connect
            </div>
            <div className="w-96 h-96 left-[38px] top-[75px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
              Lorem ipsum dolor sit amet...
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[26px] top-[27px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              Interests
            </div>
            <div className="w-96 h-96 left-[26px] top-[66px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
              Lorem ipsum dolor sit amet...
            </div>
          </div>
          <div className="mt-20 w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[29px] top-[32px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              Journey
            </div>
            <div className="w-96 h-96 left-[29px] top-[71px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
              Lorem ipsum dolor sit amet...
            </div>
          </div>
          <div className="mt-20 w-[461px] h-72 relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[25px] top-[28px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              ...and more!
            </div>
            <div className="left-[130px] top-[207px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans']">
              Explore all content →
            </div>
            <div className="w-80 h-16 left-[67px] top-[191px] absolute bg-Color-2" />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full mt-40 px-10">
        <div className="max-w-[1400px] mx-auto mb-10 flex justify-between items-center">
          <div className="w-96 h-14 text-black text-5xl font-semibold font-['Plus_Jakarta_Sans']">
            My projects →
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={scrollRight}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-scroll scrollbar-hide"
        >
          <div className="flex gap-10 w-max pl-[200px] pr-[100px]">
            {/* Cards */}
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
          </div>
        </div>
      </div>
          
          {/* Contact Section */}
          <div className="w-full max-w-[1400px] h-[300px] mt-40 mb-20 bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden p-10 flex items-center justify-center gap-10">

          {/* Blank Image Placeholder */}
          <div className="w-[100px] h-[100px] bg-white rounded-[16px]" />

          {/* Text */}
          <div className="text-black text-5xl font-semibold font-['Plus_Jakarta_Sans']">
            Get in touch
          </div>

          </div>




    </div>
  )
}

export default Home
