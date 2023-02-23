import React from "react";
import ShopDetailsBreadcrumbSection from "../src/components/Shop-Details/ShopDetailsBreadcrumbSection";
import ShopDetailsShopArea from "../src/components/Shop-Details/ShopDetailsShopArea";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const shopDetails = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <ShopDetailsBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Shop Area Start ======*/}
            <ShopDetailsShopArea />
            {/*====== Shop Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default shopDetails;
