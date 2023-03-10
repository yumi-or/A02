import Link from "next/link";
import React from "react";
import {Button} from "react-bootstrap";
import HomeHeader from "../src/layout/Header/HomeHeader";
// import Fade from "react-reveal/Fade";

const Home = () => {
    return (
        <section id="home" className="news-section grey-bg extra-gap-top" >
            <HomeHeader />
            <div className="container">
                <Link href="Home">
                    <Button>Chinese</Button>
                </Link>
                <div className="section-title title-style-two mb-30">
                    <span className="title-tag">Home</span>
                    <h2 className="title">Waht's New</h2>
                </div>
                <div className="row latest-news-boxes">
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="latest-news-box mt-30">
                                    <img src="img/service/16.png" alt="iimage" />
                                    {/*<div*/}
                                    {/*    className="news-thumb"*/}
                                    {/*    style={{*/}
                                    {/*        backgroundImage:*/}
                                    {/*            "url(img/latest-news/01.jpg)",*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                    <div className="content">
                                        <ul className="post-meta">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-calendar-alt" />
                                                        14th Nov 2022
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="admin">
                                                <Link href="">
                                                    <a
                                                        // onClick={(e) => {
                                                        //     e.preventDefault();
                                                        // }}
                                                    >
                                                        Admin
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                        <h4>
                                            <Link href="/kind">
                                                <a>
                                                    ?????????????????????K1???2023/24 ??????????????????
                                                </a>
                                            </Link>
                                        </h4>
                                        <p>
                                            ?????????????????? 2023/24 ?????????????????????????????????K1????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*#2*/}
                            <div className="col-md-6">
                                <div className="latest-news-box mt-30">
                                    <div
                                        className="news-thumb"
                                        style={{
                                            backgroundImage:
                                                "url(img/latest-news/02.jpg)",
                                        }}
                                    />
                                    <div className="content">
                                        <ul className="post-meta">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-calendar-alt" />
                                                        13th Nov 2022
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="admin">
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        Admin
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                        <h4>
                                            <Link href="/primary">
                                                <a>
                                                    ???????????????????????????
                                                </a>
                                            </Link>
                                        </h4>
                                        <p>
                                            ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*#3-1*/}
                    <div className="col-xl-4">
                        <div className="latest-news-side mt-30">
                            <div className="single-side-box">
                                {/*<div*/}
                                {/*    className="news-thumb"*/}
                                {/*    style={{*/}
                                {/*        backgroundImage:*/}
                                {/*            "url(img/latest-news/01.jpg)",*/}
                                {/*    }}*/}
                                {/*/>*/}
                                <div className="content">
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i className="fal fa-calendar-alt" />
                                                    22th Oct 2022
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="admin">
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    Admin
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="https://www.edb.gov.hk/tc/student-parents/newly-arrived-children/about-newly-arrived-children/index.html">
                                            <a>
                                                ????????????????????????????????????
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="single-side-box">
                                {/*<div*/}
                                {/*    className="news-thumb"*/}
                                {/*    style={{*/}
                                {/*        backgroundImage:*/}
                                {/*            "url(img/latest-news/01.jpg)",*/}
                                {/*    }}*/}
                                {/*/>*/}
                                <div className="content">
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i className="fal fa-calendar-alt" />
                                                    23th Set 2022
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="admin">
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    Admin
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="https://www.edb.gov.hk/tc/edu-system/special/index.html">
                                            <a>
                                                ????????????
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="single-side-box">
                                {/*<div*/}
                                {/*    className="news-thumb"*/}
                                {/*    style={{*/}
                                {/*        backgroundImage:*/}
                                {/*            "url(img/latest-news/01.jpg)",*/}
                                {/*    }}*/}
                                {/*/>*/}
                                <div className="content">
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i className="fal fa-calendar-alt" />
                                                    28th Oct 2022
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="admin">
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    Admin
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="https://www.info.gov.hk/gia/general/202210/28/P2022102700632.htm">
                                            <a>
                                                ????????????????????????????????????????????????????????????????????????????????????
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                            {/*<Link href="/blog">*/}
                            {/*    <a className="load-more-btn">*/}
                            {/*        <i className="fal fa-newspaper" /> More News*/}
                            {/*    </a>*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
