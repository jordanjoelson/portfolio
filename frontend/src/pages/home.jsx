const Home = () => {
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
      <div className="w-full flex flex-col items-center gap-20 mt-40">
        <div className="w-96 h-36 text-black text-5xl font-semibold font-['Plus_Jakarta_Sans']">
          More about me
        </div>

        <div className="flex flex-wrap justify-center gap-20">
          {/* About Me Card */}
          <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[39px] top-[25px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              About me
            </div>
            <div className="w-96 h-96 left-[39px] top-[64px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>

          {/* Interests Card */}
          <div className="w-[461px] h-[556px] relative bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden">
            <div className="left-[26px] top-[27px] absolute text-black text-3xl font-semibold font-['Plus_Jakarta_Sans']">
              Interests
            </div>
            <div className="w-96 h-96 left-[26px] top-[66px] absolute text-black text-2xl font-normal font-['Plus_Jakarta_Sans'] leading-[60px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
