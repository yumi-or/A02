import HomeCounterSection from "../src/components/common/HomeCounterSection";
import HomeCTASection from "../src/components/common/HomeCTASection";
import HomeSkillSection from "../src/components/common/HomeSkillSection";
import IndexAboutSection from "../src/components/Index/IndexAboutSection";
import IndexHeroArea2 from "../src/components/Index/IndexHeroArea2";
import IndexServiceArea from "../src/components/Index/IndexServiceArea";
import IndexTeamSection from "../src/components/Index/IndexTeamSection";
import IndexTestimonialsArea from "../src/components/Index/IndexTestimonialsArea";
import Footer1 from "../src/layout/Footer/Footer1";
import HomeHeader from "../src/layout/Header/HomeHeader";

const pst = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <HomeHeader />
            {/*====== Header End ======*/}
            {/*====== Hero Area Start ======*/}
            <IndexHeroArea2 />
            {/*====== Hero Area Start ======*/}
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
};

export default pst;