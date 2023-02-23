import React from "react";
import Home4brandSection from "../src/components/common/Home4brandSection";
import Home4ctaSectionThree from "../src/components/common/Home4ctaSectionThree";
import Home4DownloadSectionTwo from "../src/components/common/Home4DownloadSectionTwo";
import Home4featureTextBlockTwo from "../src/components/common/Home4featureTextBlockTwo";
import Home4processTabSection from "../src/components/common/Home4processTabSection";
import Index4FeaturesSection from "../src/components/Index4/Index4FeaturesSection";
import Index4FeaturesTextBlockTwo from "../src/components/Index4/Index4FeaturesTextBlockTwo";
import Index4HeroArea from "../src/components/Index4/Index4HeroArea";
import Index4NewsSection from "../src/components/Index4/Index4NewsSection";
import Index4ProcessSection from "../src/components/Index4/Index4ProcessSection";
import Footer5 from "../src/layout/Footer/Footer5";
import Header1 from "../src/layout/Header/Header1";

const index4 = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <Index4HeroArea />
            {/*====== Hero Area Start ======*/}
            {/*====== Features section start ======*/}
            <Index4FeaturesSection />
            {/*====== Features section End ======*/}
            {/*====== Features Text block Start =====*/}
            <Index4FeaturesTextBlockTwo />
            {/*====== Features Text block End ======*/}
            {/*====== Brand Section Start ======*/}
            <Home4brandSection />
            {/*====== Brand Section End ======*/}
            {/*====== Process Tab Area Start ======*/}
            <Home4processTabSection />
            <Index4ProcessSection />
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
            <Index4NewsSection />
            {/*====== News Section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer5 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default index4;
