import React from "react";
import ServiceProcessSection from "../src/components/common/ServiceProcessSection";
import ProcessBreadcrumbSection from "../src/components/Process/ProcessBreadcrumbSection";
import ProcessSection1 from "../src/components/Process/ProcessSection1";
import ProcessSection2 from "../src/components/Process/ProcessSection2";
import ProcessTestimonialsArea from "../src/components/Process/ProcessTestimonialsArea";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const process = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <ProcessBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Process Area Start ======*/}
            <ProcessSection1 />
            <ServiceProcessSection />
            <ProcessSection2 />
            {/*====== Process Area End ======*/}
            {/*====== Testimonials area start ======*/}
            <ProcessTestimonialsArea />
            {/*====== Testimonials area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default process;
