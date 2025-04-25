import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import memoji1 from '../assets/memoji1.png'
import memoji2 from '../assets/memoji2.png'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


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
<div className="w-full max-w-[1400px] mt-5 bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden py-6 md:py-10 flex flex-col relative">

  {/* Navbar */}
  <div className="-mt-5">
    <Navbar />
  </div>

  {/* Main Content with matching padding */}
  <div className="w-full flex flex-col lg:flex-row justify-between items-center px-4 md:px-10 mt-10">
    {/* Left Text Side */}
    <div className="flex flex-col gap-6 max-w-[600px] text-center lg:text-left">
      <div className="text-black text-2xl md:text-4xl font-semibold font-['Plus_Jakarta_Sans'] flex justify-center lg:justify-start items-center gap-2">
        Hi I'm Jordan
        <span className="relative inline-block group w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
          {/* Peace Sign */}
          <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:rotate-[90deg] group-hover:opacity-0">
            ✌🏼
          </span>
          {/* DTX */}
          <span className="absolute inset-0 flex items-center justify-center opacity-0 rotate-[-90deg] group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 text-sm md:text-xl font-bold">
            DTX
          </span>
        </span>
      </div>

      <div className="text-black text-lg md:text-2xl font-medium font-['Plus_Jakarta_Sans']">
        A passionate full stack developer
      </div>

      <div className="text-black text-base md:text-xl font-medium font-['Plus_Jakarta_Sans'] leading-relaxed">
        <div>Co-founder of Teckes</div>
        <div>Current student at <span className="underline">UTD</span></div>
      </div>
    </div>

    {/* Right Image Side */}
    <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-white rounded-[32px] mt-10 lg:mt-0" />
  </div>

  {/* Looking for Opportunities + Button */}
  <div className="w-full flex justify-center items-center px-4 md:px-10 mt-10">
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-[32px] px-4 md:px-6 py-3 md:py-4">
      <div className="text-black text-base md:text-xl font-medium font-['Plus_Jakarta_Sans']">
        Looking for opportunities
      </div>
      <button className="bg-black text-white text-sm md:text-base font-medium rounded-[32px] px-5 md:px-6 py-2">
        Connect
      </button>
    </div>
  </div>
</div>




      {/* More About Me Section */}
<div className="w-full flex justify-center gap-20 mt-40">
  {/* Left Column */}
  <div className="flex flex-col gap-20">
    <div className="w-96 h-36 text-black text-5xl font-semibold font-['Plus_Jakarta_Sans']">
      More about me
    </div>

    {/* About Me Card */}
    <Link to="/about" className="transform hover:rotate-2 transition-transform duration-300">
      <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
        <div className="left-[39px] top-[25px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
          About me
        </div>
        <div className="w-96 h-96 left-[39px] top-[64px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
          I’m a freshman at UTD passionate about the intersection of business and technology. I’ve always been curious about how things work and enjoy diving into new projects, learning as I go, and growing my skills through hands-on experience.
        </div>
      </div>
    </Link>

    {/* Connect Card */}
    <Link to="/about" className="transform hover:rotate-2 transition-transform duration-300">
      <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
        <div className="left-[38px] top-[36px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
          Connect
        </div>
        <div className="w-96 h-96 left-[38px] top-[75px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
          I enjoy meeting new people, whether it’s to chat casually, share ideas, or explore potential opportunities to work together. If you are interested in tech, business, or just want to say hi, I’m always open to connecting.
        </div>
      </div>
    </Link>
  </div>

  {/* Right Column */}
  <div className="flex flex-col">
    {/* Interests Card */}
    <Link to="/about" className="transform hover:-rotate-2 transition-transform duration-300">
      <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
        <div className="left-[26px] top-[27px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
          Interests
        </div>
        <div className="w-96 h-96 left-[26px] top-[66px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
          I’m really into health, fitness, and design. You’ll often find me working out, bouldering, or exploring creative projects. Traveling and spending meaningful time with friends are also important parts of my life and keep me energized.
        </div>
      </div>
    </Link>

    {/* Journey Card */}
    <Link to="/about" className="transform hover:-rotate-2 transition-transform duration-300 mt-20">
      <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
        <div className="left-[29px] top-[32px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
          Journey
        </div>
        <div className="w-96 h-96 left-[29px] top-[71px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
          I began with little programming experience but have been growing rapidly by taking on new challenges. I enjoy learning by doing, expanding my skills in both tech and business, and pushing myself outside of my comfort zone.
        </div>
      </div>
    </Link>

    {/* ...and more! Card */}
    <Link to="/about" className="transform hover:-rotate-2 transition-transform duration-300 mt-20">
      <div className="w-[461px] h-72 relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
        <div className="left-[25px] top-[28px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
          ...and more!
        </div>
        <div className="left-[130px] top-[207px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans']">
          Explore all content →
        </div>
        <div className="w-80 h-16 left-[67px] top-[191px] absolute bg-Color-2" />
      </div>
    </Link>
  </div>
</div>



      {/* Projects Section */}
      <div className="w-full mt-40 px-10">
        <div className="max-w-[1400px] mx-auto mb-10 flex justify-between items-center">
          <div className="w-96 h-14 text-black text-5xl font-semibold font-['Plus_Jakarta_Sans']">
            My projects →
          </div>
          <div className="flex gap-4">
            <button onClick={scrollLeft}>
              <ChevronLeft size={32} />
            </button>
            <button onClick={scrollRight}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="overflow-x-scroll scrollbar-hide">
          <div className="flex gap-10 w-max pl-[200px] pr-[100px]">
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-[1400px] mt-40 mb-20 bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden p-10 flex justify-center items-center">
        <div className="flex items-center group cursor-pointer">
          <div className="relative w-[180px] h-[180px]">
            <img
              src={memoji2}
              alt="Memoji Hover"
              className="w-full h-full rounded-[16px] object-cover -rotate-[10deg] opacity-0 group-hover:opacity-100 absolute inset-0"
            />
            <img
              src={memoji1}
              alt="Memoji"
              className="w-full h-full rounded-[16px] object-cover -rotate-[10deg] group-hover:opacity-0 transition-none"
            />
            <div className="absolute bottom-10 left-10 text-[40px] opacity-0 group-hover:opacity-100 transition-none z-10 -rotate-[10deg]">
              ✌🏼
            </div>
          </div>
          <div className="text-black text-5xl font-semibold font-['Plus_Jakarta_Sans'] -ml-5">
            get in touch
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
