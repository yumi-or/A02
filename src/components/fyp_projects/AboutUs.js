import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <section id="aboutus" className="service-area section-gap primary-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center mb-30">
              <h2 className="title">關於我們</h2>
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
                  <div className="col-xl-20">
                    <div className="service-img">
                      <img src="img/service/22.jpeg" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-10">
                    <div className="service-desc">
                      <h4>香港專業教育學院（李惠利）</h4>
                      <p>
                        我們是一群來自香港專業教育學院（李惠利）資訊科技系的學生。
                        我們設想利用科技推動香港教育和創新的進一步發展。
                        我們的目標是培養香港寶貴的人力資源，以協助我們的長遠發展。
                      </p>
                      <Link href="https://www.hkdi.edu.hk/tc/dilwl_infoday/">
                        <a className="service-link">了解更多</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          {/*<Fade right>*/}
          {/*  <div*/}
          {/*    className="col-md-6 col-sm-10 wow fadeInRight"*/}
          {/*    data-wow-delay="0.4s"*/}
          {/*  >*/}
          {/*    <div className="service-box mt-30">*/}
          {/*      <div className="row align-items-center">*/}
          {/*        <div className="col-xl-6">*/}
          {/*          <div className="service-img">*/}
          {/*            <img src="img/service/02.png" alt="iimage" />*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div className="col-xl-6">*/}
          {/*          <div className="service-desc">*/}
          {/*            <h4>Game Development</h4>*/}
          {/*            <p>*/}
          {/*              Productservices are professional services that help*/}
          {/*              market or advertise your business online.*/}
          {/*            </p>*/}
          {/*            <Link href="/service">*/}
          {/*              <a className="service-link">Learn More</a>*/}
          {/*            </Link>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</Fade>*/}
          {/*<Fade left>*/}
          {/*  <div*/}
          {/*    className="col-md-6 col-sm-10 wow fadeInLeft"*/}
          {/*    data-wow-delay="0.5s"*/}
          {/*  >*/}
          {/*    <div className="service-box pro-service mt-30">*/}
          {/*      <div className="row align-items-center">*/}
          {/*        <div className="col-xl-6">*/}
          {/*          <div className="service-img">*/}
          {/*            <img src="img/service/03.png" alt="iimage" />*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div className="col-xl-6">*/}
          {/*          <div className="service-desc">*/}
          {/*            <h4>*/}
          {/*              <span>Pro</span>Consultancy*/}
          {/*            </h4>*/}
          {/*            <p>*/}
          {/*              Productservices are professional services that help*/}
          {/*              market or advertise your business online.*/}
          {/*            </p>*/}
          {/*            <Link href="/service-2">*/}
          {/*              <a className="service-link">Learn More</a>*/}
          {/*            </Link>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</Fade>*/}
          {/*<Fade right>*/}
          {/*  <div*/}
          {/*    className="col-md-6 col-sm-10 wow fadeInRight"*/}
          {/*    data-wow-delay="0.6s"*/}
          {/*  >*/}
          {/*    <div className="service-box mt-30">*/}
          {/*      <div className="row align-items-center">*/}
          {/*        <div className="col-xl-6">*/}
          {/*          <div className="service-img">*/}
          {/*            <img src="img/service/04.png" alt="iimage" />*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div className="col-xl-6">*/}
          {/*          <div className="service-desc">*/}
          {/*            <h4>Digital Marketing</h4>*/}
          {/*            <p>*/}
          {/*              Productservices are professional services that help*/}
          {/*              market or advertise your business online.*/}
          {/*            </p>*/}
          {/*            <Link href="/service-2">*/}
          {/*              <a className="service-link">Learn More</a>*/}
          {/*            </Link>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</Fade>*/}
        </div>
        <Fade bottom>
          <div className="ticket-generate mt-30 wow fadeInUp">
            <p>
              如果您有任何疑問，請隨時與我們聯繫。
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};


export default AboutUs;
