import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const IndexOnePageAboutSection = () => {
  return (
    <div className="about-section section-gap" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <Fade left>
            <div className="col-lg-6 col-md-8 wow fadeInLeft">
              <div className="about-illustration mb-md-gap-50">
                <img src="img/illustration/01.png" alt="iimage" />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-6 col-md-10 wow fadeInRight">
              <div className="about-text">
                <div className="section-title mb-30">
                  <span className="title-tag">About Us</span>
                  <h2 className="title">
                    Get an amazing experience with quality level
                    <span>team</span>
                  </h2>
                </div>
                <p>
                  Productservices are professional services that help market or
                  advertise your business online. Best Way to Manage and Share
                  Work Resources.
                </p>
                <Link href="">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="main-btn mt-30"
                  >
                    Learn More
                  </a>
                </Link>
                <div className="about-author">
                  <div className="author-img">
                    <img src="img/about-author.jpg" alt="Image" />
                  </div>
                  <div className="author-desc">
                    <h5>Rosalina D. William</h5>
                    <span>Founder of Bella</span>
                  </div>
                  <div className="brand-img">
                    <img src="img/brand/2.png" alt="iimage" />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default IndexOnePageAboutSection;
