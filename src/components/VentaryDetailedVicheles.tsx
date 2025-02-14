import React from "react";

const VentaryDetailedVicheles = () => {
  return (
    <section
      id="about"
      className="box-border flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16 text-black font-[Lato,_sans-serif]"
    >
      <h1 className="box-border m-0 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold mb-8 sm:mb-12">
        VINTORY - detailed vehicle history report
      </h1>

      <div className="box-border w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {/* Card 1 - Accident Information */}
        <div className="box-border w-full">
          <div className="box-border flex items-center gap-2 sm:gap-3 mb-3">
            <span className="box-border text-2xl sm:text-3xl md:text-4xl text-red-500">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"></path>
              </svg>
            </span>
            <p className="box-border m-0 text-lg sm:text-xl md:text-2xl font-semibold">
              Accident Information
            </p>
          </div>
          <p className="box-border m-0 font-light text-base sm:text-lg">
            If the car has been involved in an accident, the report will include all the details of the accident. The details of the incident will include information about the damage caused, the location of the collision, and the deployment of the airbag. Any structural damage to the vehicle, as well as any repairs carried out, are documented.
          </p>
        </div>

        {/* Card 2 - Check service history */}
        <div className="box-border w-full">
          <div className="box-border flex items-center gap-2 sm:gap-3 mb-3">
            <span className="box-border text-2xl sm:text-3xl md:text-4xl text-[rgb(136,_179,_55)]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.5 10a4.5 4.5 0 0 0 4.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 0 1-.493.11 3.01 3.01 0 0 1-1.618-1.616.455.455 0 0 1 .11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 0 0-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 1 0 3.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01ZM5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <p className="box-border m-0 text-lg sm:text-xl md:text-2xl font-semibold">
              Check service history
            </p>
          </div>
          <p className="box-border m-0 font-light text-base sm:text-lg">
            The report contains service data for the machine. This applies to the timely passage of technical inspection, oil change, transmission, discs or any other components. The number of tire changes is also indicated.
          </p>
        </div>

        {/* Card 3 - Purpose of use */}
        <div className="box-border w-full">
          <div className="box-border flex items-center gap-2 sm:gap-3 mb-3">
            <span className="box-border text-2xl sm:text-3xl md:text-4xl text-[rgb(254,_206,_83)]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
              </svg>
            </span>
            <p className="box-border m-0 text-lg sm:text-xl md:text-2xl font-semibold">
              Purpose of use
            </p>
          </div>
          <p className="box-border m-0 font-light text-base sm:text-lg">
            Cars can be used as personal or commercial vehicles, taxis, police cars, as well as for rent. Information about previous use helps to determine the condition and wear of the components, interior and appearance of the vehicle.
          </p>
        </div>

        {/* Card 4 - History of car ownership */}
        <div className="box-border w-full">
          <div className="box-border flex items-center gap-2 sm:gap-3 mb-3">
            <span className="box-border text-2xl sm:text-3xl md:text-4xl text-[rgb(31,_31,_31)]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.298 22 8.69525 21.5748 7.29229 20.8248L2 22L3.17629 16.7097C2.42562 15.3063 2 13.7028 2 12C2 6.47715 6.47715 2 12 2ZM13 7H11V14H17V12H13V7Z"></path>
              </svg>
            </span>
            <p className="box-border m-0 text-lg sm:text-xl md:text-2xl font-semibold">
              History of car ownership
            </p>
          </div>
          <p className="box-border m-0 font-light text-base sm:text-lg">
            The report contains information about the number of previous owners of the car. The date of the change of owner, the period of operation of the machine and the mileage are indicated. From this section, you can find out in which states or provinces the vehicle has traveled, as well as much other information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VentaryDetailedVicheles;
