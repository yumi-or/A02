import Link from "next/link";
import React from "react";

const Index4OnePageNewsSection = () => {
    return (
        <section className="news-section section-gap" id="news">
            <div className="container">
                <div className="section-title title-style-four">
                    <span className="title-tag">Insights</span>
                    <h2 className="title"> News &amp; Feeds </h2>
                </div>
                <div className="row latest-news-boxes news-style-four">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news-box">
                            <div
                                className="news-thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/latest-news/06.jpg)",
                                }}
                            />
                            <div className="content">
                                <ul className="post-meta">
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <i className="fal fa-calendar-alt" />
                                                10th May 2020
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="cates">
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Sass
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Applications
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <h4>
                                    <Link href="/blog-single">
                                        <a>
                                            Chemical engineering project for all
                                            technologies
                                        </a>
                                    </Link>
                                </h4>
                                <div className="post-author">
                                    <img
                                        src="img/latest-news/author.png"
                                        alt="author img"
                                    />
                                    <span className="name">Rosalina D.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news-box">
                            <div
                                className="news-thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/latest-news/07.jpg)",
                                }}
                            />
                            <div className="content">
                                <ul className="post-meta">
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <i className="fal fa-calendar-alt" />
                                                10th May 2020
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="cates">
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Sass
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Applications
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <h4>
                                    <Link href="/blog-single">
                                        <a>
                                            Chemical engineering project for all
                                            technologies
                                        </a>
                                    </Link>
                                </h4>
                                <div className="post-author">
                                    <img
                                        src="img/latest-news/author.png"
                                        alt="author img"
                                    />
                                    <span className="name">Rosalina D.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news-box">
                            <div
                                className="news-thumb"
                                style={{
                                    backgroundImage:
                                        "url(img/latest-news/08.jpg)",
                                }}
                            />
                            <div className="content">
                                <ul className="post-meta">
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <i className="fal fa-calendar-alt" />
                                                10th May 2020
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="cates">
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Sass
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Applications
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <h4>
                                    <Link href="/blog-single">
                                        <a>
                                            Chemical engineering project for all
                                            technologies
                                        </a>
                                    </Link>
                                </h4>
                                <div className="post-author">
                                    <img
                                        src="img/latest-news/author.png"
                                        alt="author img"
                                    />
                                    <span className="name">Rosalina D.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index4OnePageNewsSection;
