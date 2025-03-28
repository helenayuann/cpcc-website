import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold tracking-tight">
                CPCC
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/research"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                >
                  Research
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                >
                  About Us
                </Link>
                <Link
                  to="/publications"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                >
                  Publications
                </Link>
                <Link
                  to="/contact"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-700 focus:outline-none transition duration-300"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/research"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300"
          >
            Research
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/publications"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300"
          >
            Publications
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;