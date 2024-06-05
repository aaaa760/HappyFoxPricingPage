import React from "react";
import { ReactComponent as HappyFoxLogo } from "../../src/assets/svg/HappyFoxLogo.svg"; 
import './index.css';

const Header = () => {
  return (
    <header className="bg-white pt-2.5 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center h-12" style={{ maxWidth: '1110px' }}>
        <div className="flex items-center ">
          <HappyFoxLogo className="h-full mr-6" />
         <span className="products flex flex-row">
          <div>Products</div>
          <img className="mr-2 ml-1 mt-2 mb-2" src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png" class="hf-productnav__menu-arrow" alt="menu togle arrow" width="8" height="8"></img>
          </span >
        </div>
        <p className="text-sm text-gray-600 hover:text-black cursor-pointer">
          Log In
        </p>
      </div>
    </header>
  );
};

export default Header;

