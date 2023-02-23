import Link from "next/link";
import React from "react";

const Index4FeaturesSection = () => {
    return (
        <section className="features-section section-gap">
            <div className="container">
                <div className="section-title text-center title-style-four mb-20 circle-shape-top">
                    <span className="title-tag">Featuers</span>
                    <h2 className="title">Core Features</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-box-two mt-40">
                            <div className="feature-content">
                                <div className="feature-heading">
                                    <img src="img/icon/icon.png" alt="Icon" />
                                    <h4>Speed Optimization</h4>
                                </div>
                                <p>
                                    Speed award winning Experiential Marketing
                                    Agency based in Los Angeles and New York
                                    servicing clients worldwide.
                                </p>
                                <ul className="clearfix">
                                    <li>Search Engine</li>
                                    <li>Keyword Research</li>
                                    <li>Optimization</li>
                                    <li>Keyword Building</li>
                                </ul>
                            </div>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="feature-link"
                                >
                                    Learn More
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-box-two mt-40">
                            <div className="feature-content">
                                <div className="feature-heading">
                                    <img src="img/icon/icon-2.png" alt="Icon" />
                                    <h4>Speed Optimization</h4>
                                </div>
                                <p>
                                    Speed award winning Experiential Marketing
                                    Agency based in Los Angeles and New York
                                    servicing clients worldwide.
                                </p>
                                <ul className="clearfix">
                                    <li>Search Engine</li>
                                    <li>Keyword Research</li>
                                    <li>Optimization</li>
                                    <li>Keyword Building</li>
                                </ul>
                            </div>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="feature-link"
                                >
                                    Learn More
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-box-two mt-40">
                            <div className="feature-content">
                                <div className="feature-heading">
                                    <img src="img/icon/icon-3.png" alt="Icon" />
                                    <h4>Speed Optimization</h4>
                                </div>
                                <p>
                                    Speed award winning Experiential Marketing
                                    Agency based in Los Angeles and New York
                                    servicing clients worldwide.
                                </p>
                                <ul className="clearfix">
                                    <li>Search Engine</li>
                                    <li>Keyword Research</li>
                                    <li>Optimization</li>
                                    <li>Keyword Building</li>
                                </ul>
                            </div>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="feature-link"
                                >
                                    Learn More
                                    <i className="fal fa-long-arrow-right" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index4FeaturesSection;
