import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-primary bg-opacity-95 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="text-center">
              <h1 className="font-playfair text-2xl font-bold text-secondary">SANGAM</h1>
              <p className="text-xs tracking-wider">HOUSE OF JEWELS LLP</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-secondary px-3 py-2 text-sm font-medium">Home</a>
              <a href="#collections" className="hover:text-secondary px-3 py-2 text-sm font-medium">Collections</a>
              <a href="#about" className="hover:text-secondary px-3 py-2 text-sm font-medium">About</a>
              <a href="#contact" className="hover:text-secondary px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-secondary"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:text-secondary px-3 py-2 text-base font-medium">Home</a>
            <a href="#collections" className="block hover:text-secondary px-3 py-2 text-base font-medium">Collections</a>
            <a href="#about" className="block hover:text-secondary px-3 py-2 text-base font-medium">About</a>
            <a href="#contact" className="block hover:text-secondary px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;