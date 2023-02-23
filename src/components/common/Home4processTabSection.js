import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const Home4processTabSection = () => {
    const [activeBox, setActive] = useState(1);
    const activeLi = (value) => (activeBox === value ? "active" : "");
    return (
        <section className="process-tab-section section-gap-bottom">
            <div className="container">
                <div className="process-tab tab-version-two">
                    <ul className="nav nav-tabs" id="processTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeLi(1)}`}
                                onClick={() => setActive(1)}
                                data-bs-toggle="tab"
                                data-bs-target="#collaborate-options"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-monitor-heart-rate" />
                                <span>
                                    Collaborate Options
                                    <span className="small-text">
                                        Easy to use &amp; 24/7 online support
                                    </span>
                                </span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeLi(2)}`}
                                onClick={() => setActive(2)}
                                data-bs-toggle="tab"
                                data-bs-target="#messaging-options"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-link" />
                                <span>
                                    Messaging Options
                                    <span className="small-text">
                                        Easy to use &amp; 24/7 online support
                                    </span>
                                </span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeLi(3)}`}
                                onClick={() => setActive(3)}
                                data-bs-toggle="tab"
                                data-bs-target="#chatbot-options"
                                type="button"
                                role="tab"
                            >
                                <i className="fal fa-users" />
                                <span>
                                    Chatbot Options
                                    <span className="small-text">
                                        Easy to use &amp; 24/7 online support
                                    </span>
                                </span>
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="processTabContent">
                        <Fade big>
                            <div
                                className={`tab-pane fade  ${activeLi(
                                    1
                                )} && show`}
                                id="collaborate-options"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab-2.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade big>
                            <div
                                className={`tab-pane fade  ${activeLi(
                                    2
                                )} && show`}
                                id="messaging-options"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab-2.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade big>
                            <div
                                className={`tab-pane fade  ${activeLi(
                                    3
                                )} && show`}
                                id="chatbot-options"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="tab-img text-center">
                                            <img
                                                src="img/process-tab-2.jpg"
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

export default Home4processTabSection;
