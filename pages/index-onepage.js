import React from "react";
import HomeCounterSection from "../src/components/common/HomeCounterSection";
import HomeCTASection from "../src/components/common/HomeCTASection";
import HomeSkillSection from "../src/components/common/HomeSkillSection";
import IndexOnePageAboutSection from "../src/components/Index-OnePage/IndexOnePageAboutSection";
import IndexOnePageHeroArea from "../src/components/Index-OnePage/IndexOnePageHeroArea";
import IndexOnePageServiceArea from "../src/components/Index-OnePage/IndexOnePageServiceArea";
import IndexOnePageTeamSection from "../src/components/Index-OnePage/IndexOnePageTeamSection";
import IndexOnePageTestimonialsArea from "../src/components/Index-OnePage/IndexOnePageTestimonialsArea";
import Footer1 from "../src/layout/Footer/Footer1";
import Header6 from "../src/layout/Header/Header6";

const indexOnePage = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header6 />
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <IndexOnePageHeroArea />
            {/*====== Hero Area Start ======*/}
            {/*====== Service Area Start ======*/}
            <IndexOnePageServiceArea />
            {/*====== Service Area End ======*/}
            {/*====== About section Start ======*/}
            <IndexOnePageAboutSection />
            {/*====== About section End ======*/}
            {/*====== Counter area Start ======*/}
            <HomeCounterSection />
            {/*====== Counter area End ======*/}
            {/*====== Skill area Start ======*/}
            <HomeSkillSection />
            {/*====== Skill area End ======*/}
            {/*====== Team section Start ======*/}
            <IndexOnePageTeamSection />
            {/*====== Team section End ======*/}
            {/*====== CTA section Start ======*/}
            <HomeCTASection />
            {/*====== CTA section End ======*/}
            {/*====== Testimonials area start ======*/}
            <IndexOnePageTestimonialsArea />
            {/*====== Testimonials area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer1 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default indexOnePage;
