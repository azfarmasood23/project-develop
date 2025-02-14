const Hero = () => {
  return (
    <section className="box-border relative z-10 h-full pt-16 md:pt-24 pb-16 md:pb-24 font-[Lato,_sans-serif] text-center">
      {/* Dark overlay */}
      <div className="absolute h-[500px] md:h-[700px] inset-0 bg-black/70 z-0" />
      
      {/* Background image */}
      <div className="absolute inset-0 bg-bg-image bg-top bg-cover object-cover h-[500px] md:h-[700px] -z-10" />

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight md:leading-none mb-3 md:mb-4">
          Buying or selling a used car?
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F5C150] leading-tight md:leading-none mb-3 md:mb-4">
          Get Vehicle History Report
        </h2>
        <p className="text-base md:text-lg text-white font-light mb-6 md:mb-8">
          Vintory Helps You Buy and Sell With Confidence
        </p>

        <form className="w-full max-w-2xl mx-auto px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
            <input
              type="text"
              aria-label="search_vin"
              required
              minLength={17}
              maxLength={17}
              placeholder="Input VIN"
              className="w-full sm:w-2/3 p-2 rounded-md sm:rounded-r-none border-2 border-[#208BD3] uppercase"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-[#1976d2] text-white rounded-md sm:rounded-l-none border-2 border-[#208BD3] hover:bg-[#1565c0] transition-colors"
            >
              Check VIN
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 text-white">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              required
              className="w-4 h-4 sm:w-5 sm:h-5 accent-[#1976d2]"
            />
            <label htmlFor="checkbox" className="text-sm sm:text-base">
              Yes, I am the owner of the vehicle
            </label>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 mt-5 sm:mt-7 max-w-xl mx-auto px-4 sm:px-0">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-[#1976d2] hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              className="text-[#1976d2] hover:underline"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Hero;
