import React from "react";
import FaqArea from "../src/components/Faq/FaqArea";
import FaqBreadcrumbSection from "../src/components/Faq/FaqBreadcrumbSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const faq = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <FaqBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== FAQ AREA Start ======*/}
            <FaqArea />
            {/*====== FAQ AREA End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default faq;
