import React from "react";
import mediImage from "../image/medi.png";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center text-slate-800 md:px-16 lg:px-24 xl:px-32 text-sm pb-16 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/dot-pattern-redical.svg')] bg-center bg-cover">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20 w-full mt-24">
        {/* Left Content */}
        <div className="max-md:px-4 lg:w-1/2">
          <h1 className="text-5xl md:text-[54px] md:leading-[4.7rem] font-semibold max-w-lg bg-gradient-to-r from-black to-slate-600 bg-clip-text text-transparent">
            The Medicine Information Hub.
          </h1>

          <p className="text-sm/7 max-w-md mt-3 text-slate-500">
            Find everything you need to know about your medications—from price
            to side effects—all in one place.
          </p>

          {/* Search Option */}
          <div className="flex items-center text-sm border border-slate-300 rounded-md h-[54px] max-w-md focus-within:border-indigo-600 mt-6">
            <input
              type="text"
              placeholder="Medicine Name"
              className="rounded-md h-full px-4 w-full outline-none"
            />
            <button className="px-8 h-[46px] mr-1 flex items-center justify-center text-white rounded-md bg-indigo-600 hover:bg-indigo-700 transition">
              <svg
                className="h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </button>
          </div>

          <p className="text-xs mt-2 text-slate-600">
            Know Your Medicine. Secure Your Health.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="absolute inset-0 z-[-1] rounded-lg bg-gradient-to-r from-[#661FFF] via-[#FF1994] to-[#2D73FF] blur-2xl opacity-50"></div>
          <img
            className="max-w-md w-full max-h-[560px] rounded-[40px] max-md:px-3 md:mr-10"
            src={mediImage}
            alt="Startup team"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
