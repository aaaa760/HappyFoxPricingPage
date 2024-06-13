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
        <h1 className="py-2 my-10 md:my-[59px] lg:my-16 text-4xl font-medium">Plans & Pricing</h1>
        <div className="flex flex-row items-start justify-between mx-auto">
          <button
            onClick={() => handleButtonClick("pricing")}
            className={`p-4 py-2 sm:py-6 md:py-8 lg:py-9 w-[200px] sm:w-60 md:w-72 lg:w-80 h-[70px] sm:h-[70px] md:h-[90px] lg:h-[100px] text-center shadow-none rounded-t-xl border-none mt-4 mr-3 ml-auto cursor-pointer ${getButtonClass(
              "pricing"
            )}`}
          >
            <h4 className="font-normal sm:font-medium">Agent-based pricing</h4>
          </button>
          <button
            onClick={() => handleButtonClick("unlimited")}
            className={`p-4 py-2 sm:py-6 md:py-8 lg:py-9 w-[200px] sm:w-68 md:w-72 lg:w-80 h-[70px] sm:h-[70px] md:h-[90px] lg:h-[100px] text-center shadow-none rounded-t-xl border-none mt-4 mr-3 ml-auto cursor-pointer ${getButtonClass(
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
