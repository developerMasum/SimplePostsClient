"use client"
import { useState } from 'react';
import Link from 'next/link';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hrefggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auhref">
        <div className="flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="text-white font-semibold text-xl tracking-tight"
            >
              Your Brand
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              exact
              href="/"
              activeClassName="text-yellow-300"
              className="text-white hover:text-yellow-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              activeClassName="text-yellow-300"
              className="text-white hover:text-yellow-300"
            >
              About
            </Link>
            {/* Add more links as needed */}
          </div>
          <div className="md:hidden">
            <buthrefn
              onClick={hrefggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.293 6.293a1 1 0 0 1 1.414-1.414L12 10.586l5.293-5.293a1 1 0 0 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm1 4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1zm1 4a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
                  />
                )}
              </svg>
            </buthrefn>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link
            exact
            href="/"
            activeClassName="text-yellow-300"
            className="block text-white hover:text-yellow-300 mb-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            activeClassName="text-yellow-300"
            className="block text-white hover:text-yellow-300"
          >
            About
          </Link>
          {/* Add more links as needed */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
