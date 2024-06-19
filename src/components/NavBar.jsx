import React, { useEffect } from "react";
import { ReactComponent as HamBurger } from "../assets/svg/HamBurger.svg";
const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("secondDiv");
      if (window.scrollY > 0) {
        nav.classList.add("sticky", "top-0");
      } else {
        nav.classList.remove("sticky", "top-0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="secondDiv"
      className="w-full bg-custom-bg border-t border-custom-border z-50"
    >
      <div className="w-10/12 sm:w-4/5 h-[60px] mx-auto px-4 flex items-center justify-between ">
        <div className="flex items-center">
          <button className="xl:hidden focus:outline-none">
            <HamBurger className="w-4 h-4" />
          </button>
          <a
            href="/"
            className="flex items-center text-[25px] ml-3 cursor-pointer"
          >
            <img
              id="hfNavbarlogo"
              src="https://assets.www.happyfox.com/v2/images/site-nav/HD-logo.svg"
              alt="happyfox logo"
              width="30"
              height="30"
              className="hf-productnav__logo  w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
            />
            <span className="ml-1 sm:ml-3  text-[18px] sm:text-[25px] navbar-font font-sans text-black ">helpdesk</span>
          </a>
        </div>
        <div className="hidden nav:flex flex-row justify-end items-center nav:ml-52  ">
          {["Features", "Solutions", "Pricing", "Resources"].map((item) => (
            <div key={item} className="px-4">
              <div className="py-2 px-4 hover:bg-white hover:cursor-pointer hover:rounded-xl transition-all">
                {item}
                {item !== "Pricing" && (
                  <img
                    src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png"
                    alt="menu toggle arrow"
                    className="inline-block w-[10px] h-[10px] ml-1"
                  />
                )}
              </div>
            </div>
          ))}
        
        </div>

        <div className="flex justify-end items-center w-[94px] h-[60px]">
          <button className="bg-[#ff3a3a] text-white font-medium text-[14px] py-1 px-2 rounded shadow-md  hover:translate-y-1 transition ease-out duration-300">
            Get a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
