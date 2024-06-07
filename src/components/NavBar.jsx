import React from "react";

const NavBar = () =>{
    return(
    <nav id="secondDiv" className="w-full bg-custom-bg border-t border-custom-border">
      <div className="nav-bar w-[1140px] h-[60px] mx-auto px-4 flex justify-between items-center">
        <div className="w-[18%] h-[60px] flex items-center">
        
          <a href="/" className="flex items-center text-[25px] ml-3 cursor-pointer">
            <img
              id="hfNavbarlogo"
              src="https://assets.www.happyfox.com/v2/images/site-nav/HD-logo.svg"
              alt="happyfox logo"
              width="30"
              height="30"
              className="hf-productnav__logo w-[30px] h-[30px]"
            />
            <span className="helpdesk pl-3 text-[18px]">helpdesk</span>
          </a>
        </div>
        <div className="nav-inside-bar flex">
          {["Features", "Solutions", "Pricing", "Resources"].map((item) => (
            <div key={item} className="px-4">
              <div className="nav-buttons py-2 px-4 hover:bg-white hover:cursor-pointer hover:rounded transition-all">
                {item}
                {item !== "Pricing" && (
                  <img
                    src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png"
                    alt="menu toggle arrow"
                    className="hf-productnav__menu-arrow inline-block w-[10px] h-[10px] ml-1"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center w-[9%] h-[60px]">
          <button className="first-demo bg-[#ff3a3a] text-white font-medium text-[14px] py-1 px-2 rounded shadow-md transition-all">
            Get a Demo
          </button>
        </div>
      </div>
    </nav>
    )
}

export default NavBar;