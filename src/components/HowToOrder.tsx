import Image from "next/image";

const HowToOrderCom = () => {
  return (
    <section className="box-border flex flex-col items-center justify-center px-4 py-10 text-lg leading-7 text-black font-normal font-[Lato,_sans-serif]">
      <h1 className="text-5xl leading-none font-semibold m-0">
        How To Order
      </h1>
      
      <p className="mt-3 text-center font-light">
        Build trust with potential buyers by providing them with a Vintory today.
      </p>

      <div className="mt-8 mb-8 flex flex-row gap-6 px-4 items-center">
        {/* PayPal Section */}
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="https://vintory.ca/_next/static/images/Paypal_2014_logo-2-3650b3180654ddfbf82040a686e775db.png"
            alt="paypal-logo" 
            width={500}
            height={500}
            className="w-[30%] max-w-full"
          />
          <p className="text-xl leading-7 font-semibold text-center m-0">
            PayPal
          </p>
          <p className="text-center m-0">
            You can pay with PayPal
          </p>
          <ol className="mb-3 p-0 m-0">
            <li className="list-decimal">Enter your PayPal account</li>
            <li className="list-decimal">Checkout</li>
          </ol>
          <Image
            src="https://vintory.ca/_next/static/images/payment_with_PayPal-879bf14a17fb7fed2e2a434c49d8ac46.png" 
            alt="screenshot-payment-with-paypal" 
            className="w-3/5 max-w-full"
            width={500}
            height={500}
          />
        </div>

        {/* Divider */}
        <p className="text-4xl leading-10 text-center m-0">
          Or
        </p>

        {/* Credit Card Section */}
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/download.webp"
            alt="paypal-logo" 
            width={500}
            height={500}
            className="w-[30%] max-w-full"
          />
          <p className="text-xl leading-7 font-semibold text-center m-0">
            Debit or Credit Card
          </p>
          <p className="text-center m-0">
            You can pay as a Guest mode, click Pay with Debit or Credit Card button.
          </p>
          <ol className="mb-3 p-0 m-0">
            <li className="list-decimal">Enter your email</li>
            <li className="list-decimal">Fill your Debit or Credit Card</li>
            <li className="list-decimal">Checkout as Guest</li>
          </ol>
          <Image
            src="https://vintory.ca/_next/static/images/payment_with_no_PayPal-aacc7006e3ddc4d1977713a2c6bf9e6b.png" 
            alt="screenshot-payment-without-paypal" 
            className="w-3/5 max-w-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default HowToOrderCom
