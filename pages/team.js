import React from "react";
import TeamBreadcrumbSection from "../src/components/Team/TeamBreadcrumbSection";
import TeamNewsletter from "../src/components/Team/TeamNewsletter";
import TeamSkillArea from "../src/components/Team/TeamSkillArea";
import TeamTeamSection from "../src/components/Team/TeamTeamSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const team = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <TeamBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Team section Start ======*/}
            <TeamTeamSection />
            {/*====== Team section End ======*/}
            {/*====== Skill area Start ======*/}
            <TeamSkillArea />
            {/*====== Skill area End ======*/}
            {/*====== Newsletter Start ======*/}
            <TeamNewsletter />
            {/*====== Newsletter End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default team;
