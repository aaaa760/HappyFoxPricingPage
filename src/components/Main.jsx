import React from "react";

const Main = () => {
  return (
    <>
      <div

        className="bg-no-repeat bg-left-top bg-cover box-border w-full flex flex-col items-center"
        style={{
          backgroundImage:
            "url(https://assets.www.happyfox.com/v2/images/pricing-new-banner-bg-new.png)",
          height: "296px",
        }}
      >
        <h1 className="py-2 my-16 text-4xl font-medium">Plans & Pricing</h1>
        <div className="flex flex-row items-start justify-between mx-auto">
          <a
            href="/"
            className="p-4 py-9 w-80  text-center text-black bg-white shadow-none rounded-t-xl border-none mt-4 mr-3 ml-auto hover:bg-white cursor-pointer"
          >
            <h4 className="font-medium">Agent-based pricing</h4>
          </a>
          <a
            href="/"
            className="unlimited p-4 py-9 w-80 mr-auto rounded-t-xl border-none text-center cursor-pointer  mt-4 ml-3 hover:bg-white "
          >
            <h4 className="font-medium text-gray-800">Unlimited Agents</h4>
          </a>
        </div>
      </div>

      <div className="mt-5 p-5 w-full h-36">
        <div className="buttons-bar">
            <button className="button-price-selected">Monthly</button>
            <button className="button-price">Annual</button>
            <button className="button-price">2-Year Savings Plan <br/><p className="text-sm ">Paid Up Front</p></button>
            <button className="button-price">3-Year Contract<br/><p className="text-sm ">Billed Annually</p></button>
        </div>
      </div>

    </>
  );
};

export default Main;
