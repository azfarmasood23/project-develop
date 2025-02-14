import React from "react";

const VentaryReport = () => {
  return (
    <section
      id="comparison"
      className="box-border flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16 text-black font-[Lato,_sans-serif]"
    >
      <p className="box-border m-0 font-light text-gray-600 text-base sm:text-lg md:text-xl mb-4">
        Our Sources
      </p>
      <h1 className="box-border m-0 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold mb-4 sm:mb-6">
        Reliable Data Sources for All Vehicle Categories
      </h1>
      <p className="box-border m-0 mb-4 text-center font-light uppercase text-sm sm:text-base md:text-lg">
        Do Not Overpay!
      </p>
      <p className="box-border m-0 text-center font-light uppercase text-sm sm:text-base md:text-lg mb-4">
        CHOOSE Vintory — THE SERVICE YOU CAN EASILY RELY ON!
      </p>
      <p className="box-border m-0 mb-8 text-center text-sm sm:text-base md:text-lg font-light max-w-3xl">
        We have seen it and answering to it, Feel like you{"'"}re being ripped off
        by Carfax? It{"'"}s an open secret that their vehicle history reports are
        costly and contain only basic information.
      </p>

      {/* Table Container */}
      <div className="box-border w-full overflow-x-auto">
        <div className="box-border min-w-[768px] max-w-5xl mx-auto">
          <table className="w-full border-collapse text-left text-sm sm:text-base md:text-lg font-light">
            <thead>
              <tr className="border-b">
                <th scope="col" className="py-4 px-4 sm:px-6">
                  Reports Contents
                </th>
                <th scope="col" className="py-4 px-4 sm:px-6 text-center">
                  Vintory
                </th>
                <th scope="col" className="py-4 px-4 sm:px-6 text-center">
                  Autocheck
                </th>
                <th scope="col" className="py-4 px-4 sm:px-6 text-center">
                  Carfax
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6">Odometer Reading</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6">Accident Check</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6">Title Check</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6">Fraud &amp; Crime Information</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6">Instant Report: Get your report instantly! No waiting around</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6">Accurate Data: Using government and third party databases</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6">Savings: The competitors charge $69.95 for a single report!</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <CheckIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <XIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Helper components for icons
const CheckIcon = () => (
  <span className="flex items-center justify-center">
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className="w-4 h-4 sm:w-5 sm:h-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"></path>
    </svg>
  </span>
);

const XIcon = () => (
  <span className="flex items-center justify-center">
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className="w-4 h-4 sm:w-5 sm:h-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
    </svg>
  </span>
);

export default VentaryReport;
