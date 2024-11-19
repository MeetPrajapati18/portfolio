import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-500 text-white py-4">
      <h1 className="text-3xl font-bold text-center">Meet Prajapati</h1>
      <nav className="flex justify-center mt-2">
        <a href="#about" className="mx-4 hover:underline">About</a>
        <a href="#projects" className="mx-4 hover:underline">Projects</a>
        <a href="#contact" className="mx-4 hover:underline">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
