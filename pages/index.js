import HomeCounterSection from "../src/components/common/HomeCounterSection";
import HomeCTASection from "../src/components/common/HomeCTASection";
import HomeSkillSection from "../src/components/common/HomeSkillSection";
import IndexAboutSection from "../src/components/Index/IndexAboutSection";
import IndexHeroArea from "../src/components/Index/IndexHeroArea";
import IndexServiceArea from "../src/components/Index/IndexServiceArea";
import IndexTeamSection from "../src/components/Index/IndexTeamSection";
import IndexTestimonialsArea from "../src/components/Index/IndexTestimonialsArea";
import Footer1 from "../src/layout/Footer/Footer1";
import HomeHeader from "../src/layout/Header/HomeHeader";

import Home1 from "../src/components/fyp_projects/Home";
import School from "../src/components/fyp_projects/School";
import AI from "../src/components/fyp_projects/AI";
import Allowance from "../src/components/fyp_projects/Allowance";
import AboutUs from "../src/components/fyp_projects/AboutUs";
import Discuss from "../src/components/fyp_projects/Discuss";

export default function Home() {
    return (
        <>
            {/*====== Header Start ======*/}
            <HomeHeader />
            {/*====== Header End ======*/}
            {/*====== FYP Start ======*/}
            <Home1 />

            <School />
            <AI />
            <Allowance />
            <AboutUs />
            <Discuss />
            {/*====== FYP End ======*/}
            {/*====== Hero Area Start ======*/}
            {/*<IndexHeroArea />*/}
            {/*====== Hero Area End ======*/}
            {/*====== Service Area Start ======*/}
            {/*<IndexServiceArea />*/}
            {/*====== Service Area End ======*/}
            {/*====== About section Start ======*/}
            {/*<IndexAboutSection />*/}
            {/*====== About section End ======*/}
            {/*====== Counter area Start ======*/}
            {/*<HomeCounterSection />*/}
            {/*====== Counter area End ======*/}
            {/*====== Skill area Start ======*/}
            {/*<HomeSkillSection />*/}
            {/*====== Skill area End ======*/}
            {/*====== Team section Start ======*/}
            {/*<IndexTeamSection />*/}
            {/*====== Team section End ======*/}
            {/*====== CTA section Start ======*/}
            {/*<HomeCTASection />*/}
            {/*====== CTA section End ======*/}
            {/*====== Testimonials area start ======*/}
            {/*<IndexTestimonialsArea />*/}
            {/*====== Testimonials area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer1 />
            {/*====== Footer End ======*/}
        </>
    );
}
