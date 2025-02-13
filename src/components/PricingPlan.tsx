import Link from "next/link";

const PricingPlan = () => {
  return (
    <section
      id="pricing"
      className="box-border flex flex-col items-center justify-center px-0 py-[50px] text-[rgb(0,_0,_0)] text-[16px] m-0 leading-[24px] font-normal font-[Lato,_sans-serif] w-full"
    >
      <div className="box-border flex flex-col items-center justify-center w-full max-w-[1300px]">
        <hgroup className="box-border mb-[50px] mt-[50px] text-center w-full">
          <h4
            className="box-border m-0 mt-0 mb-[16px] font-medium text-[16px] leading-[40px]"
          >
            Get your vehicle history report today!
          </h4>
          <h2
            className="box-border m-0 mt-0 mb-[16px] font-bold text-[24px] leading-[50px] tracking-[-0.5px]"
          >
            Meet our pricing plan that suit you
          </h2>
        </hgroup>
        <section className="box-border flex items-center justify-center w-full">
          <div className="box-border text-center w-[500px] p-[40px] max-w-full mx-auto [box-shadow:rgba(91,_132,_193,_0.1)_0px_15px_50px] rounded-[10px] relative pt-[75px]">
            <div className="box-border bg-[rgb(0,_0,_0)] mt-0 mb-[16px] absolute top-0 w-full left-0 min-h-[35px] flex text-[rgb(255,_255,_255)] rounded-tl-[10px] rounded-br-none rounded-tr-[10px] rounded-bl-none items-center justify-center uppercase text-[14px] leading-[18px] font-bold">
              Best Deal
            </div>
            <p className="box-border m-0 mt-0 mb-[16px] text-[16px] leading-[26px]">
              Vehicle History Report
            </p>
            <div className="box-border text-center font-bold text-[26px] leading-[34px] tracking-[-0.55px] items-baseline mt-[11px]">
              <span className="box-border text-[16px] line-through">
                $69.95
              </span>{" "}
              $33.95/<span className="box-border text-[16px]">report</span>
            </div>
            <br className="box-border" />
            <br className="box-border" />
            <Link
              href="/report/4S4BRGLCOD3284825"
              rel="noopener noreferrer"
              target="_blank"
              className="box-border m-0 inline-block"
            >
              <button
                type="button"
                style={{ background: "rgb(25, 118, 210)" }}
                className="box-border text-[16px] m-0 px-[15px] py-[8px] [appearance:button] bg-[rgb(2,_132,_137)] cursor-pointer inline-flex items-center justify-center text-[rgb(255,_255,_255)] min-h-[48px] min-w-[48px] rounded-[3px] font-medium capitalize border-[0px] [transition:0.3s] bg-[rgb(25,_118,_210)]"
              >
                <span className="box-border pl-[4px] pr-[4px]">
                  VIEW SAMPLE REPORT
                </span>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PricingPlan;
