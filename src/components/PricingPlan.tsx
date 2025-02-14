import Link from "next/link";

const PricingPlan = () => {
  return (
    <section
      id="pricing"
      className="box-border flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-32 py-12 sm:py-16 md:py-20 text-black font-[Lato,_sans-serif]"
    >
      <div className="box-border flex flex-col items-center justify-center w-full max-w-7xl">
        <hgroup className="box-border mb-8 sm:mb-12 md:mb-16 text-center w-full">
          <h4 className="box-border m-0 mb-3 sm:mb-4 font-medium text-base sm:text-lg md:text-xl">
            Get your vehicle history report today!
          </h4>
          <h2 className="box-border m-0 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
            Meet our pricing plan that suits you
          </h2>
        </hgroup>

        <div className="box-border w-full max-w-md mx-auto">
          <div className="box-border text-center p-6 sm:p-8 md:p-10 bg-white rounded-lg shadow-xl relative">
            {/* Best Deal Badge */}
            <div className="box-border bg-black text-white absolute top-0 left-0 right-0 py-2 sm:py-3 rounded-t-lg uppercase text-sm sm:text-base font-bold">
              Best Deal
            </div>

            {/* Pricing Content */}
            <div className="mt-8 sm:mt-10">
              <p className="text-base sm:text-lg mb-4">
                Vehicle History Report
              </p>
              
              <div className="text-center font-bold mb-6 sm:mb-8">
                <span className="text-sm sm:text-base line-through text-gray-500 mr-2">
                  $69.95
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl">
                  $33.95
                </span>
                <span className="text-base sm:text-lg">/report</span>
              </div>

              <Link
                href="/report/4S4BRGLCOD3284825"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block w-full"
              >
                <button
                  type="button"
                  className="w-full bg-[#1976d2] text-white py-3 sm:py-4 px-6 rounded-md hover:bg-[#1565c0] active:bg-[#0d47a1] transition-colors font-medium text-base sm:text-lg uppercase"
                >
                  View Sample Report
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
