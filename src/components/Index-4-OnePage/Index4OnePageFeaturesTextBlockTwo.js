import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const Index4OnePageFeaturesTextBlockTwo = () => {
    return (
        <section className="feature-text-block-two feature-shape-bg" id="about">
            <div className="container-fluid fluid-container-right">
                <div className="row align-items-center justify-content-center">
                    <Fade left>
                        <div className="col-xxl-7 col-lg-6 col-md-10 wow fadeInLeft">
                            <div className="block-img text-center mb-md-gap-50">
                                <img
                                    src="img/feature-text-block-2.jpg"
                                    alt="Features"
                                />
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-xxl-5 col-lg-6 col-md-10 wow fadeInRight">
                            <div className="block-text">
                                <div className="section-title title-style-four mb-30">
                                    <span className="title-tag">
                                        Track Customers
                                    </span>
                                    <h2 className="title">
                                        Powerful Tools For Your Customers
                                    </h2>
                                </div>
                                <p className="big-text">
                                    This is due to their excellent service,
                                    competitive pricing and customersupport.
                                    It’s throughly refresing to get such a
                                    personal touch.
                                </p>
                                <ul className="mt-50 chech-list">
                                    <li>
                                        <i className="fal fa-check" /> Refresing
                                        to get such a personal touch.
                                    </li>
                                    <li>
                                        <i className="fal fa-check" /> Duis aute
                                        irure dolor in reprehenderit in
                                        voluptate.
                                    </li>
                                    <li>
                                        <i className="fal fa-check" /> Velit
                                        esse cillum dolore eu fugiat nulla
                                        pariatur..
                                    </li>
                                </ul>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="block-btn"
                                    >
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Index4OnePageFeaturesTextBlockTwo;
