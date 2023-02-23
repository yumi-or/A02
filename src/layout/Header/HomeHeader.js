import Link from "next/link";
import { Fragment, useState } from "react";
import Mobilemenu from "./Mobilemenu";

const HomeHeader = () => {
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
                                                src="/img/logo_a02.png"
                                                alt="MF"
                                                style={{maxHeight : "60px"}}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <nav className="site-nav-menu">
                                    <ul className="primary-menu">
                                        <li className="current">
                                            <Link href="/#home">
                                                主頁
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#school">
                                                學校簡介
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
                                        {/*<li>*/}
                                        {/*    <Link href="/pst">*/}
                                        {/*        <a>Cat Species Identification Demo</a>*/}
                                        {/*    </Link>*/}
                                        {/*</li>*/}
                                        {/*<li>*/}
                                        {/*    <Link href="/mmi">*/}
                                        {/*        <a>Mirror Members identification Demo</a>*/}
                                        {/*    </Link>*/}
                                        {/*</li>*/}
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
                                {/*<div className="search-widget">*/}
                                {/*    <Link href="">*/}
                                {/*        <a*/}
                                {/*            onClick={(e) => {*/}
                                {/*                e.preventDefault();*/}
                                {/*                setToggle(!toggle);*/}
                                {/*            }}*/}
                                {/*            className="search-icon"*/}
                                {/*        >*/}
                                {/*            <i className="far fa-search" />*/}
                                {/*        </a>*/}
                                {/*    </Link>*/}

                                {/*    <div*/}
                                {/*        className="search-form"*/}
                                {/*        style={{*/}
                                {/*            display: toggle ? "block" : "none",*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        <form*/}
                                {/*            action="#"*/}
                                {/*            onClick={(e) => {*/}
                                {/*                e.preventDefault();*/}
                                {/*            }}*/}
                                {/*        >*/}
                                {/*            <input*/}
                                {/*                type="search"*/}
                                {/*                placeholder="Search here...."*/}
                                {/*            />*/}
                                {/*            <button type="submit">*/}
                                {/*                <i className="fal fa-search" />*/}
                                {/*            </button>*/}
                                {/*        </form>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            {/*<div className="navbar-right d-flex align-items-center">*/}
                            {/*    <div className="header-contact-btn">*/}
                            {/*        <Link href="">*/}
                            {/*            <a*/}
                            {/*                onClick={(e) => {*/}
                            {/*                    e.preventDefault();*/}
                            {/*                }}*/}
                            {/*            >*/}
                            {/*                Get Started Now*/}
                            {/*            </a>*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*    <Link href="">*/}
                            {/*        <a*/}
                            {/*            onClick={(e) => {*/}
                            {/*                e.preventDefault();*/}
                            {/*            }}*/}
                            {/*            className="nav-toggler"*/}
                            {/*        >*/}
                            {/*            <i className="far fa-bars" />*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </header>
            <Mobilemenu />
        </Fragment>
    );
};

export default HomeHeader;
