import Link from "next/link";
import { Fragment, useState } from "react";
import Mobilemenu from "./Mobilemenu";

const Header6 = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <Fragment>
            <header className="header-one sticky-header main-menu">
                <div className="header-topbar with-language-right d-none d-md-block">
                    <div className="container-fluid">
                        <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="topbar-left d-flex align-items-center">
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
                                <ul className="contact-info">
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <span>Phone:</span>
                                                987-098-756-09
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
                                                <span>Email:</span>
                                                info@webmail.com
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="topbar-right d-flex align-items-center justify-content-lg-end">
                                <ul className="topbar-menu">
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Sign In
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
                                                Company
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
                                                Contact Us
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="language-dropdown">
                        <span>
                            English <i className="fal fa-angle-down" />
                        </span>
                    </div>
                </div>
                <div className="header-navbar">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="navbar-left d-flex align-items-center">
                                <div className="site-logo">
                                    <Link href="/">
                                        <a>
                                            <img
                                                src="img/logo.png"
                                                alt="ProductSearchDemo"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <nav className="site-nav-menu">
                                    <ul className="primary-menu onepage-nav">
                                        <li className="current">
                                            <Link href="/">
                                                <a>Home</a>
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
                                                    href="/team"
                                                >
                                                    Team
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
                            </div>
                            <div className="navbar-right d-flex align-items-center">
                                <div className="cart-widget">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="cart-icon"
                                        >
                                            <i className="fal fa-shopping-cart" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="offcanvas-menu">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="panel-icon"
                                        >
                                            <i className="fal fa-bars" />
                                        </a>
                                    </Link>
                                    <div className="offcanvas-panel">
                                        <div className="offcanvas-panel-inner">
                                            <div className="panel-logo">
                                                <img
                                                    src="img/logo.png"
                                                    alt="Image"
                                                />
                                            </div>
                                            <div className="about-us">
                                                <h5 className="panel-widget-title">
                                                    About Us
                                                </h5>
                                                <p>
                                                    Lorem, ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Tempore ipsam alias
                                                    quae cupiditate quas, neque
                                                    eum magni impedit asperiores
                                                    ad id sint repudiandae
                                                    quaerat, omnis commodi
                                                    consequatur dolore rerum
                                                    deleniti!
                                                </p>
                                            </div>
                                            <div className="contact-us">
                                                <h5 className="panel-widget-title">
                                                    Contact Us
                                                </h5>
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-map-marker-alt" />
                                                        121 King St, Melbourne
                                                        VIC 3000, Australia.
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-envelope-open" />
                                                        <Link href="">
                                                            <a
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                                href="mailto:info@example.com"
                                                            >
                                                                info@example.com
                                                            </a>
                                                        </Link>
                                                        <Link href="">
                                                            <a
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                                href="mailto:info@example.com"
                                                            >
                                                                info@example.com
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-phone" />
                                                        <Link href="">
                                                            <a
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                                href="tel:(312)-895-9800"
                                                            >
                                                                +0 123-456-7890
                                                            </a>
                                                        </Link>
                                                        <Link href="">
                                                            <a
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                }}
                                                                href="tel:(312)-895-9800"
                                                            >
                                                                +0 123-456-7890
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <Link href="">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    className="panel-close"
                                                >
                                                    <i className="fal fa-times" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="search-widget">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setToggle(!toggle);
                                            }}
                                            className="search-icon"
                                        >
                                            <i className="far fa-search" />
                                        </a>
                                    </Link>
                                    <div
                                        className="search-form"
                                        style={{
                                            display: toggle ? "block" : "none",
                                        }}
                                    >
                                        <form
                                            action="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <input
                                                type="search"
                                                placeholder="Search here...."
                                            />
                                            <button type="submit">
                                                <i className="fal fa-search" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
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
                    </div>
                </div>
            </header>
            <Mobilemenu />
        </Fragment>
    );
};

export default Header6;
