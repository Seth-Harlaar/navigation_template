import React from "react";
import logoPic from '../assets/logo.png';
import { NavLink } from "react-router-dom";


function LargeNav() {
  // const sideLinkStyle = "text-yellow-500 hover:text-gray-500 text-center bg-red-700 flex-none w-[120px]";
  const linkWrapperStyle = "h-full w-[120px] justify-center flex items-center " +
    " bg-darkBg hover:bg-darkBgHover ";

  return (
    <>
    {/* the whole thing */}
      <div className="fixed z-50 w-full text-white">

        {/* the other buttons */}
        <div className="">
          <div className="flex justify-center items-center bg-darkBg min-w-[640px] h-24">
            <NavLink className={linkWrapperStyle} to='services'>Services</NavLink>
            <NavLink className={linkWrapperStyle} to='portfolio'>Portfolio</NavLink>
            <div className='w-40'></div>
            <NavLink className={linkWrapperStyle} to='testimonials'>Testimonials</NavLink>
            <NavLink className={linkWrapperStyle} to='contact'>Contact Us</NavLink>
          </div>
        </div>

        {/* logo and home link in middle */}
        <NavLink to="/"
          className='fixed top-0 left-1/2 transform -translate-x-1/2 h-40 w-40 
            flex flex-col items-center justify-center bg-darkBgLight
            hover:cursor-pointer'>
          <img src={logoPic} alt="" className='h-24 w-24'/>
          <div>
            Cravan Construction
          </div>
          <hr className="border w-10/12" />
          <div>
            Home
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default LargeNav;