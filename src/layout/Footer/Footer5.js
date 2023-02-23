import Link from "next/link";
import React from "react";

const Footer5 = () => {
  return (
    <footer className="footer-four">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-5 col-lg-3">
              <div className="footer-logo mb-md-gap-30">
                <img src="img/logo-white-2.png" alt="Image" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7 col-lg-9">
              <div className="footer-newsletter-form">
                <form
                  action="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <label htmlFor="email">Newsletter</label>
                  <div className="input-wrap">
                    <div className="position-relative">
                      <span>
                        <i className="fal fa-envelope" />
                      </span>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email address"
                      />
                    </div>
                    <button type="submit">Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 widget-border">
              <div className="widget contact-info-two">
                <h5 className="widget-title">Our Contact</h5>
                <p>
                  info@webexamplemail.com
                  <br />
                  786.987.980.56 14/A,
                  <br />
                  Miran Tower, NYC
                </p>
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
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 widget-border">
              <div className="widget nav-widget">
                <h5 className="widget-title">About Us</h5>
                <ul>
                  <li>
                    <Link href="/">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Services
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Pricing
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 widget-border">
              <div className="widget recent-post-widget">
                <h5 className="widget-title">News feeds.</h5>
                <ul>
                  <li>
                    <div className="post-img">
                      <img src="img/post-widget/03.jpg" alt="iimage" />
                    </div>
                    <div className="post-desc">
                      <span className="post-date">
                        <i className="fal fa-calendar-alt" />
                        10th May 2020
                      </span>
                      <h6>
                        <Link href="/blog-single">
                          <a>Chemical Engineering Projects For All.</a>
                        </Link>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="post-img">
                      <img src="img/post-widget/02.jpg" alt="iimage" />
                    </div>
                    <div className="post-desc">
                      <span className="post-date">
                        <i className="fal fa-calendar-alt" />
                        10th May 2020
                      </span>
                      <h6>
                        <Link href="/blog-single">
                          <a>Chemical Engineering Projects For All.</a>
                        </Link>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 widget-border">
              <div className="widget schedule-widget">
                <h5 className="widget-title">Opening Hours</h5>
                <div className="widget-inner">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="fal fa-calendar-times" />
                      </span>
                      <h6>Regular Time</h6>
                      <p>
                        Mon - Sat 8:00 - 17:30,
                        <br /> Sunday - CLOSED
                      </p>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fal fa-calendar-times" />
                      </span>
                      <h6>Off Day Shedule</h6>
                      <p>
                        Mon - Sat 8:00 - 17:30,
                        <br /> Sunday - CLOSED
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            Copyright By@
            <Link href="">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                WebTend
              </a>
            </Link>
            - 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
