import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const Index3OnePageProcessTabSection = () => {
    const [activeBox, setActive] = useState(1);
    const activeLi = (value) => (activeBox === value ? "active" : "");
    return (
        <section
            className="process-tab-section section-gap with-gradient-bg"
            id="process"
        >
            <div className="container">
                <div className="process-tab">
                    <ul className="nav nav-tabs" id="processTab" role="tablist">
                        <li className="nav-item analysis" role="presentation">
                            <button
                                className={`nav-link ${activeLi(1)}`}
                                onClick={() => setActive(1)}
                                data-bs-toggle="tab"
                                data-bs-target="#analysis"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-chart-area" />
                                Predictive Analysis
                            </button>
                        </li>
                        <li
                            className="nav-item building-edit"
                            role="presentation"
                        >
                            <button
                                className={`nav-link ${activeLi(2)}`}
                                onClick={() => setActive(2)}
                                data-bs-toggle="tab"
                                data-bs-target="#building-edit"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-link" /> Link Building
                                &amp; Edit
                            </button>
                        </li>
                        <li
                            className="nav-item team-collab"
                            role="presentation"
                        >
                            <button
                                className={`nav-link ${activeLi(3)}`}
                                onClick={() => setActive(3)}
                                data-bs-toggle="tab"
                                data-bs-target="#team-collab"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-users" /> Team
                                collaboration
                            </button>
                        </li>
                        <li className="nav-item customize" role="presentation">
                            <button
                                className={`nav-link ${activeLi(4)}`}
                                onClick={() => setActive(4)}
                                data-bs-toggle="tab"
                                data-bs-target="#customize"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-edit" /> Customize Option
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="processTabContent">
                        <Fade big>
                            <div
                                className={`tab-pane fade ${activeLi(
                                    1
                                )} && show`}
                                id="analysis"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade big>
                            <div
                                className={`tab-pane fade ${activeLi(
                                    2
                                )} && show`}
                                id="building-edit"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade big>
                            <div
                                className={`tab-pane fade ${activeLi(
                                    3
                                )} && show`}
                                id="team-collab"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade big>
                            <div
                                className={`tab-pane fade ${activeLi(
                                    4
                                )} && show`}
                                id="customize"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index3OnePageProcessTabSection;
