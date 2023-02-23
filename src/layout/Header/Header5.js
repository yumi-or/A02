import Link from "next/link";
import { Fragment, useState } from "react";
import Mobilemenu from "./Mobilemenu";

const Header5 = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <Fragment>
            <header className="header-four sticky-header main-menu">
                <div className="header-navbar">
                    <div className="container position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="navbar-left d-flex align-items-center">
                                <div className="site-logo">
                                    <Link href="/">
                                        <a>
                                            <img
                                                src="img/logo-4.png"
                                                alt="PST"
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
                                                    href="/about"
                                                >
                                                    About
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
                                                    Process
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
                            </div>
                            <div className="navbar-right d-flex align-items-center">
                                <div className="header-contact-btn">
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Get Started Now
                                        </a>
                                    </Link>
                                </div>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="nav-toggler"
                                    >
                                        <i className="far fa-bars" />
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

export default Header5;
