import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const BlogArea = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="blog-area section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="blog-loop">
                            <div className="single-post-box">
                                <div className="post-thumb">
                                    <img src="img/blog/01.jpg" alt="Image" />
                                </div>
                                <div className="post-content">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="post-cat"
                                        >
                                            Business
                                        </a>
                                    </Link>
                                    <h3 className="post-title">
                                        <Link href="/blog-single">
                                            <a>
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Novia &apos; s spaciously two bedroom
                                        apartments are perfect for families and
                                        even business partners. Look out into
                                        the Manhattan skyline from that open
                                        fully equipped kitchen.
                                    </p>
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i className="fal fa-eye" />
                                                    100 Views
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
                                                    <i className="fal fa-comments" />
                                                    30 Comments
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
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="posted-by"
                                        >
                                            <img
                                                src="img/blog/post-author.jpg"
                                                alt="Author"
                                            />
                                            <span>by Hetmayar</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="single-post-box video-post">
                                <div className="post-thumb">
                                    <img src="img/blog/02.jpg" alt="Image" />
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpen(true);
                                            }}
                                            className="popup-video"
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
                                </div>
                                <div className="post-content">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="post-cat"
                                        >
                                            Business
                                        </a>
                                    </Link>
                                    <h3 className="post-title">
                                        <Link href="/blog-single">
                                            <a>
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Novia &apos; s spaciously two bedroom
                                        apartments are perfect for families and
                                        even business partners. Look out into
                                        the Manhattan skyline from the open
                                        fully equipped kitchen.
                                    </p>
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i className="fal fa-eye" />
                                                    100 Views
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
                                                    <i className="fal fa-comments" />
                                                    30 Comments
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
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="posted-by"
                                        >
                                            <img
                                                src="img/blog/post-author.jpg"
                                                alt="Author"
                                            />
                                            <span>by Hetmayar</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="single-post-box">
                                <div className="post-thumb">
                                    <img src="img/blog/03.jpg" alt="Image" />
                                </div>
                                <div className="post-content">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="post-cat"
                                        >
                                            Business
                                        </a>
                                    </Link>
                                    <h3 className="post-title">
                                        <Link href="/blog-single">
                                            <a>
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Novia &apos; s spaciously two bedroom
                                        apartments are perfect for families and
                                        even business partners. Look out into
                                        the Manhattan skyline from the open
                                        fully equipped kitchen.
                                    </p>
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i className="fal fa-eye" />
                                                    100 Views
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
                                                    <i className="fal fa-comments" />
                                                    30 Comments
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
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="posted-by"
                                        >
                                            <img
                                                src="img/blog/post-author.jpg"
                                                alt="Author"
                                            />
                                            <span>by Hetmayar</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="single-post-box audio-post">
                                <div className="post-thumb audio-preview">
                                    <img
                                        src="img/blog/soundcloud.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">
                                        <Link href="/blog-single">
                                            <a>
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Novia &apos; s spaciously two bedroom
                                        apartments are perfect for families and
                                        even business partners. Look out into
                                        the Manhattan skyline from the open
                                        fully equipped kitchen.
                                    </p>
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i className="fal fa-eye" />
                                                    100 Views
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
                                                    <i className="fal fa-comments" />
                                                    30 Comments
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
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-post-box no-thumb">
                                <div className="post-content">
                                    <h3 className="post-title">
                                        <Link href="/blog-single">
                                            <a>
                                                Dharma Home Suites at Novia
                                                offers fully plain furnished
                                                apartments to fit
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Novia &apos; s spaciously two bedroom
                                        apartments are perfect for families and
                                        even business partners. Look out into
                                        the Manhattan skyline from the open
                                        fully equipped kitchen.
                                    </p>
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i className="fal fa-eye" />
                                                    100 Views
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
                                                    <i className="fal fa-comments" />
                                                    30 Comments
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
                                                    <i className="fal fa-calendar-alt" />
                                                    24th March 2020
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-post-box quote-post">
                                <div className="post-content">
                                    <h3 className="post-title">
                                        <Link href="/blog-single">
                                            <a>
                                                Dharma Home Suites at Novia
                                                offers fully plain &amp;
                                                furnished
                                            </a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="pagination-wrap">
                            <ul>
                                <li>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <i className="fal fa-arrow-left" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="current-page"
                                        >
                                            01
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
                                            02
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
                                            ----
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
                                            08
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
                                            <i className="fal fa-arrow-right" />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="primary-sidebar blog-sidebar">
                            <div className="widget about-author">
                                <h5 className="widget-title">About Me</h5>
                                <div className="author-content">
                                    <img
                                        src="img/about-author.jpg"
                                        alt="Author"
                                    />
                                    <h6 className="name">
                                        Rosalina D. Willaimson
                                    </h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consect etur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </p>
                                    <ul className="social-icon">
                                        <li>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i className="fab fa-facebook-f" />
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
                                                    <i className="fab fa-twitter" />
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
                                                    <i className="fab fa-behance" />
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
                                                    <i className="fab fa-linkedin" />
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
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget search-widget">
                                <h5 className="widget-title">Search Here</h5>
                                <form
                                    action="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <input
                                        type="search"
                                        placeholder="Search your keyword..."
                                    />
                                    <button type="button">
                                        <i className="fal fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget popular-post-widget">
                                <h5 className="widget-title">Popular Feeds</h5>
                                <ul>
                                    <li>
                                        <div
                                            className="post-thumb"
                                            style={{
                                                backgroundImage:
                                                    "url(img/blog/popular-post/01.jpg)",
                                            }}
                                        />
                                        <div className="content">
                                            <h6>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        Lorem ipsum dolor sit
                                                        cing elit, sed do
                                                        something.
                                                    </a>
                                                </Link>
                                            </h6>
                                            <span className="date">
                                                <i className="fal fa-calendar-alt" />
                                                24th March 2020
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="post-thumb"
                                            style={{
                                                backgroundImage:
                                                    "url(img/blog/popular-post/02.jpg)",
                                            }}
                                        />
                                        <div className="content">
                                            <h6>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        Lorem ipsum dolor sit
                                                        cing elit, sed do
                                                        something.
                                                    </a>
                                                </Link>
                                            </h6>
                                            <span className="date">
                                                <i className="fal fa-calendar-alt" />
                                                24th March 2020
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="post-thumb"
                                            style={{
                                                backgroundImage:
                                                    "url(img/blog/popular-post/03.jpg)",
                                            }}
                                        />
                                        <div className="content">
                                            <h6>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        Lorem ipsum dolor sit
                                                        cing elit, sed do
                                                        something.
                                                    </a>
                                                </Link>
                                            </h6>
                                            <span className="date">
                                                <i className="fal fa-calendar-alt" />
                                                24th March 2020
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="post-thumb"
                                            style={{
                                                backgroundImage:
                                                    "url(img/blog/popular-post/04.jpg)",
                                            }}
                                        />
                                        <div className="content">
                                            <h6>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        Lorem ipsum dolor sit
                                                        cing elit, sed do
                                                        something.
                                                    </a>
                                                </Link>
                                            </h6>
                                            <span className="date">
                                                <i className="fal fa-calendar-alt" />
                                                24th March 2020
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget categories-widget">
                                <h5 className="widget-title">Categories</h5>
                                <ul>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Business <span>26</span>
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
                                                Consultant <span>30</span>
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
                                                Creative <span>71</span>
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
                                                UI/UX <span>56</span>
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
                                                Technology <span>60</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget instagram-feeds">
                                <h5 className="widget-title">
                                    Instagram Feeds
                                </h5>
                                <ul>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <img
                                                    src="img/blog/instagram/01.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/02.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/03.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/04.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/05.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/06.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/07.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/08.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/09.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/10.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/11.jpg"
                                                    alt="img"
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
                                                    src="img/blog/instagram/12.jpg"
                                                    alt="img"
                                                />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget popular-tags">
                                <h5 className="widget-title">Popular Tags</h5>
                                <ul>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Popular
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
                                                Design
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
                                                UI
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
                                                UX
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
                                                Usability
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
                                                Develop
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
                                                Icon
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
                                                Icon
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
                                                Business
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
                                                Consult
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
                                                Kit
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
                                                Kit
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
                                                Keyboard
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
                                                Mouse
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
                                                Tech
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
                                                Tech
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget ad-widget">
                                <h5 className="widget-title">Sponsor Adds</h5>
                                <div className="ad-img">
                                    <img
                                        src="img/blog/ad-image.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogArea;
