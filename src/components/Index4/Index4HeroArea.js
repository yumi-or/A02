import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Index4HeroArea = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="hero-area hero-area-four">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 col-md-11">
                        <div className="hero-text">
                            <Fade top>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpen(true);
                                        }}
                                        className="popup-video wow fadeInDown"
                                        data-wow-delay="0.3s"
                                    >
                                        <i className="fas fa-play" />
                                    </a>
                                </Link>
                            </Fade>
                            <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="ScMzIvxBSi4"
                                onClose={() => setOpen(false)}
                            />
                            <Fade left>
                                <h2
                                    className="title wow fadeInLeft"
                                    data-wow-delay="0.5s"
                                >
                                    Boost Your Website Traffic &amp; Rank
                                </h2>
                            </Fade>

                            <p>Marketing experts are ready to help you</p>
                        </div>
                        <Fade left>
                            <div className="hero-img text-center">
                                <img
                                    src="img/hero-img/hero-04.png"
                                    alt="Image"
                                    className="wow fadeInUp"
                                    data-wow-delay="0.5s"
                                />
                                <div
                                    className="circle-shape-one wow fadeInRight"
                                    data-wow-delay="0.8s"
                                />
                                <div
                                    className="circle-shape-two wow fadeInLeft"
                                    data-wow-delay="0.8s"
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index4HeroArea;
