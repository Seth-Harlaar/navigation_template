import React, { useState } from "react";

import logoPic from '../assets/logo.png';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";





function Drawer ({closeDrawer}) {
  function navigateTo(){

  }

  // styles
  const menuItemStyle = 'bg-darkBgLight text-white text-lg my-3 px-5 py-2' + 
    ' hover:bg-darkBgHover hover:cursor-pointer';

  return (
    <>
      <div className="z-50 fixed h-screen w-screen bg-drawerClearBg">
        {/* menu */}
        <div className="z-50 absolute right-0 flex flex-col h-full bg-darkBg w-40 pt-12">
          <NavLink className={menuItemStyle} to='services'>Services</NavLink>
          <NavLink className={menuItemStyle} to='portfolio'>Portfolio</NavLink>
          <NavLink className={menuItemStyle} to='/'>Home</NavLink>
          <NavLink className={menuItemStyle} to='testimonials'>Testimonials</NavLink>
          <NavLink className={menuItemStyle} to='contact'>Contact Us</NavLink>

          {/* the close button */}
          <div className="absolute top-2 right-2 text-white h-8 w-8 hover:cursor-pointer" onClick={closeDrawer}>
            <IoIosClose className="h-full w-full"/>
          </div>

          {/* logo at bottom */}
          <div className="absolute bottom-0 left-0 h-12 w-full flex items-center px-5 mb-5 justify-between text-white">
            <img src={logoPic} className='w-12 h-12'/>
            <div>
              Cravan
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function FloatingLogo() {
  return (
    <>
      {/* logo at bottom */}
      <div className="z-50 fixed top-3 left-3 w-28 h-12 flex items-center justify-between text-white">
      <img src={logoPic} className='w-12 h-12'/>
      <div>
        Cravan
      </div>
    </div>
    </>
  )
}


function HamMenuButton ({openDrawer}) {
  return (
    <>
      <div className="z-50 fixed top-3 right-5 h-6 w-6 hover:cursor-pointer text-darkBg" onClick={openDrawer}>
        <GiHamburgerMenu className="h-full w-full"/>
      </div>
    </>
  )
}



function SmallNav () {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return(
    <>
      <FloatingLogo/>
      {drawerOpen ? <Drawer closeDrawer={toggleDrawer}/> : <HamMenuButton openDrawer={toggleDrawer}/>}
    </>
  )
}


export default SmallNav;