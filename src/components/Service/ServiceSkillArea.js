import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import Circle3 from "../ProgressBar/Circle3";
import Circle4 from "../ProgressBar/Circle4";

const ServiceSkillArea = () => {
    const [isOpen, setOpen] = useState(false);
    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        className: "center",
        slidesToScroll: 1,
    };
    return (
        <section className="skill-section section-gap-bottom grey-bg">
            <div className="container-fluid p-0 overflow-hidden">
                <div className="skillset-videos row skillset-videos-slider">
                    <Slider {...settings}>
                        <div className="col extra-padding">
                            <div className="skillset-video">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpen(true);
                                        }}
                                        className="popup-btn popup-video"
                                    >
                                        <i className="fas fa-play" />
                                    </a>
                                </Link>
                                <ModalVideo
                                    channel="youtube"
                                    autoplay
                                    isOpen={isOpen}
                                    videoId="pVE92TNDwUk"
                                    onClose={() => setOpen(false)}
                                />

                                <div
                                    className="video-bg"
                                    style={{
                                        backgroundImage:
                                            "url(img/skillset/slide-01.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col extra-padding">
                            <div className="skillset-video">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpen(true);
                                        }}
                                        className="popup-btn popup-video"
                                    >
                                        <i className="fas fa-play" />
                                    </a>
                                </Link>

                                <ModalVideo
                                    channel="youtube"
                                    autoplay
                                    isOpen={isOpen}
                                    videoId="pVE92TNDwUk"
                                    onClose={() => setOpen(false)}
                                />

                                <div
                                    className="video-bg"
                                    style={{
                                        backgroundImage:
                                            "url(img/skillset/slide-03.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col extra-padding">
                            <div className="skillset-video">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpen(true);
                                        }}
                                        className="popup-btn popup-video"
                                    >
                                        <i className="fas fa-play" />
                                    </a>
                                </Link>
                                <ModalVideo
                                    channel="youtube"
                                    autoplay
                                    isOpen={isOpen}
                                    videoId="pVE92TNDwUk"
                                    onClose={() => setOpen(false)}
                                />

                                <div
                                    className="video-bg"
                                    style={{
                                        backgroundImage:
                                            "url(img/skillset/slide-02.jpg)",
                                    }}
                                />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="container section-gap-top">
                <div className="pie-charts">
                    <div className="single-pie-chart">
                        <div
                            className="chart"
                            data-percent={61}
                            data-bar-color="#1baaa0"
                        >
                            <span>61</span>
                        </div>
                        <Circle3 />
                        <h4 className="title">Work Progress</h4>
                        <p>
                            As emerging technologies converge with urban
                            planning, a revolution of automated, on-demand
                        </p>
                    </div>
                    <div className="single-pie-chart">
                        <div
                            className="chart"
                            data-percent={85}
                            data-bar-color="#1baaa0"
                        >
                            <span>85</span>
                        </div>
                        <Circle4 />
                        <h4 className="title">Projects Done</h4>
                        <p>
                            As emerging technologies converge with urban
                            planning, a revolution of automated, on-demand
                        </p>
                    </div>
                    <div className="single-pie-chart">
                        <div
                            className="chart"
                            data-percent={61}
                            data-bar-color="#1baaa0"
                        >
                            <span>61</span>
                        </div>
                        <Circle3 />
                        <h4 className="title">Work Progress</h4>
                        <p>
                            As emerging technologies converge with urban
                            planning, a revolution of automated, on-demand
                        </p>
                    </div>
                    <div className="single-pie-chart">
                        <div
                            className="chart"
                            data-percent={85}
                            data-bar-color="#1baaa0"
                        >
                            <span>85</span>
                        </div>
                        <Circle4 />
                        <h4 className="title">Projects Done</h4>
                        <p>
                            As emerging technologies converge with urban
                            planning, a revolution of automated, on-demand
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSkillArea;
