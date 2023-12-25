import React, { useState, useEffect } from 'react';
import {Route, Routes } from 'react-router-dom';

// globals
import { scrSmall } from '../utils/globals';

// navigators
import LargeNav from '../components/largeNav';
import SmallNav from '../components/smallNav';

// pages
import Home from '../pages/homeComponents/home';
import Portfolio from '../pages/portfolioComponents/portfolio';
import Services from '../pages/serviceComponents/services';
import Testimonials from '../pages/testimonialComponents/testimonials';
import ContactUs from '../pages/contactUsComponents/contactUs';





function Main() {
  // const { pageIndex, currentRoute } = useContext(NavigationContext);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // const PageComponent = pageIndex[currentRoute];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < scrSmall);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isSmallScreen ? <LargeNav/> : <SmallNav/>}
      <Routes>
        <Route index element={<Home/>} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default Main;