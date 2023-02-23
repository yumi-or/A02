import React from "react";
import Fade from "react-reveal/Fade";

const Home4featureTextBlockTwo = () => {
    return (
        <section className="feature-text-block-two section-gap">
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
                                <div className="section-title title-style-four mb-20">
                                    <span className="title-tag">
                                        Intregrations
                                    </span>
                                    <h2 className="title">
                                        Chapter 1. The begin start from here.
                                    </h2>
                                </div>
                                <p className="big-text mb-10">
                                    This is due to their excellent service,
                                    competitive pricing and customer support.
                                    It’s throughly refresing to get such a
                                    personal touch.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="feature-box-three mt-30">
                                        <div className="feature-heading">
                                            <i className="fab fa-wordpress" />
                                            <h4>Wordpress Intregrations</h4>
                                        </div>
                                        <div className="feature-content">
                                            <p>
                                                This is due to their excellent
                                                service, competitive pricing and
                                                customer is an support. It’s
                                                throughly refresing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="feature-box-three active mt-30">
                                        <div className="feature-heading">
                                            <i className="fab fa-java" />
                                            <h4>Javascript Intregrations</h4>
                                        </div>
                                        <div className="feature-content">
                                            <p>
                                                This is due to their excellent
                                                service, competitive pricing and
                                                customer is an support. It’s
                                                throughly refresing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Home4featureTextBlockTwo;
