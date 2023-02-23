import Link from "next/link";
import React from "react";

const Home4DownloadSectionTwo = () => {
    return (
        <section className="download-section-two">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="download-text text-center">
                            <div className="section-title title-style-four text-center">
                                <span className="title-tag">
                                    Get Our Mobile App
                                </span>
                                <h2 className="title">
                                    High quality software services
                                    <br />
                                    at your fingertips!
                                </h2>
                            </div>
                            <ul className="download-btns">
                                <li>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <img
                                                src="img/app-store.png"
                                                alt="AppStore"
                                            />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <img
                                                src="img/play-store.png"
                                                alt="PlayStore"
                                            />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="download-img">
                <img src="img/download-img.png" alt="Image" />
            </div>
        </section>
    );
};

export default Home4DownloadSectionTwo;
