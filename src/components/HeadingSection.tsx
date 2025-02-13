import React from "react";

const HeadingSection = () => {
  return (
    <section
      id="quotes"
      style={{ backgroundColor: "rgb(245, 246, 247)" }}
      className="box-border flex flex-col items-center justify-center pl-[256px] pr-[256px] pt-[40px] pb-[40px] bg-[rgb(245,_246,_247)] text-[rgb(0,_0,_0)] text-[16px] m-0 leading-[24px] font-normal font-[Lato,_sans-serif]"
    >
      <h1 className="box-border m-0 text-center text-[48px] leading-none font-semibold">
        We will continue to innovate in terms of service for customer
        satisfaction
      </h1>
      <p className="box-border m-0 mt-[16px] text-center font-light text-[18px] leading-[28px]">
        You can{"'"}t just ask a customer what they want and then try to give it
        to them. When you make it, they will want something new
      </p>
    </section>
  );
};

export default HeadingSection;
