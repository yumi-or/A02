import React from "react";
import BlogSingleBlogArea from "../src/components/Blog-Single/BlogSingleBlogArea";
import BlogSingleBreadcrumbSection from "../src/components/Blog-Single/BlogSingleBreadcrumbSection";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const blogSingle = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <BlogSingleBreadcrumbSection />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Blog Area Start ======*/}
            <BlogSingleBlogArea />
            {/*====== Blog Area End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default blogSingle;
