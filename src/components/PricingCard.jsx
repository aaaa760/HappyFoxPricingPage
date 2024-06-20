import React from 'react';
import './index.css';
import { ReactComponent as RightArrow } from '../assets/svg/RightArrow.svg';

const PricingCard = ({ title, price, features, isPopular, savings }) => {
  return (
    <div className={`border-none rounded-lg hover:shadow-md pb-6 px-4 flex flex-col justify-between h-full group ${isPopular ? 'pt-0' : 'pt-6'}`}>
      <div className='border-b border-custom-gray pb-5  mb-10'>
        {isPopular && <span className="text-red-500 text-sm px-8">Most Popular</span>}
        <h2 className="text-2xl from-neutral-200 px-8 pb-6">{title}</h2>
        <div className="flex items-end px-6">
          <span className="font-size dollor text-[#212529] mb-3 mr-1 ml-2">$</span>
          <span className="text-5xl font-medium text-[#212529] card">{price}</span>
          <span className="text-xs ml-1 mb-4 text-[#333741]"> Per agent/mo</span>
        </div>
        {savings && <div className="text-green-600 text-md  px-7 pt-4">{savings}</div>}
       
      </div>
      <div className="flex-grow pl-5 pt-7 pr-10 pb-9">
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="design mt-2 ">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pb-5">
        <button className="the-get-demo group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
          Get a Demo
          <RightArrow className="fill-black group-hover:fill-white ml-2 transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
