import Image from "next/image";
const HowItWorks = () => {
  return (
    <section
      id="how-it-work"
      className="box-border flex flex-row items-center justify-center pl-[256px] pr-[256px] pt-[40px] pb-[40px] gap-[40px] text-[rgb(0,_0,_0)] text-[16px] m-0 leading-[24px] font-normal font-[Lato,_sans-serif]"
    >
      <Image
        src="/2.webp"
        alt="car-fox-mascot"
        className="box-border block align-middle max-w-full w-1/2"
        width={500}
        height={500}
      />
      <div className="box-border w-1/2">

        <h1 className="box-border m-0 text-left text-[48px] leading-none font-semibold">
          How it works
        </h1>
        <div className="box-border mt-[24px] flex flex-col gap-[16px]">
          <div
            style={{
              backgroundColor: "rgb(245, 246, 247)",
              color: "rgb(51, 81, 165)",
            }}
            className="box-border rounded-tr-[6px] rounded-tl-[6px] p-[16px] text-[18px] leading-[28px] bg-[rgb(245,_246,_247)] text-[rgb(51,_81,_165)]"
          >
            <button className="box-border text-[100%] m-0 p-0 [appearance:button] bg-transparent cursor-pointer flex w-full items-center justify-between gap-[8px]">
              <span className="box-border text-left font-semibold">
                Step 1. Find your Car
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
              </svg>
            </button>
            <div className="box-border grid grid-rows-[1fr] overflow-hidden opacity-100 [transition-property:all] ease-in-out duration-300">
              <span className="box-border m-0 overflow-hidden text-[rgb(0,_0,_0)]">
                <p className="box-border m-0">
                  Search by vehicle identification number (VIN) or CA license
                  plate to find the car you want to research.
                </p>
              </span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgb(25, 118, 210)",
              color: "rgb(255, 255, 255)",
            }}
            className="box-border p-[16px] text-[18px] leading-[28px] bg-[rgb(25,_118,_210)] text-[rgb(255,_255,_255)]"
          >
            <button className="box-border text-[100%] m-0 p-0 [appearance:button] bg-transparent cursor-pointer flex w-full items-center justify-between gap-[8px]">
              <span className="box-border text-left font-semibold">
                Step 2. Pick your Plan
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </button>
            <div className="box-border grid grid-rows-[0fr] overflow-hidden opacity-0 [transition-property:all] ease-in-out duration-300">
              <p className="box-border m-0 overflow-hidden text-[rgb(0,_0,_0)]">
                Multiple Reports if you{"'"}re still shopping and considering many
                vehicles. A single report might be right for you if you{"'"}ve found
                your dream car and are ready to buy.
              </p>

            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgb(25, 118, 210)",
              color: "rgb(255, 255, 255)",
            }}
            className="box-border rounded-br-[6px] rounded-bl-[6px] p-[16px] text-[18px] leading-[28px] bg-[rgb(25,_118,_210)] text-[rgb(255,_255,_255)]"
          >
            <button className="box-border text-[100%] m-0 p-0 [appearance:button] bg-transparent cursor-pointer flex w-full items-center justify-between gap-[8px]">
              <span className="box-border text-left font-semibold">
                Step 3. Check Vehicle History
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </button>
            <div className="box-border grid grid-rows-[0fr] overflow-hidden opacity-0 [transition-property:all] ease-in-out duration-300">
              <p className="box-border m-0 overflow-hidden text-[rgb(0,_0,_0)]">
                from your desktop. One time fee. No recurring charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
