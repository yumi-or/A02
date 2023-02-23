import dynamic from "next/dynamic";
import React from "react";
import PortfolioBGC from "../src/components/common/PortfolioBGC";
// import Portfolio2Area from "../src/components/Portfolio-2/Portfolio2Area";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const Portfolio2Area = dynamic(
  () => import("../src/components/Portfolio-2/Portfolio2Area"),
  {
    ssr: false,
  }
);

const portfolio2 = () => {
  return (
    <>
      {/*====== Header Start ======*/}
      <Header1 />
      {/*====== Header End ======*/}
      {/*====== Breadcrumb section Start ======*/}
      <PortfolioBGC />
      {/*====== Breadcrumb section End ======*/}
      {/*====== Portfolio Area Start ======*/}
      <Portfolio2Area />
      {/*====== Portfolio Area End ======*/}
      {/*====== Footer Start ======*/}
      <Footer2 />
      {/*====== Footer End ======*/}
    </>
  );
};

export default portfolio2;
