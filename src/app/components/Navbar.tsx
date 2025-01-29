'use client'
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white w-full h-20 flex items-center justify-between px-8 border-b border-gray-300 relative">
      {/* Logo */}
      <div className="text-blue-500 text-xl font-bold">MORENT</div>

      {/* Search Bar (hidden on small screens) */}
      <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full border border-gray-300">
        <CiSearch size={20} className="text-gray-500" />
        <input
          type="text"
          className="bg-transparent flex-grow px-2 text-sm outline-none"
          placeholder="Search something here"
        />
        <VscSettings size={20} className="text-gray-500" />
      </div>

      {/* Profile and Notifications (hidden on small screens) */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Notification Icons */}
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.44 13.0996C24.63 13.0996 23.01 13.9796 22 15.3296C20.99 13.9796 19.37 13.0996 17.56 13.0996C14.49 13.0996 12 15.5996 12 18.6896C12 19.8796 12.19 20.9796 12.52 21.9996C14.1 26.9996 18.97 29.9896 21.38 30.8096C21.72 30.9296 22.28 30.9296 22.62 30.8096C25.03 29.9896 29.9 26.9996 31.48 21.9996C31.81 20.9796 32 19.8796 32 18.6896C32 15.5996 29.51 13.0996 26.44 13.0996Z"
            fill="#596780"
          />
          <rect
            opacity="0.8"
            x="0.5"
            y="0.5"
            width="43"
            height="43"
            rx="21.5"
            stroke="#C3D4E9"
            strokeOpacity="0.4"
          />
        </svg>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3399 24.49L28.3399 22.83C28.1299 22.46 27.9399 21.76 27.9399 21.35V18.82C27.9399 16.47 26.5599 14.44 24.5699 13.49C24.0499 12.57 23.0899 12 21.9899 12C20.8999 12 19.9199 12.59 19.3999 13.52C17.4499 14.49 16.0999 16.5 16.0999 18.82V21.35C16.0999 21.76 15.9099 22.46 15.6999 22.82L14.6899 24.49C14.2899 25.16 14.1999 25.9 14.4499 26.58C14.6899 27.25 15.2599 27.77 15.9999 28.02C17.9399 28.68 19.9799 29 22.0199 29C24.0599 29 26.0999 28.68 28.0399 28.03C28.7399 27.8 29.2799 27.27 29.5399 26.58C29.7999 25.89 29.7299 25.13 29.3399 24.49Z"
            fill="#596780"
          />
        </svg>
        <img
          src="/Image.png"
          alt="Profile"
          width="32"
          height="32"
          className="rounded-full"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-gray-500">
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-300 z-50 md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full border border-gray-300">
              <CiSearch size={20} className="text-gray-500" />
              <input
                type="text"
                className="bg-transparent flex-grow px-2 text-sm outline-none"
                placeholder="Search something here"
              />
              <VscSettings size={20} className="text-gray-500" />
            </div>
            <button className="text-left text-gray-700 font-medium">Profile</button>
            <button className="text-left text-gray-700 font-medium">Notifications</button>
            <button className="text-left text-gray-700 font-medium">Settings</button>
            <Link href="/SignIn">
            <button className="text-left text-gray-700 font-medium">SignIn</button>
            </Link>
            <Link href='/SignUp'>
            <button className="text-left text-blue-500 font-medium">SignUp</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
