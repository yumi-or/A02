import Link from "next/link";
import React from "react";

const ShopArea = () => {
    return (
        <section className="shop-area section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="shop-top-filter">
                            <p className="shoping-result-count">
                                Showing 1–9 of 12 results
                            </p>
                            <ul className="product-view-style">
                                <li>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <i className="fal fa-list" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="active-view"
                                        >
                                            <i className="fal fa-th" />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="shop-loop row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/01.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/02.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/03.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/04.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/05.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/06.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/07.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/08.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/09.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/09.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/11.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img
                                            src="img/shop/12.jpg"
                                            alt="ProductImage"
                                        />
                                        <ul className="product-action">
                                            <li>
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <i className="fal fa-shopping-cart" />
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
                                                        <i className="fal fa-heart" />
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
                                                        <i className="fal fa-eye" />
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 className="product-title">
                                        <Link href="/shop-details">
                                            <a>Polo Miranda Tshirt</a>
                                        </Link>
                                    </h5>
                                    <span className="price">$79.00</span>
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
                    <div className="col-xl-3">
                        <div className="primary-sidebar shop-sidebar">
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
                                        placeholder="Search product name"
                                    />
                                    <button type="button">
                                        <i className="fal fa-search" />
                                        Search
                                    </button>
                                </form>
                            </div>
                            <div className="widget product-categories">
                                <h5 className="widget-title">Categories</h5>
                                <ul>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Tshirt <span>08</span>
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
                                                Accessories <span>12</span>
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
                                                Books <span>12</span>
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
                                                Laptop &amp; PC <span>15</span>
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
                                                Polo <span>09</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget price-range-widget">
                                <h5 className="widget-title">Price Range</h5>
                                <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                >
                                    Example range
                                </label>
                                <input
                                    type="range"
                                    className="form-range"
                                    id="customRange1"
                                />
                            </div>
                            <div className="widget product-popular-tags">
                                <h5 className="widget-title">Tags</h5>
                                <ul>
                                    <li>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Tshirt
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
                                                Sunglass
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
                                                Kits
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
                                                Tshirt
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
                                                Sunglass
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
                                                Kits
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
                                                Tshirt
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
                                                Sunglass
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget product-popular">
                                <h5 className="widget-title">Hot Products</h5>
                                <ul>
                                    <li>
                                        <div className="thumb">
                                            <img
                                                src="img/shop/hot-product/01.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h6>
                                                <Link href="/shop-details">
                                                    <a>Polo Miranda Tshirt</a>
                                                </Link>
                                            </h6>
                                            <span className="price">
                                                $79.00
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img
                                                src="img/shop/hot-product/02.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h6>
                                                <Link href="/shop-details">
                                                    <a>Polo Miranda Tshirt</a>
                                                </Link>
                                            </h6>
                                            <span className="price">
                                                $79.00
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img
                                                src="img/shop/hot-product/03.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h6>
                                                <Link href="/shop-details">
                                                    <a>Polo Miranda Tshirt</a>
                                                </Link>
                                            </h6>
                                            <span className="price">
                                                $79.00
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img
                                                src="img/shop/hot-product/04.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h6>
                                                <Link href="/shop-details">
                                                    <a>Polo Miranda Tshirt</a>
                                                </Link>
                                            </h6>
                                            <span className="price">
                                                $79.00
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopArea;
