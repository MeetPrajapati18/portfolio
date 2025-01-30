import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Header() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
    if (isSocialMenuOpen) setIsSocialMenuOpen(false);
  };

  const toggleSocialMenu = () => {
    setIsSocialMenuOpen(!isSocialMenuOpen);
    if (isNavMenuOpen) setIsNavMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-[#556B2F] shadow-md z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <button
            className="md:hidden text-[#F4A460] hover:text-[#FFD700] focus:outline-none"
            onClick={toggleNavMenu}
          >
            <span className="text-xl">☰</span>
          </button>
          <div className={`hidden md:flex space-x-8 ${isNavMenuOpen ? 'block' : 'hidden'}`}>
            <NavLink to="/" className="text-lg text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
              Home
            </NavLink>
            <NavLink to="/skills" className="text-lg text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
              Skills
            </NavLink>
            <NavLink to="/projects" className="text-lg text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
              Projects
            </NavLink>
          </div>
        </div>

        <div className="text-2xl font-bold text-[#FFD700]">
          <span>Meet Prajapati</span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-[#F4A460] hover:text-[#FFD700] focus:outline-none"
            onClick={toggleSocialMenu}
          >
            <span className="text-xl">☰</span>
          </button>
          <div className={`hidden md:flex space-x-4 ${isSocialMenuOpen ? 'block' : 'hidden'}`}>
            <a href="https://www.linkedin.com/in/meet-prajapati-3748bb2a5/" target="_blank" rel="noopener noreferrer" className="text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://github.com/MeetPrajapati18" target="_blank" rel="noopener noreferrer" className="text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className={`${isNavMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#3E4F1D]`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink to="/" className="text-lg text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
            Home
          </NavLink>
          <NavLink to="/skills" className="text-lg text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
            Skills
          </NavLink>
          <NavLink to="/projects" className="text-lg text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
            Projects
          </NavLink>
        </div>
      </div>

      <div className={`${isSocialMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#3E4F1D]`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <a href="https://www.linkedin.com/in/meet-prajapati-3748bb2a5/" target="_blank" rel="noopener noreferrer" className="text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com/MeetPrajapati18" target="_blank" rel="noopener noreferrer" className="text-[#F4A460] hover:text-[#FFD700] transition-colors duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;