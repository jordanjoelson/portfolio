const Footer = () => {
  return (
    <footer className="w-full flex justify-center py-10 bg-transparent">
      <div className="w-full max-w-[1400px] flex justify-between items-center px-10">
        <div className="text-sky-700 text-2xl font-medium font-['Plus_Jakarta_Sans']">
          © 2025 Jordan Joelson. All rights reserved.
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-black text-2xl font-medium font-['Plus_Jakarta_Sans']">
            Resume
          </a>
          <a href="#" className="text-black text-2xl font-medium font-['Plus_Jakarta_Sans']">
            LinkedIn
          </a>
          <a href="mailto:your@email.com" className="text-black text-2xl font-medium font-['Plus_Jakarta_Sans']">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
