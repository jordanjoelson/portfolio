import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center py-6 bg-transparent">
      <div className="w-full max-w-[1400px] flex justify-between items-center px-10">
        <Link to="/" className="text-rose-500 text-2xl font-bold font-['Plus_Jakarta_Sans']">
          Jordan Joelson.
        </Link>

        <Link to="/about" className="text-black text-2xl font-bold font-['Plus_Jakarta_Sans']">
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
