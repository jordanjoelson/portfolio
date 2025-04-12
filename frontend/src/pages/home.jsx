import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const container = document.getElementById('projects-scroll')

    const handleWheel = (e) => {
      if (e.deltaY === 0) return
      e.preventDefault()
      container.scrollLeft += e.deltaY
    }

    if (container) {
      container.addEventListener('wheel', handleWheel)
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <div className="min-h-screen pt-5 flex flex-col items-center">

      {/* Hero Section */}
      <div className="w-full max-w-[1400px] h-[1140px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden p-10">

        <div className="absolute left-[60px] top-[100px]">
          <div className="text-black text-3xl font-semibold font-['Plus_Jakarta_Sans'] mb-6">
            Hi, I'm Jordan, a product designer with a passion for 3D and AR/VR
          </div>

          <div className="text-black text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-[60px]">
            <div>Co-founder of Teckes <span className="underline">Duolingo</span></div>
            <div>Previously worked with <span className="underline">Meta</span>, <span className="underline">Google</span></div>
            <div>Graduated from <span className="underline">CMU↗</span>, <span className="underline">SAIC</span></div>
          </div>
        </div>

        <div className="w-96 h-[575px] left-[668px] top-[264px] absolute bg-white rounded-[32px]" />
        <div className="w-32 h-28 left-[60px] top-[754px] absolute bg-white rounded-[32px]" />
        <div className="left-[216px] top-[779px] absolute text-black text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-[60px]">
          Let’s chat
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
          <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[39px] top-[25px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              About me
            </div>
            <div className="w-96 h-96 left-[39px] top-[64px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
              Lorem ipsum dolor sit amet...
            </div>
          </div>

          {/* Connect Card */}
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
          {/* Interests Card */}
          <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[26px] top-[27px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              Interests
            </div>
            <div className="w-96 h-96 left-[26px] top-[66px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
              Lorem ipsum dolor sit amet...
            </div>
          </div>

          {/* Journey Card */}
          <div className="mt-20 w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[29px] top-[32px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              Journey
            </div>
            <div className="w-96 h-96 left-[29px] top-[71px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
              Lorem ipsum dolor sit amet...
            </div>
          </div>

          {/* And More Card */}
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

      {/* My Projects Section */}
      <div className="w-full mt-40 px-10">
        <div className="max-w-[1400px] mx-auto mb-10">
          <div className="w-96 h-14 text-black text-5xl font-semibold font-['Plus_Jakarta_Sans']">
            My projects →
          </div>
        </div>

        <div
          id="projects-scroll"
          className="overflow-x-scroll scrollbar-hide"
        >
          <div className="flex gap-10 w-max pl-[200px] pr-[100px]">
            {/* Left Overflow Cards */}
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />

            {/* Main Visible Cards */}
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
            <div className="w-[600px] h-[500px] bg-sky-100 rounded-[32px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
