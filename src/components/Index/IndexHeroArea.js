import Link from "next/link";
import React, {useState} from "react";
import Fade from "react-reveal/Fade";


const IndexHeroArea = () => {

    return (
        <section className="hero-area">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="hero-text">
                            <Fade top>
                                <span
                                    className="title-tag wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    <br/>
                                    Let &apos;s try out our Product Search API.
                                </span>
                            </Fade>
                            <Fade left>
                                <h2
                                    className="title wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Upload a cat photo and we tell you it's species!
                                </h2>
                            </Fade>
                            <ul className="hero-btns">
                                <Fade bottom>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.7s"
                                    >
                                        <Link href="/pst">
                                            <a className="main-btn">
                                                Try out
                                            </a>
                                        </Link>
                                    </li>
                                </Fade>
                                <Fade bottom>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.9s"
                                    >
                                        <Link href="https://cloud.google.com/vision/product-search/docs">
                                            <a className="main-btn main-btn-2">
                                                Learn More
                                            </a>
                                        </Link>
                                    </li>
                                </Fade>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-10">
                        <Fade right>
                            <div
                                className="hero-img text-lg-end text-center wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <img
                                    src="img/hero-img/front2.png"
                                    alt="HeroImage"
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndexHeroArea;
