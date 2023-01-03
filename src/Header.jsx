import React from "react";

const Header = ({number,plus, minus}) => {
  return (
    <>
      <div className="w-full h-20 bg-blue-500 flex justify-between  ">
        <div className="w-1/4 h-full flex items-center justify-center text-5xl text-white">
          flipcart
        </div>
        <div className="w-1/4 h-full flex items-center justify-evenly">
          <span className="w-16 h-16 rounded-full relative" id="incdec">
            <span className="w-10 h-10 absolute bg-blue-500 text-white ml-16 flex justify-center items-center">{number}</span>
            <img
              className="w-16 h-16 rounded-full"
              src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-shopping-cart-icon-image_1166717.jpg"
              alt=""
            />
          </span>
          <span className="w-16 h-16 rounded-full relative">
            <i class="fa-solid fa-bell absolute pl-14 text-red-600 text-3xl"></i>
            <img className="w-16 h-16 rounded-full" src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png" alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
