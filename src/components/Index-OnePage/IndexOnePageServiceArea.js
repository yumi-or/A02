import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const IndexOnePageServiceArea = () => {
  return (
    <section className="service-area section-gap primary-bg" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center mb-30">
              <span className="title-tag">Our Services</span>
              <h2 className="title">
                We provide wide range of digital
                <span>service</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Fade left>
            <div
              className="col-md-6 col-sm-10 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="service-box mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="img/service/01.png" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>Digital Product</h4>
                      <p>
                        Productservices are professional services that help
                        market or advertise your business online.
                      </p>
                      <Link href="">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="service-link"
                        >
                          Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div
              className="col-md-6 col-sm-10 wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <div className="service-box mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="img/service/02.png" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>Game Development</h4>
                      <p>
                        Productservices are professional services that help
                        market or advertise your business online.
                      </p>
                      <Link href="">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="service-link"
                        >
                          Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div
              className="col-md-6 col-sm-10 wow fadeInLeft"
              data-wow-delay="0.5s"
            >
              <div className="service-box pro-service mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="img/service/03.png" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>
                        <span>Pro</span>Consultancy
                      </h4>
                      <p>
                        Productservices are professional services that help
                        market or advertise your business online.
                      </p>
                      <Link href="">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="service-link"
                        >
                          Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div
              className="col-md-6 col-sm-10 wow fadeInRight"
              data-wow-delay="0.6s"
            >
              <div className="service-box mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="img/service/04.png" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>Digital Marketing</h4>
                      <p>
                        Productservices are professional services that help
                        market or advertise your business online.
                      </p>
                      <Link href="">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="service-link"
                        >
                          Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="ticket-generate mt-30 wow fadeInUp">
            <p>
              Need Help With Your IT Endeavors? Contact Us to Get a Pro Service!
            </p>
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              href=""
            >
              <i className="fal fa-ticket" /> Generate A Ticket
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default IndexOnePageServiceArea;
