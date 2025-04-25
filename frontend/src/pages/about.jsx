import Navbar from '../components/Navbar.jsx'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-5">

      {/* Hero-style Container */}
      <div className="w-full max-w-[1400px] mt-5 bg-sky-100 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-slate-300 overflow-hidden p-6 md:p-10 flex flex-col relative">

        {/* Navbar Inside Hero */}
        <div className="-mt-5">
          <Navbar />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center mt-10 md:mt-20 px-4 md:px-10">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 md:mb-10 font-['Plus_Jakarta_Sans'] text-center">
            About Me
          </h1>
          <p className="text-lg md:text-2xl text-black font-normal font-['Plus_Jakarta_Sans'] leading-relaxed md:leading-[50px] max-w-full md:max-w-[1000px] text-center">
            My name is Jordan Joelson, and I am a student, a builder, and someone who is always curious about the world around me. I am currently a freshman studying computer science at the University of Texas at Dallas, exploring the exciting space where business and technology come together. Whether I am coding a new project, working on design ideas, or learning about emerging technologies, I enjoy bringing concepts to life and seeing where they can lead.
            <br /><br />
            Outside of academics and tech, I am passionate about health and fitness. I spend a lot of my free time working out or bouldering, always looking for the next challenge. I also have a strong love for design, whether it is crafting user interfaces or appreciating creative aesthetics in daily life. Traveling and spending meaningful time with friends are important to me, helping me stay inspired and balanced.
            <br /><br />
            I started my journey with very little programming experience, but I have been learning quickly. Every project and challenge I take on helps me grow my skills, whether it is in technology, design, or business strategy. I am always looking for ways to improve and expand what I can do.
            <br /><br />
            If you ever want to connect about tech, design, fitness, or travel, or if you simply want to share ideas and chat, I am always open to meeting new people. Take your time looking around, and thank you for visiting.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
