import React from "react";
import Home3downloadSection from "../src/components/common/Home3downloadSection";
import Home3featureTextBlocks from "../src/components/common/Home3featureTextBlocks";
import Home3sectionGap from "../src/components/common/Home3sectionGap";
import Index3FeaturesSection from "../src/components/Index3/Index3FeaturesSection";
import Index3HeroArea from "../src/components/Index3/Index3HeroArea";
import Index3NewsSection from "../src/components/Index3/Index3NewsSection";
import Index3ProcessTabSection from "../src/components/Index3/Index3ProcessTabSection";
import Index3TestimonialSection from "../src/components/Index3/Index3TestimonialSection";
import Footer4 from "../src/layout/Footer/Footer4";
import Header4 from "../src/layout/Header/Header4";

const index3 = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header4 />
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <Index3HeroArea />
            {/*====== Hero Area Start ======*/}
            {/*====== Features section start ======*/}
            <Index3FeaturesSection />
            {/*====== Features section End ======*/}
            {/*====== Process Area Start ======*/}
            <Index3ProcessTabSection />
            {/*====== Process Area End ======*/}
            {/*====== Brand Section Start ======*/}
            <Home3sectionGap />
            {/*====== Brand Section End ======*/}
            {/*====== Features Text block Start =====*/}
            <Home3featureTextBlocks />
            {/*====== Features Text block End ======*/}
            {/*====== Testimonials area start ======*/}
            <Index3TestimonialSection />
            {/*====== Testimonials area End ======*/}
            {/*====== News Section start ======*/}
            <Index3NewsSection />
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

export default index3;
