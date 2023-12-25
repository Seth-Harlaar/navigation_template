import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavigationContext } from "../../components/navigationProvider";

function HomeBanner ({isSmallScreen}) {
  const height = isSmallScreen ? ' h-60 ' : ' h-[400px] ';
  const padding = isSmallScreen ? ' pt-[20px] ' : ' pt-[180px] ';
  const backgroundImage = " bg-[url('./assets/pictures/garage.jpg')] bg-cover bg-center bg-no-repeat ";

  // const { navigateTo } = useContext(NavigationContext);
  function navigateTo() {
    
  }

  return(
    <>
      <div className={"z-0 relative bg-green-400 h-[90vh] w-full " +  backgroundImage}>
        <div className={"bg-highlightOpac h-full w-full px-12 " + padding }>
          {/* bg image */}

          {/* floating textbox */}
          <div className="absolute h-20 w-[300px] bottom-10 left-10 bg-lightBg px-3 flex flex-col justify-center opacity-100">
            <div className="text-lg">
              Crafting Dreams, Building Homes: <br/> Cravan Construction
            </div>

            {/* floating portfolio button */}
            <div className="absolute bottom-0 right-5 translate-y-2/3 
                bg-highlight py-1 px-2 flex items-center hover:cursor-pointer 
                hover:bg-highlightHover"
                onClick={() => navigateTo('Portfolio')}>
              <div className="mr-2">
                View Portfolio
              </div>
              <FaArrowRight/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBanner;