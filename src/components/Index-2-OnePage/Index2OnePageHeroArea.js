import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Index2OnePageHeroArea = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="hero-area hero-area-two" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5 col-md-10">
                        <div className="hero-text">
                            <Fade top>
                                <h2
                                    className="title wow fadeInDown"
                                    data-wow-delay="0.3s"
                                >
                                    Design, Development, &amp; Identity For Your
                                    Product.
                                </h2>
                            </Fade>
                            <Fade left>
                                <p
                                    className="wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Let &apos; s create something together
                                </p>
                            </Fade>
                            <Fade bottom>
                                <ul className="social-counts">
                                    <li
                                        className="facebook wow fadeInUp"
                                        data-wow-delay="0.7s"
                                    >
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <i className="fab fa-facebook-f" />
                                                <span>10000 Like</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li
                                        className="dribbble wow fadeInUp"
                                        data-wow-delay="0.9s"
                                    >
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <i className="fab fa-dribbble" />
                                                <span>500K Followers</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                    </div>
                    <Fade right>
                        <div className="col-xl-8 col-lg-7 col-md-10 mx-auto">
                            <div
                                className="hero-video wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <div className="hero-video-wrap">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpen(true);
                                            }}
                                            className="video-btn popup-video"
                                        >
                                            Play
                                        </a>
                                    </Link>
                                    <ModalVideo
                                        channel="youtube"
                                        autoplay
                                        isOpen={isOpen}
                                        videoId="pVE92TNDwUk"
                                        onClose={() => setOpen(false)}
                                    />

                                    <img
                                        src="img/hero-img/hero-02.jpg"
                                        alt="HeroImage"
                                    />
                                    <div className="project-count">
                                        <span>
                                            <span className="count">20</span>
                                            Projects Done
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Index2OnePageHeroArea;
