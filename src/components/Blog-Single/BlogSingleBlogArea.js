import Link from "next/link";
import React from "react";

const BlogSingleBlogArea = () => {
    return (
        <section className="blog-area section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="single-post-box post-details">
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
                                    Business contents insurance is a type
                                    business insurance that can protect
                                </h3>
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
                                <p className="mb-20">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui
                                    ratione voluptatem sequi nesciunt. Neque
                                    porro quisquam est, qui dolorem ipsum quia
                                    dolor sit amet, consectetur, adipisci velit,
                                    sed quia non numquam eius modi tempora
                                    incidunt ut labore et dolore magnam aliquam
                                    quaerat voluptatem. Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia
                                    deserunt. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt
                                </p>
                                <figure className="mt-40 mb-40">
                                    <img
                                        src="img/blog/post-details.jpg"
                                        alt="Image"
                                    />
                                </figure>
                                <h3 className="subtitle">
                                    A cleansing hot shower or bath
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia. Lorem
                                    ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore
                                </p>
                                <div className="divider" />
                                <h3 className="subtitle">
                                    Setting the mood with incense
                                </h3>
                                <div className="row align-items-center">
                                    <div className="col-lg-3 mb-lg-0 mb-4">
                                        <img
                                            src="img/blog/post-details-2.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="col-lg-9">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipisicing elit, sed do eiusmod
                                        </p>
                                    </div>
                                </div>
                                <div className="divider" />
                                <h3 className="subtitle">
                                    Setting the mood with incense
                                </h3>
                                <ul className="post-content-list">
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i className="fal fa-check" />
                                        Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                </ul>
                                <blockquote className="mt-40 mb-40">
                                    <cite>by Hetmayar</cite>
                                    Choices to take a holiday and travelling out
                                    in this pandemic situation are limited. Why
                                    not take a staycation.
                                    <div className="quote-icon">
                                        <img
                                            src="img/blog/quote-icon.png"
                                            alt="quote"
                                        />
                                    </div>
                                </blockquote>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium. Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore.
                                </p>
                                <div className="row align-items-center mt-20 mb-20">
                                    <div className="col-lg-4 mb-lg-0 mb-4">
                                        <img
                                            src="img/blog/post-details-3.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="col-lg-8">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste natus
                                            error sit voluptatem accusantium
                                            doloremque laudantium. Lorem ipsum
                                            dolor sit amet, consectetur
                                            adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et
                                            dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit
                                    voluptatem. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua.
                                </p>
                            </div>
                            <div className="post-footer mt-40 mb-40">
                                <div className="d-sm-flex justify-content-between">
                                    <div className="related-tag">
                                        <h5>Releted Tags</h5>
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
                                                        Desgin
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
                                        </ul>
                                    </div>
                                    <div className="social-share">
                                        <h5>Social Share</h5>
                                        <ul>
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
                                                        <i className="fab fa-vk" />
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
                                                        <i className="fab fa-whatsapp" />
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
                                                        <i className="fab fa-blogger-b" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="divider" />
                                <div className="post-nav">
                                    <div className="prev-post">
                                        <span>Prev Post</span>
                                        <h3>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    Tips On Minimalist
                                                </a>
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="next-post">
                                        <span>Next Post</span>
                                        <h3>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    Less Is More
                                                </a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="divider" />
                                <div className="related-posts">
                                    <h3 className="related-title">
                                        Releted Post
                                    </h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="related-post-box">
                                                <div
                                                    className="thumb"
                                                    style={{
                                                        backgroundImage:
                                                            "url(img/blog/related-post/01.jpg)",
                                                    }}
                                                />
                                                <div className="content">
                                                    <span className="date">
                                                        <i className="fal fa-calendar-alt" />
                                                        24th March 2020
                                                    </span>
                                                    <h4>
                                                        <Link href="">
                                                            <a
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                            >
                                                                A series of iOS
                                                                7 inspire vector
                                                                icons sense.
                                                            </a>
                                                        </Link>
                                                    </h4>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, conse ctet ur
                                                        adipisicing elit, sed
                                                        doing.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="related-post-box">
                                                <div
                                                    className="thumb"
                                                    style={{
                                                        backgroundImage:
                                                            "url(img/blog/related-post/02.jpg)",
                                                    }}
                                                />
                                                <div className="content">
                                                    <span className="date">
                                                        <i className="fal fa-calendar-alt" />
                                                        24th March 2020
                                                    </span>
                                                    <h4>
                                                        <Link href="">
                                                            <a
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                            >
                                                                A series of iOS
                                                                7 inspire vector
                                                                icons sense.
                                                            </a>
                                                        </Link>
                                                    </h4>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, conse ctet ur
                                                        adipisicing elit, sed
                                                        doing.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-author">
                                    <div className="image">
                                        <img
                                            src="img/blog/post-author-3.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="info">
                                        <span>Written by</span>
                                        <h2 className="name">
                                            Rosalina D. William
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation is enougn for today.
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-template">
                                <h3 className="template-title">03 Comments</h3>
                                <ul className="comments-list">
                                    <li>
                                        <div className="comment-author">
                                            <img
                                                src="img/blog/comment-01.jpg"
                                                alt="Author"
                                            />
                                        </div>
                                        <div className="comment-content">
                                            <h6>Rosalina Kelian</h6>
                                            <span className="date">
                                                <i className="fal fa-calendar-alt" />
                                                24th March 2020
                                            </span>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat.
                                            </p>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="reply-link"
                                                >
                                                    <i className="fal fa-reply" />
                                                    Reply
                                                </a>
                                            </Link>
                                        </div>
                                        <ul className="children">
                                            <li>
                                                <div className="comment-author">
                                                    <img
                                                        src="img/blog/comment-02.jpg"
                                                        alt="Author"
                                                    />
                                                </div>
                                                <div className="comment-content">
                                                    <h6>Rosalina Kelian</h6>
                                                    <span className="date">
                                                        <i className="fal fa-calendar-alt" />
                                                        24th March 2020
                                                    </span>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nostrud
                                                        exercitation
                                                    </p>
                                                    <Link href="">
                                                        <a
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                            }}
                                                            className="reply-link"
                                                        >
                                                            <i className="fal fa-reply" />
                                                            Reply
                                                        </a>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment-author">
                                            <img
                                                src="img/blog/comment-03.jpg"
                                                alt="Author"
                                            />
                                        </div>
                                        <div className="comment-content">
                                            <h6>Rosalina Kelian</h6>
                                            <span className="date">
                                                <i className="fal fa-calendar-alt" />
                                                24th March 2020
                                            </span>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat.
                                            </p>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="reply-link"
                                                >
                                                    <i className="fal fa-reply" />
                                                    Reply
                                                </a>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="divider" />
                                <h3 className="template-title">Post Comment</h3>
                                <div className="comment-form">
                                    <form
                                        action="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <div className="input-field icon-right textarea-field mb-20">
                                            <textarea
                                                placeholder="Type your comments...."
                                                defaultValue={""}
                                            />
                                            <span className="icon">
                                                <i className="fal fa-pencil" />
                                            </span>
                                        </div>
                                        <div className="input-field icon-right mb-20">
                                            <input
                                                type="text"
                                                placeholder="Type your name...."
                                            />
                                            <span className="icon">
                                                <i className="fal fa-user" />
                                            </span>
                                        </div>
                                        <div className="input-field icon-right mb-20">
                                            <input
                                                type="text"
                                                placeholder="Type your email...."
                                            />
                                            <span className="icon">
                                                <i className="fal fa-envelope" />
                                            </span>
                                        </div>
                                        <div className="input-field icon-right mb-30">
                                            <input
                                                type="text"
                                                placeholder="Type your website...."
                                            />
                                            <span className="icon">
                                                <i className="fal fa-globe" />
                                            </span>
                                        </div>
                                        <div className="input-field">
                                            <button type="submit">
                                                <i className="fal fa-comments" />
                                                Post Comment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
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

export default BlogSingleBlogArea;
