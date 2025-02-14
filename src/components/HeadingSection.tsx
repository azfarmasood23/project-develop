import React from "react";

const HeadingSection = () => {
  return (
    <section
      id="quotes"
      className="box-border flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16 bg-[rgb(245,_246,_247)] text-black font-[Lato,_sans-serif]"
    >
      <h1 className="box-border m-0 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-tight md:leading-tight font-semibold max-w-4xl">
        We will continue to innovate in terms of service for customer satisfaction
      </h1>
      <p className="box-border m-0 mt-4 sm:mt-6 text-center font-light text-base sm:text-lg md:text-xl max-w-3xl">
        You can{"'"}t just ask a customer what they want and then try to give it to
        them. When you make it, they will want something new
      </p>
    </section>
  );
};

export default HeadingSection;
