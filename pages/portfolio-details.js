import React from "react";
import PortfolioDetailsArea from "../src/components/Portfolio-Details/PortfolioDetailsArea";
import PortfolioDetailsBreadcrumbSection from "../src/components/Portfolio-Details/PortfolioDetailsBreadcrumbSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const portfolioDetails = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <PortfolioDetailsBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Portfolio Area Start ======*/}
            <PortfolioDetailsArea />
            {/*====== Portfolio Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default portfolioDetails;
