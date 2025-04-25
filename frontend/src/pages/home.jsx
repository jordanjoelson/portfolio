import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import memoji1 from '../assets/memoji1.png'
import memoji2 from '../assets/memoji2.png'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import heroIMG from '../assets/heroIMG.png'
import MicroVaultCover from '../assets/MicroVault_Cover.png'
import GatewayCover from '../assets/Gateway_Cover.png'
import BurritoBondCover from '../assets/BurritoBond_Cover.png'
import CaseStudyCover from '../assets/CaseStudy_Cover.png'



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
<div className="w-full max-w-[1400px] mt-5 bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden p-6 md:p-10 flex flex-col relative">

  {/* Navbar */}
  <div className="-mt-5">
    <Navbar />
  </div>

  {/* Main Content with matching padding */}
  <div className="w-full flex flex-col lg:flex-row justify-center items-start px-4 md:px-10 mt-10 gap-10 lg:gap-20">
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
    <div>
      Co-founder of{' '}
      <a
        href="https://teckes.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Teckes
      </a>
    </div>
    <div className="mt-2">
      Current student at{' '}
      <a
        href="https://www.utdallas.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        UTD
      </a>
    </div>
  </div>

  {/* Looking for opportunities + Button (moved here) */}
  <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 bg-white rounded-[32px] px-4 md:px-6 py-3 md:py-4 mt-4">
    <div className="text-black text-base md:text-xl font-medium font-['Plus_Jakarta_Sans']">
      Looking for opportunities
    </div>
    <a
  href="https://www.linkedin.com/in/jordanjoelson/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#0369a1] text-white text-sm md:text-base font-medium rounded-[32px] px-5 md:px-6 py-2 hover:bg-[#df4c73] hover:text-white transition-colors duration-300 text-center"
>
  Connect
</a>




  </div>
</div>

    {/* Right Image Side */}
    <img
      src={heroIMG}
      alt="Hero"
      className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover rounded-[32px] mt-10 lg:mt-0"
    />
  </div> {/* <-- CLOSE Main Content Flex HERE */}

 

</div>





<div className="w-full flex flex-col lg:flex-row justify-center gap-10 mt-40 px-4">
  {/* Left Column */}
  <div className="flex flex-col gap-10 flex-grow max-w-full lg:max-w-[500px]">
    <div className="text-black text-4xl md:text-5xl font-semibold font-['Plus_Jakarta_Sans']">
      More about me
    </div>

    {/* About Me Card */}
    <Link to="/about" className="transform hover:rotate-2 transition-transform duration-300">
      <div className="bg-sky-100 rounded-[32px] outline outline-1 outline-slate-300 overflow-hidden p-6 max-w-[461px] w-full">
        <div className="text-black text-2xl md:text-3xl font-semibold mb-4">About me</div>
        <div className="text-black text-xl md:text-2xl font-normal leading-[40px] md:leading-[60px]">
          I’m a freshman at UTD passionate about the intersection of business and technology. I’ve always been curious about how things work and enjoy diving into new projects, learning as I go, and growing my skills through hands-on experience.
        </div>
      </div>
    </Link>

    {/* Connect Card */}
    <Link to="/about" className="transform hover:rotate-2 transition-transform duration-300">
      <div className="bg-sky-100 rounded-[32px] outline outline-1 outline-slate-300 overflow-hidden p-6 max-w-[461px] w-full">
        <div className="text-black text-2xl md:text-3xl font-semibold mb-4">Connect</div>
        <div className="text-black text-xl md:text-2xl font-normal leading-[40px] md:leading-[60px]">
          I enjoy meeting new people, whether it’s to chat casually, share ideas, or explore potential opportunities to work together. If you are interested in tech, business, or just want to say hi, I’m always open to connecting.
        </div>
      </div>
    </Link>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-10 flex-grow max-w-full lg:max-w-[500px]">
    {/* Interests Card */}
    <Link to="/about" className="transform hover:-rotate-2 transition-transform duration-300">
      <div className="bg-sky-100 rounded-[32px] outline outline-1 outline-slate-300 overflow-hidden p-6 max-w-[461px] w-full">
        <div className="text-black text-2xl md:text-3xl font-semibold mb-4">Interests</div>
        <div className="text-black text-xl md:text-2xl font-normal leading-[40px] md:leading-[60px]">
          I’m really into health, fitness, and design. You’ll often find me working out, bouldering, or exploring creative projects. Traveling and spending meaningful time with friends are also important parts of my life and keep me energized.
        </div>
      </div>
    </Link>

    {/* Journey Card */}
    <Link to="/about" className="transform hover:-rotate-2 transition-transform duration-300">
      <div className="bg-sky-100 rounded-[32px] outline outline-1 outline-slate-300 overflow-hidden p-6 max-w-[461px] w-full">
        <div className="text-black text-2xl md:text-3xl font-semibold mb-4">Journey</div>
        <div className="text-black text-xl md:text-2xl font-normal leading-[40px] md:leading-[60px]">
          I began with little programming experience but have been growing rapidly by taking on new challenges. I enjoy learning by doing, expanding my skills in both tech and business, and pushing myself outside of my comfort zone.
        </div>
      </div>
    </Link>

    {/* ...and more! Card */}
    <Link to="/about" className="transform hover:-rotate-2 transition-transform duration-300">
      <div className="bg-sky-100 rounded-[32px] outline outline-1 outline-slate-300 overflow-hidden p-6 max-w-[461px] w-full">
        <div className="text-black text-2xl md:text-3xl font-semibold mb-4">...and more!</div>
        <div className="text-black text-xl md:text-2xl font-normal">
          Explore all content →
        </div>
      </div>
    </Link>
  </div>
