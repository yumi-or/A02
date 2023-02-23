import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const Home3featureTextBlocks = () => {
    return (
        <section className="feature-text-blocks">
            <div className="feature-text-block section-gap section-border-top">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <Fade left>
                            <div className="col-lg-6 col-md-10 wow fadeInLeft">
                                <div className="block-img">
                                    <img
                                        src="img/feature-text-block.jpg"
                                        alt="Features"
                                    />
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-lg-6 col-md-10 wow fadeInRight">
                                <div className="block-text">
                                    <div className="section-title title-style-three">
                                        <span className="title-tag">
                                            Software Intregrations
                                        </span>
                                        <h2 className="title">
                                            Set it as the font in your
                                            application in iOs.
                                        </h2>
                                    </div>
                                    <p>
                                        Have stronger bones, muscles and joints
                                        and lower risk of developing for with
                                        osteoporosis capitalize on custom.
                                    </p>
                                    <p>
                                        Fitness is the condition of being
                                        physically fit and healthy and involves
                                        attributes that include, but are not
                                        limited to mental acuity,
                                        cardiorespiratory endurance, muscular
                                        strength, muscular endurance, body
                                        composition, and flexibility.
                                    </p>
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
            </div>
            <div className="feature-text-block section-gap section-border-top">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <Fade right>
                            <div className="col-lg-6 col-md-10 order-lg-2 wow fadeInLeft">
                                <div className="block-img">
                                    <img
                                        src="img/feature-text-block.jpg"
                                        alt="Features"
                                    />
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="col-lg-6 col-md-10 order-lg-1 wow fadeInRight">
                                <div className="block-text color-2">
                                    <div className="section-title title-style-three">
                                        <span className="title-tag">
                                            Team Intregrations
                                        </span>
                                        <h2 className="title">
                                            Set it as the font in your
                                            application in iOs.
                                        </h2>
                                    </div>
                                    <p>
                                        Have stronger bones, muscles and joints
                                        and lower risk of developing for with
                                        osteoporosis capitalize on custom.
                                    </p>
                                    <p>
                                        Fitness is the condition of being
                                        physically fit and healthy and involves
                                        attributes that include, but are not
                                        limited to mental acuity,
                                        cardiorespiratory endurance, muscular
                                        strength, muscular endurance, body
                                        composition, and flexibility.
                                    </p>
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
            </div>
            <div className="feature-text-block section-gap section-border-top">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <Fade left>
                            <div className="col-lg-6 col-md-10 wow fadeInLeft">
                                <div className="block-img">
                                    <img
                                        src="img/feature-text-block.jpg"
                                        alt="Features"
                                    />
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-lg-6 col-md-10 wow fadeInRight">
                                <div className="block-text color-3">
                                    <div className="section-title title-style-three">
                                        <span className="title-tag">
                                            Conversations
                                        </span>
                                        <h2 className="title">
                                            Set it as the font in your
                                            application in iOs.
                                        </h2>
                                    </div>
                                    <p>
                                        Have stronger bones, muscles and joints
                                        and lower risk of developing for with
                                        osteoporosis capitalize on custom.
                                    </p>
                                    <p>
                                        Fitness is the condition of being
                                        physically fit and healthy and involves
                                        attributes that include, but are not
                                        limited to mental acuity,
                                        cardiorespiratory endurance, muscular
                                        strength, muscular endurance, body
                                        composition, and flexibility.
                                    </p>
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
            </div>
        </section>
    );
};

export default Home3featureTextBlocks;
