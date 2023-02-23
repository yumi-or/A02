import Link from "next/link";
import React from "react";

const Index3FeaturesSection = () => {
  return (
    <section className="features-section section-gap-top-90 section-gap-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="feature-box mt-30">
              <div className="feature-content">
                <div className="feature-img">
                  <img src="img/feature/01.jpg" alt="iimage" />
                </div>
                <h4>Conversation &amp; Insights</h4>
                <p>
                  Productservices are professional services that help market or
                  advertise your business online base work.
                </p>
              </div>
              <Link href="">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="feature-link"
                >
                  Check Details
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box mt-30">
              <div className="feature-content">
                <div className="feature-img">
                  <img src="img/feature/02.jpg" alt="iimage" />
                </div>
                <h4>Conversation &amp; Insights</h4>
                <p>
                  Productservices are professional services that help market or
                  advertise your business online base work.
                </p>
              </div>
              <Link href="">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="feature-link"
                >
                  Check Details
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box mt-30">
              <div className="feature-content">
                <div className="feature-img">
                  <img src="img/feature/03.jpg" alt="iimage" />
                </div>
                <h4>Conversation &amp; Insights</h4>
                <p>
                  Productservices are professional services that help market or
                  advertise your business online base work.
                </p>
              </div>
              <Link href="">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="feature-link"
                >
                  Check Details
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index3FeaturesSection;
