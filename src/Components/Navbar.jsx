import { useState } from "react";
import { FaArrowAltCircleDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Projects" },
    { path: "/education", label: "Education " },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-yellow-200 px-3 py-2 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">
          <NavLink to="/" className="flex items-center">
            <span className="text-3xl">👨‍💻</span>
            <span className="ml-2 hidden lg:block text-3xl font-lobster">MyPortfolio</span>
          </NavLink>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `py-2 px-4 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "text-yellow-400 hover:bg-yellow-600 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <a
            href="https://drive.google.com/file/d/1YnRaDL-xf3n0hIRn1shgJ7d7OR756oSq/view?usp=drive_link"
            target="_blank"
            download
            className="hidden md:inline-flex items-center px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg font-medium rounded-full shadow hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
          >
            Resume
          </a>
          {/* Menu Button */}
          <button
            className="md:hidden text-2xl text-yellow-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-md shadow-lg">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block px-4 py-2 text-yellow-400 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-600 text-black shadow-md"
                    : "hover:bg-yellow-600 hover:text-white"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/ResumeOfIsmailHossen.pdf"
            download
            className="flex items-center justify-center w-full mt-4 px-5 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg font-medium rounded-full shadow hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
          >
            Download Resume
            <FaArrowAltCircleDown className="ml-2" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
