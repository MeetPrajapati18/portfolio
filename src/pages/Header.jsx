import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Header() {
    return (
        <div>
    <header className="fixed top-0 w-full bg-[#213145] shadow-md z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* First Part: Navigation Links */}
            <div className="flex space-x-8">
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

            {/* Second Part: Your Name */}
            <div className="text-2xl font-bold text-[#FFD2D6]">
                <span>Meet Prajapati</span>
            </div>

            {/* Third Part: Social Media Icons */}
            <div className="flex space-x-4">
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
</div>

    );
}

export default Header;
