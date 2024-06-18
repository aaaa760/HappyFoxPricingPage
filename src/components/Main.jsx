import React, { useState } from "react";

const Main = ({ togglePricingPage }) => {
  const [selectedPage, setSelectedPage] = useState("pricing");

  const handleButtonClick = (page) => {
    setSelectedPage(page);
    togglePricingPage(page);
  };

  const getButtonClass = (page) => {
    return selectedPage === page
      ? "bg-white text-black"
      : "unlimited text-gray-800 hover:bg-white";
  };

  return (
    <>
      <div
        className="bg-no-repeat bg-left-top bg-cover box-border w-full flex flex-col items-center h-[222px] md:h-[280px] lg:h-[300px]"
        style={{
          backgroundImage:
            "url(https://assets.www.happyfox.com/v2/images/pricing-new-banner-bg-new.png)",
        }}
      >
        <h1 className="py-10 sm:py-0 sm:my-[46px] md:my-[65px] lg:mt-20 lg:mb-[76px] text-[40px] font-medium ">Plans & Pricing</h1>
        <div className="flex flex-row items-start justify-between mx-auto">
          <button
            onClick={() => handleButtonClick("pricing")}
            className={`p-4 py-4 w-[136px] h-[82px]  sm:py-6 md:py-8 lg:py-9  sm:w-60 md:w-72 lg:w-80  sm:h-[70px] md:h-[90px] lg:h-[85px] text-center shadow-none rounded-t-xl border-none  mr-3 sm:ml-auto cursor-pointer ${getButtonClass(
              "pricing"
            )}`}
          >
            <h4 className="font-normal sm:font-medium">Agent-based pricing</h4>
          </button>
          <button
            onClick={() => handleButtonClick("unlimited")}
            className={`p-4 py-4 w-[136px] h-[82px] sm:py-6 md:py-8 lg:py-9  sm:w-60 md:w-72 lg:w-80  sm:h-[70px] md:h-[90px] lg:h-[85px] text-center shadow-none rounded-t-xl border-none sm:mr-3 sm:ml-auto cursor-pointer ${getButtonClass(
              "unlimited"
            )}`}
          >
            <h4 className="font-medium">Unlimited Agents</h4>
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
