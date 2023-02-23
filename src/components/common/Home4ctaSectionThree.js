import Link from "next/link";
import React from "react";

const Home4ctaSectionThree = () => {
    return (
        <section className="cta-section-three section-gap">
            <div className="container">
                <div className="cta-text">
                    <div className="section-title title-style-four">
                        <span className="title-tag">Lets get a quote</span>
                        <h2 className="title">Let’s explore a lot with us.</h2>
                    </div>
                    <ul className="cta-links">
                        <li>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="main-btn main-btn-4"
                                >
                                    Get Started
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="main-btn main-btn-5"
                                >
                                    Learn More
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Home4ctaSectionThree;
