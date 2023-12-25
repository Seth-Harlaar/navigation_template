import React from "react";
import HomeServiceBlocks from "./homeServiceBlocks";
import HomeBanner from "./homeBanner";

function Home({isSmallScreen}) {
  return (
    <div>
      <HomeBanner/>
      <HomeServiceBlocks isSmallScreen={isSmallScreen}/>
    </div>
  );
}

export default Home;
