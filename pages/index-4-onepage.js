import React from "react";
import Home4brandSection from "../src/components/common/Home4brandSection";
import Home4ctaSectionThree from "../src/components/common/Home4ctaSectionThree";
import Home4DownloadSectionTwo from "../src/components/common/Home4DownloadSectionTwo";
import Home4featureTextBlockTwo from "../src/components/common/Home4featureTextBlockTwo";
import Home4processTabSection from "../src/components/common/Home4processTabSection";
import Index4OnePageFeaturesSection from "../src/components/Index-4-OnePage/Index4OnePageFeaturesSection";
import Index4OnePageFeaturesTextBlockTwo from "../src/components/Index-4-OnePage/Index4OnePageFeaturesTextBlockTwo";
import Index4OnePageHeroArea from "../src/components/Index-4-OnePage/Index4OnePageHeroArea";
import Index4OnePageNewsSection from "../src/components/Index-4-OnePage/Index4OnePageNewsSection";
import Index4OnePageProcessSection from "../src/components/Index-4-OnePage/Index4OnePageProcessSection";
import Footer5 from "../src/layout/Footer/Footer5";
import Header5 from "../src/layout/Header/Header5";

const index4OnePage = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header5 />
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <Index4OnePageHeroArea />
            {/*====== Hero Area Start ======*/}
            {/*====== Features section start ======*/}
            <Index4OnePageFeaturesSection />
            {/*====== Features section End ======*/}
            {/*====== Features Text block Start =====*/}
            <Index4OnePageFeaturesTextBlockTwo />
            {/*====== Features Text block End ======*/}
            {/*====== Brand Section Start ======*/}
            <Home4brandSection />
            {/*====== Brand Section End ======*/}
            {/*====== Process Tab Area Start ======*/}
            <Home4processTabSection />
            <Index4OnePageProcessSection />
            {/*====== Process Area End ======*/}
            {/*====== Features Text block Start =====*/}
            <Home4featureTextBlockTwo />
            {/*====== Features Text block End ======*/}
            {/*====== CTA Start ======*/}
            <Home4ctaSectionThree />
            {/*====== CTA End ======*/}
            {/*====== Download section Start ======*/}
            <Home4DownloadSectionTwo />
            {/*====== Download section End ======*/}
            {/*====== News Section start ======*/}
            <Index4OnePageNewsSection />
            {/*====== News Section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer5 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default index4OnePage;
