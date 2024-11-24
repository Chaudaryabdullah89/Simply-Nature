import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context/Shopcontext";

import assets from "../assets/assets";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [visible, setVisible] = useState(false);
const {setShowsearch ,getCartCount } = useContext(ShopContext);
  return (
    <>
      <div className="max-w-[1280px] mx-auto  items-center hidden lg:block  bg-trasparent">
        <div className="flex flex-row justify-around mt-5 ">
          <div
            style={{ display: "flex" }}
            className="flex gap-2 flex-row items-center "
          >
            <div>
              <img
                src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg"
                alt=""
                className="w-14 "
              />
            </div>
            <div>
              <p className=" text-2xl">Simply Nature</p>
            </div>
          </div>
          <div className="flex gap-16 mt-3  transition-all ">
            <div className="flex gap-6 mt-3">
              <div className="flex flex-col">
                <NavLink
                  to="/"
                  className="text-md text-gray-500 hover:text-red-600"
                >
                  Home
                </NavLink>
                <hr hidden />
              </div>
              <div className="relative group flex flex-col">
  {/* Shop Link */}
  <div className="flex items-center gap-2 cursor-pointer">
    <NavLink
      to="/Shop"
      className="text-md text-gray-500  hover:text-red-600"
    >
      Shop
    </NavLink>
    {/* <i className="text-xl ri-arrow-down-s-line"></i> */}
  </div>

  {/* Dropdown */}
  {/* <div className=" border-top-2 border-red-600 absolute left-0 top-full -mt-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 w-40 z-10">
    <Link to={`/plant-store-02/product-category/plants/`}
      className="block px-4 py-2 text-gray-500 hover:text-red-600 transition-all  "
    >
      Plants
    </Link>
    <Link
      to="plant-store-02/product-category/cactus/"
      className="block px-4 py-2 text-gray-500 hover:text-red-600 transition-all   "
    >
      Cactus
    </Link>
  </div> */}
</div>

              <div className="flex flex-col">
                <NavLink
                  to="/aboutus"
                  className="text-md text-gray-500 hover:text-red-600"
                >
                  About Us
                </NavLink>
                <hr hidden />
              </div>

              <div className="flex flex-col">
                <NavLink
                  to="/promotion"
                  className="text-md text-gray-500 hover:text-red-600"
                >
                  Promotion
                </NavLink>
                <hr hidden />
              </div>

              <div className="flex flex-col">
                <NavLink
                  to="/blog"
                  className="text-md text-gray-500 hover:text-red-600"
                >
                  Blog
                </NavLink>
                <hr hidden />
              </div>

              <div className="flex flex-col">
                <NavLink
                  to="/contact"
                  className="text-md text-gray-500 hover:text-red-600"
                >
                  Contact
                </NavLink>
                <hr hidden />
              </div>
            </div>
            <div className="flex gap-6 mt-3">
              <div className="flex gap-1 text-red-600 font-bold">
                <p>0.00$</p>
                <NavLink
                  to="/cart"
                  className="text-md text-white hover:text-gray-900"
                >
                  <i className="ri-shopping-cart-line text-red-600 text-bold font-bold"></i>
                  <p
                    style={{ top: "-30px" }}
                    className=" relative top-[30px] bg-red-400  rounded-full left-3 text-center pb-2 justify-center  items-center h-5 w-5"
                  >
                    <span className=" relative text-sm top[-6px] ci-design ">{getCartCount()}</span>
                  </p>
                </NavLink>
              </div>
              <div className="flex gap-2 mt-[2px]" >
                <img src={assets.search_icon}  className= " cursor-pointer w-[18px] h-[18px] " alt="" onClick={()=>{setShowsearch(true)}} />
              <NavLink
                to="/account"
                className="text-md text-gray-500 hover:text-gray-900"
              >
                <i className="ri-user-line w-[22px] font-bold h-[22px] text-2xl mb-3 relative bottom-[7px]  "></i>
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="flex justify-between mt-0  lg:hidden z-10">
        <div
          style={{ display: "flex" }}
          className="flex gap-2 flex-row items-center p-4 "
        >
          <div>
            <img
              src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg"
              alt=""
              className="w-8 "
            />
          </div>
          <div>
            <p className=" text-sm">Simply Nature</p>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-5 sm:gap-10 p-4">
          <i
            className="ri-menu-line text-3xl text-gray-600 hover:text-red-600 cursor-pointer mt-[9px]"
            onClick={() => setMenu(true)}
          ></i>
          <div className="cart-value">
            <div className="flex gap-1 text-red-600 font-bold mt-4">
              <p>0.00$</p>
              <NavLink
                to="/cart"
                className="text-md text-gray-500 hover:text-gray-900"
              >
                <i className="ri-shopping-cart-line text-red-600 text-bold font-bold"></i>
                <p
                  style={{ top: "-30px" }}
                  className=" relative top-[30px] bg-red-400 rounded-full left-3 text-center pb-2 justify-center  items-center h-4 w-4"
                >
                  <span className=" relative top[-6px] ci-design ">{getCartCount()}</span>
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div
        className={` absolute top-0 right-0 h-screen bottom-0 overflow-hidden bg-white z-10  ${
          menu ? "overflow-hidden" : "overflow-auto"
        }  transition-all w-0 ${
          menu ? "w-full overflow-hidden" : "w-0 overflow-auto"
        }`}
      >
        <div className="flex  items-center">
          <i
            className="ri-arrow-left-line text-3xl text-gray-600 hover:text-red-600 cursor-pointer p-4"
            onClick={() => setMenu(false)}
          ></i>
          <p
            href=""
            onClick={() => setMenu(false)}
            className=" cursor-pointer -ml-4 text-lg font-bold text-red-600 pb-1 hover:text-black"
          >
            Back
          </p>
        </div>

        <div>
          <div className="flex  border-b flex-col gap-10 mt-1 overflow-y-hidden">
            <NavLink
              to="/"
              className="text-md text-gray-600 border-b  pl-6  hover:text-green-600 transition-all  "
              onClick={() => {
                setMenu(false);
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="text-md text-gray-600 border-b  pl-6  hover:text-green-600 transition-all "
              onClick={() => {
                setMenu(false);
              }}
            >
              Shop
            </NavLink>
            <NavLink
              to="/promotion"
              className="text-md text-gray-600 border-b  pl-6  hover:text-green-600 transition-all "
              onClick={() => {
                setMenu(false);
              }}
            >
              Promotion
            </NavLink>
            <NavLink
              to="/aboutus"
              className="text-md text-gray-600 border-b pl-6  hover:text-green-600 transition-all "
              onClick={() => {
                setMenu(false);
              }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className="text-md text-gray-600 border-b  pl-6  hover:text-green-600 transition-all "
              onClick={() => {
                setMenu(false);
              }}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="text-md text-gray-600 border-b  pl-6  hover:text-green-600 transition-all "
              onClick={() => {
                setMenu(false);
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
