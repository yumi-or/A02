import Link from "next/link";
import React from "react";

const Service2Area = () => {
    return (
        <section className="service-area section-gap-bottom section-gap">
            <div className="container">
                <div className="service-boxes-three">
                    <div className="row g-0">
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-box-three">
                                <div className="icon">
                                    <i className="fal fa-box-open" />
                                </div>
                                <h4 className="title">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Product Design
                                        </a>
                                    </Link>
                                </h4>
                                <p>Get an amazing experience here</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-box-three">
                                <div className="icon">
                                    <i className="fal fa-globe" />
                                </div>
                                <h4 className="title">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Digital Marketing
                                        </a>
                                    </Link>
                                </h4>
                                <p>Get an amazing experience here</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-box-three">
                                <div className="icon">
                                    <i className="fal fa-mobile" />
                                </div>
                                <h4 className="title">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Mobile App Design
                                        </a>
                                    </Link>
                                </h4>
                                <p>Get an amazing experience here</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-box-three">
                                <div className="icon">
                                    <i className="fal fa-desktop" />
                                </div>
                                <h4 className="title">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Website Design
                                        </a>
                                    </Link>
                                </h4>
                                <p>Get an amazing experience here</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-box-three">
                                <div className="icon">
                                    <i className="fal fa-chart-pie" />
                                </div>
                                <h4 className="title">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Business Strategy
                                        </a>
                                    </Link>
                                </h4>
                                <p>Get an amazing experience here</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-box-three">
                                <div className="icon">
                                    <i className="fal fa-fill-drip" />
                                </div>
                                <h4 className="title">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Interior Design
                                        </a>
                                    </Link>
                                </h4>
                                <p>Get an amazing experience here</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-box-three">
                                <div className="icon">
                                    <i className="fal fa-clone" />
                                </div>
                                <h4 className="title">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Mining Storage
                                        </a>
                                    </Link>
                                </h4>
                                <p>Get an amazing experience here</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                            <div className="service-box-three">
                                <div className="icon">
                                    <i className="fal fa-cloud-download" />
                                </div>
                                <h4 className="title">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Cloud Solutions
                                        </a>
                                    </Link>
                                </h4>
                                <p>Get an amazing experience here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service2Area;
