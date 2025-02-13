import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="box-border flex relative items-center justify-between px-64 py-2 font-[Lato,_sans-serif] text-black text-base z-50">
      {/* Logo Section */}
      <div className="inline-block max-w-full overflow-hidden relative">
      proofinspect
      </div>


      {/* Menu Button */}
      <button className="text-xl bg-transparent cursor-pointer md:hidden block">
        <svg 
          stroke="currentColor" 
          fill="none" 
          strokeWidth="0" 
          viewBox="0 0 15 15" 
          height="1em" 

          width="1em" 
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

      {/* Navigation Links */}
      <div className="flex items-center gap-3 text-lg">
        <Link href="/" className="font-normal text-gray-600 transition-all duration-150 ease-in-out">
          Home
        </Link>
        <Link href="/contact" className="font-normal text-gray-600 transition-all duration-150 ease-in-out">
          Contact Us
        </Link>
        <Link href="/how-to-order" className="font-normal text-gray-600 transition-all duration-150 ease-in-out">
          How To Order
        </Link>
        <Link href="/sample" className="font-normal text-gray-600 transition-all duration-150 ease-in-out">
          Sample
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
