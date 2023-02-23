import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const IndexOnePageHeroArea = () => {
    return (
        <section className="hero-area" id="home">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="hero-text">
                            <Fade top>
                                <span
                                    className="title-tag wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    It &apos; s a lot easy to make a difference
                                    togather.
                                </span>
                            </Fade>
                            <Fade left>
                                <h2
                                    className="title wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Replication is the <br /> presentation of
                                    <br /> our <span>capabilities</span>
                                </h2>
                            </Fade>
                            <Fade bottom>
                                <ul className="hero-btns">
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.7s"
                                    >
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="main-btn"
                                            >
                                                Get Started Now
                                            </a>
                                        </Link>
                                    </li>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.9s"
                                    >
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="main-btn main-btn-2"
                                            >
                                                Learn More
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </div>
                    <Fade right>
                        <div className="col-lg-7 col-md-10">
                            <div
                                className="hero-img text-lg-end text-center wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <img
                                    src="img/hero-img/hero-01.png"
                                    alt="HeroImage"
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default IndexOnePageHeroArea;
