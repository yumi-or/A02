import React from "react";
import Home3downloadSection from "../src/components/common/Home3downloadSection";
import Home3featureTextBlocks from "../src/components/common/Home3featureTextBlocks";
import Home3sectionGap from "../src/components/common/Home3sectionGap";
import Index3OnePageFeaturesSection from "../src/components/Index-3-OnePage/Index3OnePageFeaturesSection";
import Index3OnePageHeroArea from "../src/components/Index-3-OnePage/Index3OnePageHeroArea";
import Index3OnePageNewsSection from "../src/components/Index-3-OnePage/Index3OnePageNewsSection";
import Index3OnePageProcessTabSection from "../src/components/Index-3-OnePage/Index3OnePageProcessTabSection";
import Index3OnePageTestimonialSection from "../src/components/Index-3-OnePage/Index3OnePageTestimonialSection";
import Footer4 from "../src/layout/Footer/Footer4";
import Header3 from "../src/layout/Header/Header3";

const index3OnePage = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header3 />
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <Index3OnePageHeroArea />
            {/*====== Hero Area Start ======*/}
            {/*====== Features section start ======*/}
            <Index3OnePageFeaturesSection />
            {/*====== Features section End ======*/}
            {/*====== Process Area Start ======*/}
            <Index3OnePageProcessTabSection />
            {/*====== Process Area End ======*/}
            {/*====== Brand Section Start ======*/}
            <Home3sectionGap />
            {/*====== Brand Section End ======*/}
            {/*====== Features Text block Start =====*/}
            <Home3featureTextBlocks />
            {/*====== Features Text block End ======*/}
            {/*====== Testimonials area start ======*/}
            <Index3OnePageTestimonialSection />
            {/*====== Testimonials area End ======*/}
            {/*====== News Section start ======*/}
            <Index3OnePageNewsSection />
            {/*====== News Section End ======*/}
            {/*====== Download section Start ======*/}
            <Home3downloadSection />
            {/*====== Download section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer4 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default index3OnePage;
