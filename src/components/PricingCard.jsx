import React from 'react';
import './index.css';
import {ReactComponent as RightArrow} from '../assets/svg/RightArrow.svg';
const PricingCard = ({ title, price, features, isPopular }) => {
  return (
    <div className="border-none  rounded-lg hover:shadow-md py-6 px-4  flex flex-col justify-between">
      <div>
      {isPopular && <span className="text-red-500 text-sm px-8">Most Popular</span>}
        <h2 className="text-2xl from-neutral-200 px-8 pb-6 ">{title}</h2>
        <div className="flex items-end px-6 pb-5 mb-10 border-b border-custom-gray ">
            <span className='font-size '>$</span>
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-lg"> Per agent/mo</span>
        </div>
        
      </div>
      <ul className="mt-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="mt-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="the-get-demo hover:bg-red-500 hover:text-white">
        Get a Demo
       <RightArrow/>
      </button>
    </div>
  );
};

export default PricingCard;
