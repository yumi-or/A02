import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Home2brandSectionTwo = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <section
            className="brand-section-two bgc"
            style={{
                backgroundImage: "url(img/brand/brand-bg.jpg)",
            }}
        >
            <div className="container-fluid">
                <div className="brand-logos row justify-content-between align-items-center">
                    <Slider {...settings}>
                        <div className="col">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="brand-logo"
                                >
                                    <img src="img/brand/6.png" alt="Image" />
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
                                    <img src="img/brand/7.png" alt="Image" />
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
                                    <img src="img/brand/8.png" alt="Image" />
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
                                    <img src="img/brand/9.png" alt="Image" />
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
                                    <img src="img/brand/10.png" alt="Image" />
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
                                    <img src="img/brand/6.png" alt="Image" />
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
                                    <img src="img/brand/7.png" alt="Image" />
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
                                    <img src="img/brand/8.png" alt="Image" />
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
                                    <img src="img/brand/9.png" alt="Image" />
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
                                    <img src="img/brand/10.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Home2brandSectionTwo;
