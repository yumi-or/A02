import Link from "next/link";
import React from "react";

const Home2ctaSectionTwo = () => {
    return (
        <section className="cta-section-two">
            <div className="container-fluid fluid-container-left pe-0">
                <div className="cta-text">
                    <h4 className="cta-title">
                        Do you need similar project? Call Us
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                + 422 081 748 212
                            </a>
                        </Link>
                    </h4>
                    <ul className="cta-social-icon">
                        <li>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <i className="fab fa-facebook-f" />
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
                                    <i className="fab fa-twitter" />
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
                                    <i className="fab fa-behance" />
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
                                    <i className="fab fa-youtube" />
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
                                    <i className="fab fa-linkedin" />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Home2ctaSectionTwo;
