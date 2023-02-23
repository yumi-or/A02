import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Home4brandSection = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <section className="brand-section section-gap">
            <div className="container">
                <div className="brand-logos row">
                    <Slider {...settings}>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/11.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/12.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/13.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/14.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/15.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/11.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/12.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/13.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/14.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/15.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Home4brandSection;
