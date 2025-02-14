import Link from "next/link";

const Footer = () => {
  return (
    <footer className="box-border mt-auto bg-[#f5f6f7] text-black font-[Lato,_sans-serif] px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10">
      <div className="box-border max-w-7xl mx-auto w-full">
        {/* Top Section */}
        <div className="box-border flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo */}
          <div className="box-border text-xl sm:text-2xl font-semibold cursor-pointer">
            Proofinspect
          </div>

          {/* Navigation */}
          <nav className="box-border flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="text-base sm:text-lg font-light text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/how-to-order"
              className="text-base sm:text-lg font-light text-gray-600 hover:text-gray-900 transition-colors"
            >
              How To Order
            </Link>
            <Link
              href="/report/4S4BRGLCOD3284825"
              className="text-base sm:text-lg font-light text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sample
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <hr className="my-6 sm:my-8 border-t border-gray-200" />

        {/* Copyright */}
        <p className="text-sm sm:text-base font-light text-center sm:text-left">
          © {new Date().getFullYear()} Vintory. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
