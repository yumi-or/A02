import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";
import HomeHeader from "../src/layout/Header/HomeHeader";
import Footer1 from "../src/layout/Footer/Footer1";

const Kind = () => {
  return (
      <section id="kind">
        <HomeHeader />
        <div className="about-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <Fade left>
                <div className="col-lg-6 col-md-10 wow fadeInLeft">
                  <div className="about-illustration mb-md-gap-10">
                    <img src="img/service/17.jpeg" alt="iimage" />
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="col-lg-6 col-md-10 wow fadeInRight">
                  <div className="about-text">
                    <div className="section-title mb-30">
                      <span className="title-tag">幼稚園幼兒班（K1）2023/24 學年收生安排</span>
                      <h4 className="title">
                        {/*<span>team</span>*/}
                      </h4>
                    </div>
                    <dl>
                      <dt>申請註冊證</dt>
                      <dd>於 2022 年 9 月至 11 月期間填妥及遞交「幼稚園入學註冊證」申請，你將會於 6-8 星期內以郵遞方式收到「註冊證」。</dd>
                      <dt>申請幼稚園</dt>
                      <dd>於 2022 年 9 月至 12 月期間，向你心儀幼稚園索取並遞交入學申請表，並按日期參與入學面試。</dd>
                      <dt>取錄結果</dt>
                      <dd>所有參加這安排的幼稚園須在 2022 年 12 月 16 日前通知申請者其學位申請結果。</dd>
                      <dt>入學註冊</dt>
                      <dd>幼稚園會要求獲取錄的學童家長在「統一註冊日期」（定於 2023 年 1 月 5/6/7 日）到校提交「註冊證」及註冊費。由於每名學童只會獲發一份「註冊證」，家長（如獲多所幼稚園取錄）須選定並到一所幼稚園註冊。</dd>
                    </dl>
                    {/*<p>*/}
                    {/*  <dd>*/}
                    {/*    <dt>申請註冊證</dt>*/}
                    {/*  </dd>*/}
                    {/*  於 2022 年 9 月至 11 月期間填妥及遞交「幼稚園入學註冊證」申請，你將會於 6-8 星期內以郵遞方式收到「註冊證」。*/}
                    {/*</p>*/}


                    {/*<Link href="/contact">*/}
                    {/*  <a className="main-btn mt-30">Learn More</a>*/}
                    {/*</Link>*/}
                    <div className="about-author">
                      {/*<div className="author-img">*/}
                      {/*  <img src="img/about-author.jpg" alt="Image" />*/}
                      {/*</div>*/}
                      {/*<div className="author-desc">*/}
                      {/*  <h5>Rosalina D. William</h5>*/}
                      {/*  <span>Founder of Bella</span>*/}
                      {/*</div>*/}
                      {/*<div className="brand-img">*/}
                      {/*  <img src="img/brand/2.png" alt="iimage" />*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <Footer1 />
      </section>

  );
};

export default Kind;
