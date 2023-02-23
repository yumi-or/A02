import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";
// import styled from "styled-components";
// import React, {useState, useEffect} from "react";

const Discuss = () => {
  return (
      <section id="discuss">
        <div className="about-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <Fade left>
                <div className="col-lg-6 col-md-8 wow fadeInLeft">
                  <div className="about-illustration mb-md-gap-50">
                    <img src="img/service/23.jpeg" alt="iimage" />
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="col-lg-6 col-md-10 wow fadeInRight">
                  <div className="about-text">
                    <div className="section-title mb-10">
                      <span className="title-tag"></span>
                      <h6 className="title">
                      </h6>
                    </div>
                    <h2>討論區</h2>
                    <p>
                      親子討論區，專為父母及準父母提供熱門親子討論及熱門話題
                    </p>

                    <Link href="/service-2">
                      <a className="main-btn mt-30">留言板</a>
                    </Link>
                    <div className="about-author">
                      <iframe width="700" height="330" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/59837141-4376-4fc4-920b-bebd181b1456"></iframe>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <Fade bottom>
          <div className="ticket-generate mt-30 wow fadeInUp">
            <p>
              如果您有任何疑問，請隨時與我們聯繫。
            </p>
          </div>
        </Fade>
      </section>
  );
};

export default Discuss;
