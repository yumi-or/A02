import Link from "next/link";
import { Fragment, useState } from "react";
import Mobilemenu from "./Mobilemenu";

const Header1 = () => {
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
                                                alt="ProductSearchDemo"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <nav className="site-nav-menu">
                                    <ul className="primary-menu">
                                        <li className="current">
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <Link href="/">
                                                        <a>Home One</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-2">
                                                        <a>Home Two</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-3">
                                                        <a>Home Three</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-4">
                                                        <a>Home Four</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-onepage">
                                                        <a>OnePage</a>
                                                    </Link>

                                                    <ul className="submenu">
                                                        <li>
                                                            <Link href="/index-onepage">
                                                                <a>Home One</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/index-2-onepage">
                                                                <a>Home Two</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/index-3-onepage">
                                                                <a>
                                                                    Home Three
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/index-4-onepage">
                                                                <a>Home Four</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <span className="dd-trigger">
                                                        <i className="far fa-plus" />
                                                    </span>
                                                </li>
                                            </ul>
                                            <span className="dd-trigger">
                                                <i className="far fa-plus" />
                                            </span>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>Pages</a>
                                            </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <Link href="/portfolio">
                                                        <a>Portfolio</a>
                                                    </Link>
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link href="/portfolio">
                                                                <a>
                                                                    Portfolio
                                                                    One
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/portfolio-2">
                                                                <a>
                                                                    Portfolio
                                                                    Two
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/portfolio-3">
                                                                <a>
                                                                    Portfolio
                                                                    Three
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/portfolio-details">
                                                                <a>
                                                                    Portfolio
                                                                    Details
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <span className="dd-trigger">
                                                        <i className="far fa-plus" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <Link href="/service">
                                                        <a>Service</a>
                                                    </Link>
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link href="/service">
                                                                <a>
                                                                    Service One
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/service-2">
                                                                <a>
                                                                    Service Two
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <span className="dd-trigger">
                                                        <i className="far fa-plus" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <Link href="/faq">
                                                        <a>FAQ</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pricing">
                                                        <a>Pricing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/process">
                                                        <a>Process</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/team">
                                                        <a>Team</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop">
                                                        <a>Shop</a>
                                                    </Link>
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link href="/shop-details">
                                                                <a>
                                                                    Shop Details
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <span className="dd-trigger">
                                                        <i className="far fa-plus" />
                                                    </span>
                                                </li>
                                            </ul>
                                            <span className="dd-trigger">
                                                <i className="far fa-plus" />
                                            </span>
                                        </li>
                                        <li>
                                            <Link href="/blog">
                                                <a>News</a>
                                            </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <Link href="/blog-single">
                                                        <a>News Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <span className="dd-trigger">
                                                <i className="far fa-plus" />
                                            </span>
                                            <span className="dd-trigger">
                                                <i className="far fa-plus" />
                                            </span>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact us</a>
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

export default Header1;
