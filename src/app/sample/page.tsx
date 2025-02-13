"use client";
import Image from "next/image";

const Sample = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        id="singleSummaryButton"
        name="singleSummaryButton"
        onClick={() => window.print()}
        className="box-border px-6 py-3 bg-purple-800 text-[14px]  cursor-pointer text-[rgb(255,_255,_255)] text-center font-medium font-[Roboto]"
      >
        &nbsp;Print Report&nbsp;
      </button>
      <div>
        <Image
          src="/image last1.PNG"
          alt="Experian Logo"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        <Image
          src="/image last 2.PNG"
          alt="Experian Logo"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        <Image
          src="/image last 3.PNG"
          alt="Experian Logo"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        <Image
          src="/image last 4.PNG"
          alt="Experian Logo"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        <Image
          src="/image last 5.PNG"
          alt="Experian Logo"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        <Image
          src="/image last 6.PNG"
          alt="Experian Logo"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Sample;
