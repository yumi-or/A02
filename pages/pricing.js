import React from "react";
import ServicePricingSection from "../src/components/common/ServicePricingSection";
import PricingBreadcrumbSection from "../src/components/Pricing/PricingBreadcrumbSection";
import PricingPricingSection from "../src/components/Pricing/PricingPricingSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const pricing = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <PricingBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Pricing Section Start ======*/}
            <PricingPricingSection />
            {/*====== Pricing Section End ======*/}
            {/*====== Pricing Section Start ======*/}
            <ServicePricingSection />
            {/*====== Pricing Section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default pricing;
