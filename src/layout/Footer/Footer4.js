import Link from "next/link";
import React from "react";

const Footer4 = () => {
    return (
        <footer className="footer-three">
            <div className="container">
                <div className="footer-top">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <ul className="footer-top-menu">
                            <li>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Roadmap
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Careers
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Connect
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        facebook
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        twtter
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        linkedin
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        pinterest
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="widget about-widget">
                                <h5 className="widget-title">About us.</h5>
                                <p>
                                    Finding the mental wherewithal to get into
                                    workout mode can take some serious effort,
                                    especially when all your activities happen
                                    at home. It can be done, but you have
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-4 col-sm-6">
                            <div className="widget nav-widget">
                                <h5 className="widget-title">Main Links.</h5>
                                <ul>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                About Us
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Reviews
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Services
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Best Products
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Pricing
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Categories
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Portfolio
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Brands
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Insights
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Hiring
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Business Strategy
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-3 col-sm-6">
                            <div className="widget contact-info-two">
                                <h5 className="widget-title">Get in touch.</h5>
                                <ul>
                                    <li>
                                        <span>New Address</span>
                                        14/A, New Home Town, Nyc
                                    </li>
                                    <li>
                                        <span>Head Quatar</span>
                                        71, Qlex Tower, Onthon, UK
                                    </li>
                                </ul>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="info-btn"
                                    >
                                        Contact Us
                                        <i className="fal fa-long-arrow-right" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer4;
