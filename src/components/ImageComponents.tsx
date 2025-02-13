import Image from "next/image";

const ImageComponents = () => {
  return (
    <div className="box-border relative z-20 max-w-screen-xl bg-[rgb(255,_255,_255)] text-[rgb(0,_0,_0)] text-[16px] m-0 leading-[24px] font-normal font-[Lato,_sans-serif] mx-auto">
      <div className="relative w-[80%] mx-auto overflow-hidden">
        <ul className="box-border m-0 p-0 flex flex-shrink-0 flex-nowrap items-center justify-center gap-[16px] pt-[16px] pb-[16px] animate-slide-left w-max">
          <li className="box-border relative w-[fit-content] max-w-full flex-shrink-0 rounded-[16px] pl-[32px] pr-[32px] pt-[24px] pb-[24px]">
            <blockquote className="box-border m-0">
              <Image
                alt="J.D. Power"
                src="/1.png"
                width={100}
                height={100}
                className="box-border block align-middle max-w-full"
              />
            </blockquote>
          </li>
          <li className="box-border relative w-[fit-content] max-w-full flex-shrink-0 rounded-[16px] pl-[32px] pr-[32px] pt-[24px] pb-[24px]">
            <blockquote className="box-border m-0">
              <Image
                alt="Logo 2"
                src="/2.png"
                width={100}
                height={100}
                className="box-border block align-middle max-w-full"
              />
            </blockquote>
          </li>
          <li className="box-border relative w-[fit-content] max-w-full flex-shrink-0 rounded-[16px] pl-[32px] pr-[32px] pt-[24px] pb-[24px]">
            <blockquote className="box-border m-0">
              <Image
                alt="CCMTA"
                src="/3.png"
                width={100}
                height={100}
                className="box-border block align-middle max-w-full"
              />
            </blockquote>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ImageComponents
