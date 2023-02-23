import React from "react";
import ShopArea from "../src/components/Shop/ShopArea";
import ShopBreadcrumbSection from "../src/components/Shop/ShopBreadcrumbSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const shop = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <ShopBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Shop Area Start ======*/}
            <ShopArea />
            {/*====== Shop Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default shop;
