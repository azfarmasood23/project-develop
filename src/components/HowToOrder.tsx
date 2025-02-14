import Image from "next/image";

const HowToOrderCom = () => {
  return (
    <section className="box-border flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-32 py-10 sm:py-12 md:py-16 text-black font-[Lato,_sans-serif]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold text-center mb-3 sm:mb-4">
        How To Order
      </h1>
      
      <p className="text-base sm:text-lg md:text-xl text-center font-light mb-8 sm:mb-10 max-w-2xl">
        Build trust with potential buyers by providing them with a Vintory today.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* PayPal Section */}
        <div className="flex flex-col items-center justify-start gap-4 sm:gap-6">
          <Image
            src="https://vintory.ca/_next/static/images/Paypal_2014_logo-2-3650b3180654ddfbf82040a686e775db.png"
            alt="paypal-logo" 
            width={500}
            height={500}
            className="w-32 sm:w-40 md:w-48 h-auto"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            PayPal
          </h2>
          <p className="text-base sm:text-lg text-center">
            You can pay with PayPal
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-base sm:text-lg">
            <li>Enter your PayPal account</li>
            <li>Checkout</li>
          </ol>
          <Image
            src="https://vintory.ca/_next/static/images/payment_with_PayPal-879bf14a17fb7fed2e2a434c49d8ac46.png" 
            alt="screenshot-payment-with-paypal" 
            className="w-full max-w-md h-auto"
            width={500}
            height={500}
          />
        </div>

        {/* Divider for mobile */}
        <div className="block md:hidden text-center">
          <p className="text-2xl sm:text-3xl font-medium">Or</p>
        </div>

        {/* Credit Card Section */}
        <div className="flex flex-col items-center justify-start gap-4 sm:gap-6">
          <Image
            src="/download.webp"
            alt="credit-card-logo" 
            width={500}
            height={500}
            className="w-32 sm:w-40 md:w-48 h-auto"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            Debit or Credit Card
          </h2>
          <p className="text-base sm:text-lg text-center">
            You can pay as a Guest mode, click Pay with Debit or Credit Card button.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-base sm:text-lg">
            <li>Enter your email</li>
            <li>Fill your Debit or Credit Card</li>
            <li>Checkout as Guest</li>
          </ol>
          <Image
            src="https://vintory.ca/_next/static/images/payment_with_no_PayPal-aacc7006e3ddc4d1977713a2c6bf9e6b.png" 
            alt="screenshot-payment-without-paypal" 
            className="w-full max-w-md h-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HowToOrderCom;
