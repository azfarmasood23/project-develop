import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#f5f6f7" }}
      className="box-border mt-auto !flex !flex-col !items-center !justify-center !pl-64 !pr-64 !pt-10 !pb-10 bg-[#f5f6f7] text-[rgb(0,_0,_0)] text-[16px] m-0 leading-[24px] font-normal font-[Lato,_sans-serif]"
    >
      <div className="box-border !flex !w-full !flex-row !items-center !justify-between">
        <div className="box-border block align-middle max-w-full !w-[100px] !cursor-pointer">
          Proofinspect
        </div>
        <nav className="box-border !mt-2 !flex !flex-row !gap-4">
          <Link
            href="/contact"
            className="box-border !text-left !text-[1.125rem] !leading-7 !font-light text-[rgb(97,_97,_97)]"
          >
            Contact Us
          </Link>
          <Link
            href="/how-to-order"
            className="box-border !text-left !text-[1.125rem] !leading-7 !font-light text-[rgb(97,_97,_97)]"
          >
            How To Order
          </Link>
          <Link
            href="/report/4S4BRGLCOD3284825"
            className="box-border !text-left !text-[1.125rem] !leading-7 !font-light text-[rgb(97,_97,_97)]"
          >
            Sample
          </Link>
        </nav>
      </div>
      <hr className="box-border h-0 border-t m-0 !mt-4 !mb-4 !w-full border-[rgb(229,_224,_224)]" />
      <p className="box-border m-0 !w-full !text-left !text-[0.875rem] !leading-5 !font-light">
        © {/* */}2025{/* */} {/* */}Vintory{/* */}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
