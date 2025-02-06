import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // State to control menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium text-pink-600 '>SaniaKhawar</div>

            {/* Desktop Menu */}
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink text-pink-600 hover:underline'><a href='#hero'>Home</a></li>
                <li className='menuLink text-pink-600 hover:underline'><a href='#about'>About</a></li>
                <li className='menuLink text-pink-600 hover:underline'><a href='#projects'>Projects</a></li>
                <li className='menuLink text-pink-600 hover:underline'><a href='#skills'>Skills</a></li>
                <li className='menuLink text-pink-600 hover:underline'><a href='#contact'>Contact</a></li>
            </ul>

            {/* Mobile Menu Icon */}
            <AiOutlineMenu 
              className='text-pink-600 md:hidden' 
              size={30} 
              onClick={toggleMenu} 
            />

        </div>

        {/* Mobile Menu (conditionally rendered based on menuOpen state) */}
        {menuOpen && (
          <ul className='flex flex-col items-center md:hidden mt-4'>
            <li className='menuLink text-pink-600 hover:underline py-2'><a href='#hero'>Home</a></li>
            <li className='menuLink text-pink-600 hover:underline py-2'><a href='#about'>About</a></li>
            <li className='menuLink text-pink-600 hover:underline py-2'><a href='#projects'>Projects</a></li>
            <li className='menuLink text-pink-600 hover:underline py-2'><a href='#skills'>Skills</a></li>
            <li className='menuLink text-pink-600 hover:underline py-2'><a href='#contact'>Contact</a></li>
          </ul>
        )}
      
    </div>
  )
}

export default Navbar;
