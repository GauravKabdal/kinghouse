import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
  <div className="backdrop-blur-md bg-white/30 border-b border-blue-200 transition duration-300 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-800">Kingsukh Guest House</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 font-medium text-blue-800">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#rooms" className="hover:text-blue-600">Rooms</a>
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#gallery" className="hover:text-blue-600">Gallery</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-blue-800 text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu (keep backdrop here too!) */}
  <div
    className={`fixed top-16 left-0 w-full bg-white/30 backdrop-blur-md border-t border-blue-100 transition-all duration-500 ease-in-out ${
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
    }`}
  >
    <nav className="flex flex-col items-center p-6 space-y-4 font-medium text-blue-800 text-lg">
      <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
      <a href="#rooms" onClick={() => setIsOpen(false)}>Rooms</a>
      <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
      <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
      <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
    </nav>
  </div>
</header>

  );
};

export default Header;
