import React from "react";
import Fade from "react-reveal/Fade";

const Index3OnePageHeroArea = () => {
    return (
        <section className="hero-area hero-area-three" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5 col-md-8">
                        <div className="hero-text">
                            <Fade top>
                                <span
                                    className="title-tag wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    It &apos; s a lot easy to make a difference
                                    togather.
                                </span>
                            </Fade>
                            <Fade left>
                                <h2
                                    className="title wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Brings your <span>pro</span>team together
                                </h2>
                            </Fade>
                            <Fade bottom>
                                <div
                                    className="subscription-form wow fadeInUp"
                                    data-wow-delay="0.7s"
                                >
                                    <form
                                        action="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Enter email address"
                                        />
                                        <button type="submit">
                                            <i className="fal fa-long-arrow-right" />
                                            Subscribe
                                        </button>
                                    </form>
                                    <p
                                        className="form-note wow fadeInLeft"
                                        data-wow-delay="0.9s"
                                    >
                                        ** Don’t worry we not gonna make
                                        spamming
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Fade right>
                        <div
                            className="col-xl-7 col-lg-7 col-md-10 wow fadeInRight"
                            data-wow-delay="0.5s"
                        >
                            <div className="hero-img text-lg-end text-center">
                                <img
                                    src="img/hero-img/hero-03.png"
                                    alt="Hero"
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Index3OnePageHeroArea;
