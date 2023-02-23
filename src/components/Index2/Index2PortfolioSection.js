import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Index2PortfolioSection = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <section className="portfolio-section section-gap">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-lg-4">
                        <div className="section-title title-style-two">
                            <span className="title-tag">Portfolio</span>
                            <h2 className="title">Our case study</h2>
                        </div>
                    </div>
                </div>
                <div className="row portfolio-slider">
                    <Slider {...settings}>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/01.jpg"
                                        alt="Image"
                                    />
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
                                    <h4>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Develop solution
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/02.jpg"
                                        alt="Image"
                                    />
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
                                    <h4>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Develop solution
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/03.jpg"
                                        alt="Image"
                                    />
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
                                    <h4>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Develop solution
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/04.jpg"
                                        alt="Image"
                                    />
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
                                    <h4>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Develop solution
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/01.jpg"
                                        alt="Image"
                                    />
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
                                    <h4>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Develop solution
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/02.jpg"
                                        alt="Image"
                                    />
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
                                    <h4>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Develop solution
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/03.jpg"
                                        alt="Image"
                                    />
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
                                    <h4>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Develop solution
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="portfolio-box">
                                <div className="thumb">
                                    <img
                                        src="img/portfolio/04.jpg"
                                        alt="Image"
                                    />
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
                                    <h4>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Develop solution
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Index2PortfolioSection;
