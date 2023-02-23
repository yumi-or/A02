import Link from "next/link";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";

const ShopDetailsShopArea = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [activeBox, setActive] = useState(1);
    const activeLi = (value) => (activeBox === value ? "active" : "");
    return (
        <section className="shop-area">
            <div className="product-top section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
                            <div className="product-gallery">
                                <div className="main-gallery-image">
                                    <Slider {...settings}>
                                        <div className="image">
                                            <img
                                                src="img/shop/product-gallery/01.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="image">
                                            <img
                                                src="img/shop/product-gallery/02.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="image">
                                            <img
                                                src="img/shop/product-gallery/03.jpg"
                                                alt="Image"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="gallery-dots-slider">
                                    <div className="dots-image">
                                        <img
                                            src="img/shop/product-gallery/thumb-01.jpg"
                                            alt="Dots"
                                        />
                                    </div>
                                    <div className="dots-image">
                                        <img
                                            src="img/shop/product-gallery/thumb-02.jpg"
                                            alt="Dots"
                                        />
                                    </div>
                                    <div className="dots-image">
                                        <img
                                            src="img/shop/product-gallery/thumb-03.jpg"
                                            alt="Dots"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-10">
                            <div className="product-summary">
                                <span className="product-cat">
                                    {/*Maxi Dress*/}
                                </span>
                                <h3 className="product-title">
                                    Good Deeds Royal Blue Furniture
                                </h3>
                                <div className="summary-divider" />
                                <span className="price">
                                    £245.00 <del>£399.99</del>
                                </span>
                                <ul className="rating">
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li className="rating-text">
                                        (25 Customer review)
                                    </li>
                                </ul>
                                <div className="summary-divider" />
                                <div className="short-desc">
                                    <p>
                                        Sweet as can be, the darling Lucy Love
                                        Sophia Rust Red Embroidered Dress is
                                        here to brighten your day! Slender
                                        straps support the apron neckline of
                                        this gauzy, woven dress bedecked in
                                        floral embroidery. Sheath silhouette
                                        ends at a mini hem. Sleek, polished, and
                                        boasting an impeccably modern fit, this
                                        blue, 2-button Lazio suit features a
                                        notch lapel,
                                    </p>
                                </div>
                                <ul className="product-meta">
                                    <li>
                                        <span>Availability:</span> In stock
                                    </li>
                                    <li>
                                        <span>Product Code:</span> #4657
                                    </li>
                                    <li>
                                        <span>Tags:</span>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Fashion,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Hood,
                                            </a>
                                        </Link>
                                        <Link href="">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                Classic
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="summary-divider" />
                                <div className="product-cart-from">
                                    <form
                                        action="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <div className="input-fields">
                                            <div className="input-field">
                                                <label htmlFor="color">
                                                    Color
                                                </label>
                                                <select name="color" id="color">
                                                    <option value={1}>
                                                        Select Color
                                                    </option>
                                                    <option value={2}>
                                                        Red
                                                    </option>
                                                    <option value={3}>
                                                        Blue
                                                    </option>
                                                    <option value={4}>
                                                        Green
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="input-field">
                                                <label htmlFor="size">
                                                    Size
                                                </label>
                                                <select name="size" id="size">
                                                    <option value={1}>
                                                        Select size
                                                    </option>
                                                    <option value={2}>
                                                        Samll
                                                    </option>
                                                    <option value={3}>
                                                        Large
                                                    </option>
                                                    <option value={4}>
                                                        Extra Large
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="input-field">
                                                <label htmlFor="qty">Qty</label>
                                                <div className="qty-box">
                                                    <input
                                                        type="number"
                                                        id="qty"
                                                        name="qty"
                                                        defaultValue={1}
                                                    />
                                                    <span className="qty-plus">
                                                        <i className="fal fa-sort-up" />
                                                    </span>
                                                    <span className="qty-minus">
                                                        <i className="fal fa-sort-down" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="input-field">
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="clear-btn"
                                                    >
                                                        Clear Selection
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="input-fields form-btns">
                                            <div className="input-field">
                                                <button
                                                    type="submit"
                                                    className="cart-btn"
                                                >
                                                    <i className="fal fa-shopping-basket" />
                                                    Add To Cart
                                                </button>
                                            </div>
                                            <div className="input-field">
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="wishlist-btn"
                                                    >
                                                        <i className="fal fa-heart" />
                                                        Add To Wishlist
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="input-field">
                                                <Link href="">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                        }}
                                                        className="compare-btn"
                                                    >
                                                        <i className="fal fa-expand" />
                                                        Compare
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <ul className="social-share">
                                    <li>
                                        <span>Share This: </span>
                                    </li>
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
                                                <i className="fab fa-slack" />
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
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-tab section-gap grey-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-11">
                            <ul
                                className="nav nav-tabs"
                                id="productTab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeLi(1)}`}
                                        onClick={() => setActive(1)}
                                        data-bs-toggle="tab"
                                        data-bs-target="#descriptions"
                                        type="button"
                                        role="tab"
                                    >
                                        Descriptions
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeLi(2)}`}
                                        onClick={() => setActive(2)}
                                        data-bs-toggle="tab"
                                        data-bs-target="#additional-info"
                                        type="button"
                                        role="tab"
                                    >
                                        Additional Information
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeLi(3)}`}
                                        onClick={() => setActive(3)}
                                        data-bs-toggle="tab"
                                        data-bs-target="#reviews"
                                        type="button"
                                        role="tab"
                                    >
                                        Reviews (2)
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="productTabContent">
                                <Fade big>
                                    <div
                                        className={`tab-pane fade ${activeLi(
                                            1
                                        )} && show`}
                                        id="descriptions"
                                        role="tabpanel"
                                    >
                                        <p className="mb-30">
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
                                            doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi
                                            tempora incidunt ut labore et dolore
                                            magnam aliquam quaerat
                                            voluptatem.Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud
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
                                            doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi
                                            tempora incidunt.
                                        </p>
                                        <p className="mb-30">
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
                                            doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi
                                            tempora incidunt ut labore et dolore
                                            magnam aliquam quaerat
                                            voluptatem.Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua.
                                        </p>
                                        <p>
                                            Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste natus
                                            error sit voluptatem accusantium
                                            doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi
                                            tempora incidunt.
                                        </p>
                                    </div>
                                </Fade>
                                <Fade big>
                                    <div
                                        className={`tab-pane fade ${activeLi(
                                            2
                                        )} && show`}
                                        id="additional-info"
                                        role="tabpanel"
                                    >
                                        <table className="additional-table">
                                            <tbody>
                                                <tr>
                                                    <th>Model</th>
                                                    <td>
                                                        Microsoft Surface Pro 6
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Processor</th>
                                                    <td>
                                                        Intel® Core™ 8th Gen
                                                        i5-8250U or i7-8650U
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Memory</th>
                                                    <td>8GB or 16GB RAM </td>
                                                </tr>
                                                <tr>
                                                    <th>Storage</th>
                                                    <td>
                                                        Solid-state drive (SSD)
                                                        options: 128GB, 256GB,
                                                        512GB, or 1TB
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Battery life</th>
                                                    <td>
                                                        Up to 13.5 hours of
                                                        local video playback
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Graphics</th>
                                                    <td>
                                                        Intel® UHD Graphics 620
                                                        (i5)
                                                        <br /> Intel® UHD
                                                        Graphics 620 (i7)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Warranty</th>
                                                    <td>
                                                        1-year limited hardware
                                                        warranty
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Fade>
                                <Fade big>
                                    <div
                                        className={`tab-pane fade ${activeLi(
                                            3
                                        )} && show`}
                                        id="reviews"
                                        role="tabpanel"
                                    >
                                        <div className="review-area">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <ul className="review-lists">
                                                        <li className="single-review">
                                                            <div className="thumb">
                                                                <img
                                                                    src="img/blog/comment-01.jpg"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            <div className="review-desc">
                                                                <h5 className="name">
                                                                    Rosalina
                                                                    Kelian
                                                                </h5>
                                                                <span className="date">
                                                                    19th May
                                                                    2018
                                                                </span>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetuer
                                                                    adipiscing
                                                                    elit. Aenean
                                                                    commodo
                                                                    ligula eget
                                                                    dolor.
                                                                    Aenean
                                                                    massa. cu
                                                                    sociis
                                                                    natoque
                                                                </p>
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star-half-alt" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="far fa-star" />
                                                                    </li>
                                                                </ul>
                                                                <Link href="">
                                                                    <a
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                        }}
                                                                        className="reply-btn"
                                                                    >
                                                                        Reply
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li className="single-review">
                                                            <div className="thumb">
                                                                <img
                                                                    src="img/blog/comment-02.jpg"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            <div className="review-desc">
                                                                <h5 className="name">
                                                                    Rosalina
                                                                    Kelian
                                                                </h5>
                                                                <span className="date">
                                                                    19th May
                                                                    2018
                                                                </span>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetuer
                                                                    adipiscing
                                                                    elit. Aenean
                                                                    commodo
                                                                    ligula eget
                                                                    dolor.
                                                                    Aenean
                                                                    massa. cu
                                                                    sociis
                                                                    natoque
                                                                </p>
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-star-half-alt" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="far fa-star" />
                                                                    </li>
                                                                </ul>
                                                                <Link href="">
                                                                    <a
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                        }}
                                                                        className="reply-btn"
                                                                    >
                                                                        Reply
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="reviews-form mt-md-gap-40">
                                                        <h5>Add Your Review</h5>
                                                        <form
                                                            action="#"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                            }}
                                                        >
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Your Name"
                                                                    />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input
                                                                        type="email"
                                                                        placeholder="Your Email"
                                                                    />
                                                                </div>
                                                                <div className="col-12">
                                                                    <textarea
                                                                        placeholder="Your Review"
                                                                        defaultValue={
                                                                            ""
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="col-12">
                                                                    <button type="submit">
                                                                        Submit
                                                                        Review
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopDetailsShopArea;
