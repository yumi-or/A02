import Link from "next/link";
import { useState } from "react";

const Mobilemenu = () => {
    const [toggle, setToggle] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");
    const setActive = (value) =>
        setActiveMenu(value === activeMenu ? "" : value);

    const [activeMenu2, setActiveMenu2] = useState("");
    const setActive2 = (value) =>
        setActiveMenu2(value === activeMenu2 ? "" : value);

    const displayChange = (value) =>
        value === activeMenu ? { display: "block" } : { display: "none" };

    const displayChange2 = (value) =>
        value === activeMenu2 ? { display: "block" } : { display: "none" };
    const changeIcon = (value) =>
        value === activeMenu ? "far fa-minus" : "far fa-plus";

    const changeIcon2 = (value) =>
        value === activeMenu2 ? "far fa-minus" : "far fa-plus";
    return (
        <header className="header-four sticky-header">
            <div className="header-navbar mobile-menu breakpoint-on">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="navbar-left d-flex align-items-center">
                            <div className="site-logo">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/img/logo_a02.png"
                                            alt="MF"
                                            style={{maxHeight : "60px"}}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <nav
                                className={`site-nav-menu ${
                                    toggle ? "menu-on" : ""
                                }`}
                            >
                                <ul className="primary-menu">
                                    <li className="current">
                                        <Link href="/">
                                            <a>主頁</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#school">
                                            <a>學校簡介</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#ai">
                                            <a>AI分析學校</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#allowance">
                                            <a>津貼資料</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#aboutus">
                                            <a>關於我們</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#discuss">
                                            <a>討論區</a>
                                        </Link>
                                    </li>
                                </ul>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setToggle(false);
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
                                        }}
                                        className="search-icon"
                                    >
                                        <i className="far fa-search" />
                                    </a>
                                </Link>
                                <div
                                    className="search-form"
                                    style={{ display: "none" }}
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
                                        setToggle(!toggle);
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
    );
};

export default Mobilemenu;