</div>




{/* Projects Section */}
<div className="w-full mt-40 px-4 md:px-10">
  <div className="max-w-[1400px] mx-auto mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-black text-3xl md:text-5xl font-semibold font-['Plus_Jakarta_Sans']">
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

  <div ref={scrollRef} className="overflow-x-scroll scrollbar-hide py-5">
    <div className="flex gap-6 md:gap-10 w-max pl-[50px] md:pl-[200px] pr-[50px] md:pr-[100px]">
      {/* MicroVault */}
      <a href="https://microvault.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div
          className="min-w-[280px] md:min-w-[600px] h-[200px] md:h-[400px] bg-cover bg-center rounded-[32px] transform transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${MicroVaultCover})` }}
        />
      </a>

      {/* Gateway */}
      <a href="https://devpost.com/software/gateway-f5ed10" target="_blank" rel="noopener noreferrer">
        <div
          className="min-w-[280px] md:min-w-[600px] h-[200px] md:h-[400px] bg-cover bg-center rounded-[32px] transform transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${GatewayCover})` }}
        />
      </a>

      {/* Burrito Bond */}
      <a href="https://burritobond.wixsite.com/burrito-bond" target="_blank" rel="noopener noreferrer">
        <div
          className="min-w-[280px] md:min-w-[600px] h-[200px] md:h-[400px] bg-cover bg-center rounded-[32px] transform transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${BurritoBondCover})` }}
        />
      </a>

      {/* Case Study */}
      <a href="https://www.canva.com/design/DAGkwsClkRA/pwD-mo8EC1ZYgs3HMzW-3g/edit?utm_content=DAGkwsClkRA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
        <div
          className="min-w-[280px] md:min-w-[600px] h-[200px] md:h-[400px] bg-cover bg-center rounded-[32px] transform transition-transform duration-300 hover:scale-105"
          style={{ backgroundImage: `url(${CaseStudyCover})` }}
        />
      </a>
    </div>
  </div>
</div>


            {/* Contact Section */}
      <div className="w-full max-w-[1400px] mt-40 mb-20 bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden p-10 flex justify-center items-center">
        <div className="flex flex-col sm:flex-row items-center gap-6 group cursor-pointer">
          {/* Memoji Images */}
          <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px]">
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
            {/* Peace Sign */}
            <div className="absolute z-10 text-[30px] md:text-[40px] opacity-0 group-hover:opacity-100 transition-none -rotate-[10deg]"
                style={{
                  bottom: '20%',  // Adjusted to center better on face
                  left: '20%',    // Adjusted to center better on face
                }}>
                ✌🏼
              </div>

          </div>
          {/* Text */}
          <div className="text-black text-3xl md:text-5xl font-semibold font-['Plus_Jakarta_Sans'] -ml-0 sm:-ml-5 text-center sm:text-left">
            get in touch
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
