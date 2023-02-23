import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const School = () => {
  return (
    <section id="school" className="service-area section-gap primary-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-30">
              {/*<span className="title-tag">Our Services</span>*/}
              <h2 className="title">
                不同學校的介紹
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="service-img">
            <img src="img/service/08.jpeg" alt="iimage" />
          </div>
          <Link href="/Kschool">
            <a className="main-btn mt-30">幼稚園</a>
          </Link>
          <Link href="/Pschool">
            <a className="main-btn mt-30">小學</a>
          </Link>
          <Link href="/Hschool">
            <a className="main-btn mt-30">中學</a>
          </Link>
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

export default School;
