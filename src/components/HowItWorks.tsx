import Image from "next/image";
const HowItWorks = () => {
  return (
    <section
      id="how-it-work"
      className="box-border flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-32 py-12 md:py-16 lg:py-20 gap-8 lg:gap-16 text-black font-[Lato,_sans-serif]"
    >
      {/* Image container */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/2.webp"
          alt="car-fox-mascot"
          className="box-border block w-full h-auto object-contain"
          width={500}
          height={500}
          priority
        />
      </div>

      {/* Content container */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
          How it works
        </h1>

        <div className="flex flex-col gap-4">
          {/* Step 1 */}
          <div className="rounded-lg overflow-hidden">
            <div
              style={{
                backgroundColor: "rgb(245, 246, 247)",
                color: "rgb(51, 81, 165)",
              }}
              className="p-4 md:p-6"
            >
              <button className="w-full flex items-center justify-between gap-2">
                <span className="text-left font-semibold text-lg md:text-xl">
                  Step 1. Find your Car
                </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 md:w-5 md:h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                </svg>
              </button>
              <div className="mt-2">
                <p className="text-black text-base md:text-lg">
                  Search by vehicle identification number (VIN) or CA license plate
                  to find the car you want to research.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-lg overflow-hidden">
            <div
              style={{
                backgroundColor: "rgb(25, 118, 210)",
                color: "rgb(255, 255, 255)",
              }}
              className="p-4 md:p-6"
            >
              <button className="w-full flex items-center justify-between gap-2">
                <span className="text-left font-semibold text-lg md:text-xl">
                  Step 2. Pick your Plan
                </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 md:w-5 md:h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </button>
              <div className="mt-2">
                <p className="text-black text-base md:text-lg">
                  Multiple Reports if you{"'"}re still shopping and considering many
                  vehicles. A single report might be right for you if you{"'"}ve
                  found your dream car and are ready to buy.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-lg overflow-hidden">
            <div
              style={{
                backgroundColor: "rgb(25, 118, 210)",
                color: "rgb(255, 255, 255)",
              }}
              className="p-4 md:p-6"
            >
              <button className="w-full flex items-center justify-between gap-2">
                <span className="text-left font-semibold text-lg md:text-xl">
                  Step 3. Check Vehicle History
                </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 md:w-5 md:h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </button>
              <div className="mt-2">
                <p className="text-black text-base md:text-lg">
                  From your desktop. One time fee. No recurring charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
