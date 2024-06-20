import React from "react";
import { ReactComponent as HappyFoxLogo } from "../../src/assets/svg/HappyFoxLogo.svg";
import './index.css';

const Header = () => {
  return (
    <header className="bg-white pt-2.5 w-full">
      <div
        className="container mx-auto w-[94%] sm:w-4/5 px-4 flex justify-between items-center h-9 sm:h-12"
        
      >
        <div className="flex items-center">
          <HappyFoxLogo className="h-full mr-6" />
          <span className="products hidden lg:flex flex-row">
            <div>Products</div>
            <img
              className="mr-2 ml-1 mt-2 mb-2"
              src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png"
              alt="menu toggle arrow"
              width="8"
              height="8"
            />
          </span>
        </div>
        <p className="text-sm text-[#646f79] hover:text-black cursor-pointer">
          Log In
        </p>
      </div>
    </header>
  );
};

export default Header;
