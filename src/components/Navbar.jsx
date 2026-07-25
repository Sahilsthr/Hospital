import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-red-900 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14 border-2 border-white rounded-xl flex flex-col items-center justify-center p-1.5 text-white shrink-0">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>

            <div className="w-6 h-0.5 bg-white mt-0.5"></div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-white tracking-wider leading-none">
              HOPE
            </h2>

            <span className="text-[10px] font-bold text-gray-400 tracking-[0.25em] block mt-1">
              MEDICAL
            </span>
          </div>
        </Link>


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">

          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition ${
                location.pathname === item.path
                  ? "text-black"
                  : "text-white hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </nav>


        {/* Appointment Button */}
        <div className="hidden md:block">

          {location.pathname === "/" ? (
            <ScrollLink
              to="appointment"
              smooth={true}
              duration={700}
              offset={-80}
            >
              <button className="bg-red-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-800 transition cursor-pointer">
                Book Appointment
              </button>
            </ScrollLink>
          ) : (
            <Link to="/">
              <button className="bg-red-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-800 transition cursor-pointer">
                Book Appointment
              </button>
            </Link>
          )}

        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-red-900 text-white">

          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 border-b border-red-700 transition ${
                location.pathname === item.path
                  ? "text-black"
                  : "hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}


          <div className="p-6">

            {location.pathname === "/" ? (
              <ScrollLink
                to="appointment"
                smooth={true}
                duration={700}
                offset={-80}
                onClick={() => setOpen(false)}
              >
                <button className="w-full bg-white text-red-800 py-3 rounded-lg font-semibold cursor-pointer">
                  Book Appointment
                </button>
              </ScrollLink>
            ) : (
              <Link to="/" onClick={() => setOpen(false)}>
                <button className="w-full bg-white text-red-800 py-3 rounded-lg font-semibold cursor-pointer">
                  Book Appointment
                </button>
              </Link>
            )}

          </div>

        </div>
      )}

    </header>
  );
}