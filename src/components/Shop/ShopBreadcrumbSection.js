import Link from "next/link";
import React from "react";

const ShopBreadcrumbSection = () => {
    return (
        <section
            className="breadcrumb-section bgc"
            style={{ backgroundImage: "url(img/breadcrumb-bg.jpg)" }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="breadcrumb-text">
                            <span className="title-tag">
                                Welcome to our company
                            </span>
                            <h2 className="page-title">Product Shop.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="breadcrumb-nav">
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li className="separator">|</li>
                                <li>Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopBreadcrumbSection;
