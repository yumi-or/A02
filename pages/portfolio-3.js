import React from "react";
import PortfolioBGC from "../src/components/common/PortfolioBGC";
import Portfolio3Area from "../src/components/Portfolio-3/Portfolio3Area";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const portfolio3 = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <PortfolioBGC />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Portfolio Area Start ======*/}
            <Portfolio3Area />
            {/*====== Portfolio Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default portfolio3;
