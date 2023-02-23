import React from "react";
import Circle1 from "../ProgressBar/Circle1";
import Circle2 from "../ProgressBar/Circle2";

const Home2skillSection = () => {
    return (
        <section className="skill-section with-absolute-image">
            <div className="container">
                <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="skill-text">
                            <div className="section-title title-style-two mb-30">
                                <span className="title-tag">Our Skillset</span>
                                <h2 className="title">
                                    Emerging technologies converge with urban
                                </h2>
                            </div>
                            <p>
                                Their creativity, innovation, technological
                                expertise, and project completion steps were
                                impressive. Project management was professional.
                                We’re a full-service creative digital marketing
                                agency, collaborating with brands
                            </p>
                            <div className="pie-charts two-box mt-40">
                                <div className="single-pie-chart">
                                    <div
                                        className="chart"
                                        data-percent={61}
                                        data-bar-color="#4c32fb"
                                    >
                                        <span>61</span>
                                    </div>

                                    <Circle1 />

                                    <h4 className="title">Work Progress</h4>
                                    <p>
                                        As emerging technologies converge with
                                        urban planning, a revolution of
                                        automated, on-demand
                                    </p>
                                </div>
                                <div className="single-pie-chart">
                                    <div
                                        className="chart"
                                        data-percent={85}
                                        data-bar-color="#4c32fb"
                                    >
                                        <span>85</span>
                                    </div>
                                    <Circle2 />
                                    <h4 className="title">Projects Done</h4>
                                    <p>
                                        As emerging technologies converge with
                                        urban planning, a revolution of
                                        automated, on-demand
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home2skillSection;
