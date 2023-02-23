import Link from "next/link";
import React from "react";

const PortfolioDetailsArea = () => {
    return (
        <section className="portfolio-area portfolio-details section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="portfolio-details-gallery row">
                            <div className="col-12">
                                <div className="image">
                                    <img
                                        src="img/portfolio/portfolio-details/01.jpg"
                                        alt="Portfolio"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="image mt-30">
                                    <img
                                        src="img/portfolio/portfolio-details/02.jpg"
                                        alt="Portfolio"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="image mt-30">
                                    <img
                                        src="img/portfolio/portfolio-details/03.jpg"
                                        alt="Portfolio"
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="image mt-30">
                                    <img
                                        src="img/portfolio/portfolio-details/04.jpg"
                                        alt="Portfolio"
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="image mt-30">
                                    <img
                                        src="img/portfolio/portfolio-details/05.jpg"
                                        alt="Portfolio"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-10">
                        <div className="portfolio-desc">
                            <h3 className="title">ProMan In Black Inc.</h3>
                            <p>
                                Right understanding of the definition and key
                                characteristics of project is of significant
                                importance. Any project is not just a way to
                                make or do something but it’s an opportunity to
                                achieve some desired result by implementing a
                                systematic management approach (for example,
                                producing a product or sharing knowledge).
                            </p>
                            <div className="portfolio-info">
                                <h6>Projects Info</h6>
                                <ul>
                                    <li>
                                        <span>Category:</span>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Branding,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Design
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span>Date:</span> June 21, 2021
                                    </li>
                                    <li>
                                        <span>Tags:</span>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                color,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                design,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                theme,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                ui,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                ux
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="main-btn mt-30"
                                    >
                                        Live Preview
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                                <span className="icon">
                                    <i className="flaticon-files" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-nav mt-60">
                    <div className="prev-post">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <i className="fal fa-long-arrow-left" /> Prev
                                Project
                            </a>
                        </Link>
                    </div>
                    <div className="dot-icon">
                        <img
                            src="img/portfolio/portfolio-details/nav-dots.png"
                            alt="Dots"
                        />
                    </div>
                    <div className="next-post">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Next Project
                                <i className="fal fa-long-arrow-right" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="related-portfolio">
                    <h3 className="related-portfolio-title">
                        Related projects
                    </h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-box-two mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/05.jpg)",
                                    }}
                                >
                                    <Link href="/portfolio-details">
                                        <a className="link">
                                            <i className="fal fa-long-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Design,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Development
                                            </a>
                                        </Link>
                                    </div>
                                    <h4 className="title">
                                        <Link href="/portfolio-details">
                                            <a>Kikado Mobile App Design</a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-box-two mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/06.jpg)",
                                    }}
                                >
                                    <Link href="/portfolio-details">
                                        <a className="link">
                                            <i className="fal fa-long-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Design,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Development
                                            </a>
                                        </Link>
                                    </div>
                                    <h4 className="title">
                                        <Link href="/portfolio-details">
                                            <a>Kikado Mobile App Design</a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-box-two mt-30">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage:
                                            "url(img/portfolio/07.jpg)",
                                    }}
                                >
                                    <Link href="/portfolio-details">
                                        <a className="link">
                                            <i className="fal fa-long-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="tags">
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Design,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Development
                                            </a>
                                        </Link>
                                    </div>
                                    <h4 className="title">
                                        <Link href="/portfolio-details">
                                            <a>Kikado Mobile App Design</a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetailsArea;
