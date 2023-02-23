import Link from "next/link";
import React from "react";

const ServiceArea = () => {
    return (
        <section className="service-area section-gap-bottom section-gap-top-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">01</span>
                            <h4 className="title">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Digital Product Developoment
                                    </a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="service-link"
                                >
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">02</span>
                            <h4 className="title">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        General Consulting Process
                                    </a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="service-link"
                                >
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">03</span>
                            <h4 className="title">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Hire in Fixed Contracting
                                    </a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="service-link"
                                >
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">04</span>
                            <h4 className="title">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Pro Game Developemnt
                                    </a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="service-link"
                                >
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">05</span>
                            <h4 className="title">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Wordpress Theme Develop
                                    </a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="service-link"
                                >
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">06</span>
                            <h4 className="title">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        24/7 Online &amp; Offline Support
                                    </a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="service-link"
                                >
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
