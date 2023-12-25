import React from "react";



function PageBanner ({title, description, isSmallScreen}) {
  const heightAndPadding = isSmallScreen ? ' h-52 pt-[20px]' : ' h-72 pt-[180px]';
  return (
    <>
      {/* {!isSmallScreen ? <Divider/> : null} */}
      <div className={"bg-yellow-600 px-12" + heightAndPadding} >
        <div className="text-6xl">
          {title}
        </div>
        <div className="text-4xl">
          {description}
        </div>
      </div>
    </>
  )
}

export default PageBanner;