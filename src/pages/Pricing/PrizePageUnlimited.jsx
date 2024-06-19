import React, { useState } from 'react';
import PricingCard from '../../components/PricingCard';
import '../../components/index.css';

const PricingPageUnlimited = () => {
  const [selectedPlan, setSelectedPlan] = useState('Annual');

  const pricingOptions = {
    Annual: [
      {
        title: 'Starter',
        price: 1499,
        features: [
            'Unlimited Agents',
            '10,000 Tickets / year',
            '10 Custom Fields'
        ],
        savings: '',
      },
      {
        title: 'Growth',
        price: 1999,
        features: [
            'Unlimited Agents',
            '20,000 Tickets / year',
            '20 Custom Fields'
        ],
        savings: '',
      },
      {
        title: 'Scale',
        price: 2999,
        features: [
            'Unlimited Agents',
            '100,000 Tickets / year',
            '100 Custom Fields'
        ],
        isPopular: true,
        savings: '',
      },
      {
        title: 'Scale Plus',
        price: 4999,
        features: [
            'Unlimited Agents',
            '250,000 Tickets / year',
            '200 Custom Fields'
        ],
        savings: '',
      },
    ],
  
    '2-Year': [
      {
        title: 'Starter',
        price: 1149,
        features: [
            'Unlimited Agents',
            '10,000 Tickets / year',
            '10 Custom Fields'
        ],
        savings: '23% Savings*',
      },
      {
        title: 'Growth',
        price: 1599,
        features: [
            'Unlimited Agents',
            '10,000 Tickets / year',
            '20 Custom Fields'
        ],
        savings: '20% Savings*',
      },
      {
        title: 'Scale',
        price: 2399,
        features: [
            'Unlimited Agents',
            '10,000 Tickets / year',
            '100 Custom Fields'
        ],
        isPopular: true,
        savings: '20% Savings*',
      },
      {
        title: 'Scale Plus',
        price: 3999,
        features: [
            'Unlimited Agents',
            '10,000 Tickets / year',
            '200 Custom Fields'
        ],
        savings: '20% Savings*',
      },
    ],
    '3-Year': [
      {
        title: 'Starter',
        price: 1299,
        features: [
            'Unlimited Agents',
            '10,000 Tickets / year',
            '10 Custom Fields'
        ],
        savings: '13% Savings*',
      },
      {
        title: 'Growth',
        price: 1729,
        features: [
            'Unlimited Agents',
            '20,000 Tickets / year',
            '20 Custom Fields'
        ],
        savings: '13% Savings*',
      },
      {
        title: 'Scale',
        price: 2609,
        features: [
            'Unlimited Agents',
            '100,000 Tickets / year',
            '100 Custom Fields'
        ],
        isPopular: true,
        savings: '13% Savings*',
      },
      {
        title: 'Scale Plus',
        price: 4329,
        features: [
            'Unlimited Agents',
            '250,000 Tickets / year',
            '200 Custom Fields'
        ],
        savings: '13% Savings*',
      },
    ],
  };
  
  return (
    <>
      <div className="mt-5 p-5 w-full  h-[380px] lg:h-32">
        <div className="buttons-bar bg-gray-200 w-full md:w-4/5 mx-auto mb-10 p-2 flex flex-col items-center justify-around lg:flex-row md:space-x-4 space-y-4 md:space-y-0 rounded-lg">
        <button
          className={`button-price w-full md:w-1/4 p-3.5 rounded-lg text-lg font-medium cursor-pointer ${
            selectedPlan === "Annual" ? "button-price-selected bg-white border-gray-400" : ""
          }`}
          onClick={() => setSelectedPlan("Annual")}
        >
          Annual
        </button>
          <button
           className={`button-price w-full md:w-1/4 p-3.5 rounded-lg text-lg font-medium cursor-pointer ${
            selectedPlan === "2-Year" ? "button-price-selected bg-white border-gray-400" : ""
          }`}
            onClick={() => setSelectedPlan('2-Year')}
          >
            2-Year Savings Plan <br/><p className="text-sm">Paid Up Front</p>
          </button>
          <button
            className={`button-price w-full md:w-1/4 p-3.5 rounded-lg text-lg font-medium cursor-pointer ${
              selectedPlan === "3-Year" ? "button-price-selected bg-white border-gray-400" : ""
            }`}
            onClick={() => setSelectedPlan('3-Year')}
          >
            3-Year Contract<br/><p className="text-sm">Billed Annually</p>
          </button>
        </div>
      </div>
      <div className="container mx-auto sm:w-4/5 p-6 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {pricingOptions[selectedPlan].map((option, index) => (
          <div
            key={index}
            className={`${
              index !== pricingOptions[selectedPlan].length - 1 
                ? 'border-t sm:border-t-0 sm:border-r  border-custom-gray'
                : ''
            }`}
          >
            <PricingCard {...option} />
          </div>
        ))}
      </div>
      <div className="mt-12 mb-24 mx-auto pricing-para py-3 px-4 text-center font-light text-md rounded-lg w-[285px] sm:w-fit sm:max-w-xl text-black">
        All plans require a minimum of 5 help desk agents. Non-profit and
        educational organizations are eligible for a discount.
      </div>
    </>
  );
};

export default PricingPageUnlimited;
