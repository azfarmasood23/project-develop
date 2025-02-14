"use client"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="box-border relative z-50 font-[Lato,_sans-serif] text-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              proofinspect
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link href="/" className="font-normal text-gray-600 hover:text-gray-900 transition-all duration-150 ease-in-out">
              Home
            </Link>
            <Link href="/contact" className="font-normal text-gray-600 hover:text-gray-900 transition-all duration-150 ease-in-out">
              Contact Us
            </Link>
            <Link href="/how-to-order" className="font-normal text-gray-600 hover:text-gray-900 transition-all duration-150 ease-in-out">
              How To Order
            </Link>
            <Link href="/sample" className="font-normal text-gray-600 hover:text-gray-900 transition-all duration-150 ease-in-out">
              Sample
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="0" 
              viewBox="0 0 15 15" 
              height="24" 
              width="24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" 
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link 
                href="/" 
                className="block rounded-md px-3 py-2 text-base font-normal text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="block rounded-md px-3 py-2 text-base font-normal text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/how-to-order" 
                className="block rounded-md px-3 py-2 text-base font-normal text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                How To Order
              </Link>
              <Link 
                href="/sample" 
                className="block rounded-md px-3 py-2 text-base font-normal text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Sample
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
