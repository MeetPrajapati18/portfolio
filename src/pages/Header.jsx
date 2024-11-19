import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Header() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  // Toggle navigation and close social media menu
  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
    if (isSocialMenuOpen) setIsSocialMenuOpen(false); // Close social media menu when opening nav menu
  };

  // Toggle social media and close navigation menu
  const toggleSocialMenu = () => {
    setIsSocialMenuOpen(!isSocialMenuOpen);
    if (isNavMenuOpen) setIsNavMenuOpen(false); // Close navigation menu when opening social media menu
  };

  return (
    <header className="fixed top-0 w-full bg-[#213145] shadow-md z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side: Navigation Menu */}
        <div className="flex items-center space-x-8">
          {/* Toggle Navigation Links (Mobile) */}
          <button
            className="md:hidden text-[#BD7585] hover:text-[#FFD2D6] focus:outline-none"
            onClick={toggleNavMenu}
          >
            <span className="text-xl">☰</span> {/* Hamburger Icon for Navigation */}
          </button>
          
          {/* Navigation Links (Desktop) */}
          <div className={`hidden md:flex space-x-8 ${isNavMenuOpen ? 'block' : 'hidden'}`}>
            <NavLink
              to="/"
              className="text-lg text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className="text-lg text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className="text-lg text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
            >
              Projects
            </NavLink>
          </div>
        </div>

        {/* Center: Name */}
        <div className="text-2xl font-bold text-[#FFD2D6]">
          <span>Meet Prajapati</span>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center space-x-4">
          {/* Toggle Social Media Icons (Mobile) */}
          <button
            className="md:hidden text-[#BD7585] hover:text-[#FFD2D6] focus:outline-none"
            onClick={toggleSocialMenu}
          >
            <span className="text-xl">☰</span> {/* Hamburger Icon for Social Media */}
          </button>
          
          {/* Social Media Icons (Desktop) */}
          <div className={`hidden md:flex space-x-4 ${isSocialMenuOpen ? 'block' : 'hidden'}`}>
            <a
              href="https://www.linkedin.com/in/meet-prajapati-3748bb2a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://github.com/MeetPrajapati18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu for Navigation Links */}
      <div className={`${isNavMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#213145]`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink
            to="/"
            className="text-lg text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/skills"
            className="text-lg text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className="text-lg text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
          >
            Projects
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu for Social Media Icons */}
      <div className={`${isSocialMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#213145]`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <a
            href="https://www.linkedin.com/in/meet-prajapati-3748bb2a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/MeetPrajapati18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BD7585] hover:text-[#FFD2D6] transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
