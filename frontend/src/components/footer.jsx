const Footer = () => {
  return (
    <footer className="w-full flex justify-center py-6 md:py-10 bg-transparent">
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-center px-4 md:px-10 gap-4 md:gap-0">
        
        {/* Links */}
        <div className="flex gap-4 md:gap-8">
          <a href="#" className="text-black text-base md:text-lg font-medium font-['Plus_Jakarta_Sans']">
            Resume
          </a>
          <a href="#" className="text-black text-base md:text-lg font-medium font-['Plus_Jakarta_Sans']">
            LinkedIn
          </a>
          <a href="mailto:your@email.com" className="text-black text-base md:text-lg font-medium font-['Plus_Jakarta_Sans']">
            Email
          </a>
        </div>

        {/* Trademark */}
        <div className="text-sky-700 text-sm md:text-base font-medium font-['Plus_Jakarta_Sans'] text-center">
          © 2025 Jordan Joelson. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
