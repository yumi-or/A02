import React from "react";
import Home2brandSectionTwo from "../src/components/common/Home2brandSectionTwo";
import Home2ctaSectionTwo from "../src/components/common/Home2ctaSectionTwo";
import Home2skillSection from "../src/components/common/Home2skillSection";
import Index2OnePageAboutSection from "../src/components/Index-2-OnePage/Index2OnePageAboutSection";
import Index2OnePageHeroArea from "../src/components/Index-2-OnePage/Index2OnePageHeroArea";
import Index2OnePageNewsSection from "../src/components/Index-2-OnePage/Index2OnePageNewsSection";
import Index2OnePagePortfolioSection from "../src/components/Index-2-OnePage/Index2OnePagePortfolioSection";
import Index2OnePageServiceArea from "../src/components/Index-2-OnePage/Index2OnePageServiceArea";
import Index2OnePageTestimonialSection from "../src/components/Index-2-OnePage/Index2OnePageTestimonialSection";
import Footer3 from "../src/layout/Footer/Footer3";
import Header2 from "../src/layout/Header/Header2";

const index2OnePage = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header2 />
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <Index2OnePageHeroArea />
            {/*====== Hero Area Start ======*/}
            {/*====== About section Start ======*/}
            <Index2OnePageAboutSection />
            {/*====== About section End ======*/}
            {/*====== Service Area Start ======*/}
            <Index2OnePageServiceArea />
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
            <Index2OnePagePortfolioSection />
            {/*====== Portfolio Arae End ======*/}
            {/*====== Testimonials area start ======*/}
            <Index2OnePageTestimonialSection />
            {/*====== Testimonials area End ======*/}
            {/*====== News Section start ======*/}
            <Index2OnePageNewsSection />
            {/*====== News Section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer3 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default index2OnePage;
