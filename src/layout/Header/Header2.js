import Link from "next/link";
import { Fragment } from "react";
import Mobilemenu from "./Mobilemenu";

const Header2 = () => {
    return (
        <Fragment>
            <header className="header-two main-menu">
                <div className="container">
                    <div className="header-topbar d-none d-md-block">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="topbar-left d-flex align-items-center">
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="hiring-btn"
                                    >
                                        <i className="fal fa-briefcase" />
                                        <span>
                                            We are <span>hiring</span>
                                        </span>
                                    </a>
                                </Link>
                                <ul className="contact-info">
                                    <li>
                                        <i className="fal fa-phone" />
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                987-098-756-09
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="topbar-right d-flex justify-content-end">
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
                                                <i className="fab fa-youtube" />
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
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-navbar">
                        <div className="d-flex align-items-center">
                            <div className="site-logo">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="img/logo-2.png"
                                            alt="ProductSearchDemo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <nav className="site-nav-menu">
                                <ul className="primary-menu onepage-nav">
                                    <li className="current">
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                href="/"
                                            >
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                href="/about"
                                            >
                                                About us
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                href="/service"
                                            >
                                                Services
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                href="/portfolio"
                                            >
                                                Portfolio
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                href="/shop"
                                            >
                                                Feedbacks
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                href="/blog"
                                            >
                                                News
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="nav-close"
                                    >
                                        <i className="fal fa-times" />
                                    </a>
                                </Link>
                            </nav>
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="nav-toggler"
                                >
                                    <i className="fal fa-bars" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="header-contact-btn">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Get A Free Quote
                                <span>info@webmail.com</span>
                                <span className="icon">
                                    <i className="flaticon-email" />
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
            <Mobilemenu />
        </Fragment>
    );
};

export default Header2;
