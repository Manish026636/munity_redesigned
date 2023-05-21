import { useState } from "react";
import { FaSignOutAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';
function HamburgerMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 ">
            <a href="/" title="" className="flex">
              <img
                className="w-auto mt-4 sm:mt-0 md:mt-0 h-12 lg:h-10"
                src="MunLogo.png"
                alt=""
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            <svg
              className={`block w-6 h-6 ${isMobileMenuOpen ? "hidden" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>

            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
          <Link to="/"><button   className="bg-[#5FB4E4] rounded-lg px-4 p-2 text-base font-medium text-white transition-all duration-200 hover:text-gray-100">
          Home
        </button></Link>

            <button   className="bg-[#5FB4E4] rounded-lg px-4 p-2 text-base font-medium text-white transition-all duration-200 hover:text-gray-100">
             Sessions
            </button>
            <button   className="bg-[#5FB4E4] rounded-lg px-4 p-2 text-base font-medium text-white transition-all duration-200 hover:text-gray-100 ">
              Support
            </button>
          </div>

          <a
            href="/"
            title=""
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#F46A6A] border border-transparent rounded-lg lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Logout <span className="ml-2"><FaSignOutAlt /> </span>
          </a>
        </nav>

        <nav
          className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <button
               
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Home
              </button>

              <button
                
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Sessions
              </button>

              <button
                
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                About
              </button>

              
            </div>
          </div>

          <div className="px-6 mt-6">
            <a
              href="/"
              title=""
              className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#F46A6A] border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
            Logout <span className="ml-2 mt-1"><FaSignOutAlt /> </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HamburgerMenu;