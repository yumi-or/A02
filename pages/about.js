import React from "react";
import AboutAboutSection from "../src/components/About/AboutAboutSection";
import AboutBreadcrumbSection from "../src/components/About/AboutBreadcrumbSection";
import AboutNewsSection from "../src/components/About/AboutNewsSection";
import AboutServiceArea from "../src/components/About/AboutServiceArea";
import AboutSkillSection from "../src/components/About/AboutSkillSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const about = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <AboutBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== About section Start ======*/}
            <AboutAboutSection />
            {/*====== About section End ======*/}
            {/*====== Service Area Start ======*/}
            <AboutServiceArea />
            {/*====== Service Area End ======*/}
            {/*====== Skill area Start ======*/}
            <AboutSkillSection />
            {/*====== Skill area End ======*/}
            {/*====== News Section start ======*/}
            <AboutNewsSection />
            {/*====== News Section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default about;
