import React from "react";

const HomeCTASection = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-inner">
                    <div className="row align-items-center">
                        <div className="col-xl-5">
                            <div className="cta-text mb-lg-gap-30">
                                <div className="section-title">
                                    <span className="title-tag">
                                        Make Request
                                    </span>
                                    <h2 className="title">Make custom order</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="cta-form">
                                <form
                                    action="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <div className="field-groups">
                                        <div className="input-field">
                                            <input
                                                type="email"
                                                placeholder="Enter email address"
                                            />
                                            <span className="icon">
                                                <i className="fal fa-envelope" />
                                            </span>
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Your Estimate"
                                            />
                                            <span className="icon">
                                                <i className="fal fa-pencil" />
                                            </span>
                                        </div>
                                        <div className="input-field">
                                            <button type="submit">
                                                <i className="fal fa-long-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCTASection;
