import React from "react";
import Home2brandSectionTwo from "../src/components/common/Home2brandSectionTwo";
import Home2ctaSectionTwo from "../src/components/common/Home2ctaSectionTwo";
import Home2skillSection from "../src/components/common/Home2skillSection";
import Index2AboutSection from "../src/components/Index2/Index2AboutSection";
import Index2NewsSection from "../src/components/Index2/Index2NewsSection";
import Index2PortfolioSection from "../src/components/Index2/Index2PortfolioSection";
import Index2ServiceArea from "../src/components/Index2/Index2ServiceArea";
import Index2TestimonialSection from "../src/components/Index2/Index2TestimonialSection";
import Footer3 from "../src/layout/Footer/Footer3";
import Header1 from "../src/layout/Header/Header1";

const index2 = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== About section Start ======*/}
            <Index2AboutSection />
            {/*====== About section End ======*/}
            {/*====== Service Area Start ======*/}
            <Index2ServiceArea />
            {/*====== Service Area End ======*/}
            {/*====== CTA Start ======*/}
            <Home2ctaSectionTwo />
            {/*====== CTA End ======*/}
            {/*====== Skill area Start ======*/}
            <Home2skillSection />
            {/*====== Skill area End ======*/}
            {/*====== Brand section Start ======*/}
            <Home2brandSectionTwo />
            {/*====== Brand section End ======*/}
            {/*====== Portfolio Arae Start ======*/}
            <Index2PortfolioSection />
            {/*====== Portfolio Arae End ======*/}
            {/*====== Testimonials area start ======*/}
            <Index2TestimonialSection />
            {/*====== Testimonials area End ======*/}
            {/*====== News Section start ======*/}
            <Index2NewsSection />
            {/*====== News Section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer3 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default index2;
