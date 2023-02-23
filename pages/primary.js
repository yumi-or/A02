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
                    <img src="img/service/18.jpeg" alt="iimage" />
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="col-lg-6 col-md-10 wow fadeInRight">
                  <div className="about-text">
                    <div className="section-title mb-30">
                      <span className="title-tag">升小選校攻略及詳情</span>
                      <h4 className="title">
                        {/*<span>team</span>*/}
                      </h4>
                    </div>
                    <dt>STEP 1：到教育局網站瀏覽《小學名冊》</dt>
                    <dd>派位開始前，家長可先到到教育局網站瀏覽《小一學校網小學名冊》，記低心儀學校的編號，盤算和演習一下前往統一派位中心當日會怎樣排序。</dd>
                    <dt>STEP 2：第一階段「自行分配學位」收生開始，到心儀學校遞表</dt>
                    <dd>學校會分配大約 50% 的學額自行收生，家長須於每年約 9 月到心儀學校遞交《入學申請表》。</dd>
                    <figure className="wp-block-table">
                      <table>
                        <thead>
                        <tr>
                          <th>自行分配學位類別意思</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>必收生</td>
                          <td>在校員工子女或在校學童弟妹</td>
                        </tr>
                        <tr>
                          <td>計分生</td>
                          <td>家長為學校畢業生等，與學校有關連的學童</td>
                        </tr>
                        </tbody>
                      </table>
                    </figure>
                    <dt>STEP 3：第二階段「統一派位」開始，前往派位中心填表</dt>
                    <dd>學校會於同年約 11 月的時間公布自行收生取錄名單，未獲取錄得學童之家長，須於翌年 1 月到統一派位中心為子女辦理「統一派位」選校手續，即是填寫《選擇學校表格》。
                      此時最好帶同所需筆記，避免臨場才思考排序。</dd>
                    <dt>STEP 4：叩門</dt>
                    <dd>如對派位結果不滿意，家長仍須到被派中的學校進行註冊，然後可到心儀學校「叩門」，即逐家逐戶到學校查詢是否接受入讀申請。 每間小學的叩門安排均有不同，家長可於派位日前開始留意心儀學校的網站，以了解其叩門程序。</dd>

                    {/*<p>*/}
                    {/*<figure className="wp-block-table">*/}
                    {/*  <table>*/}
                    {/*    <thead>*/}
                    {/*    <tr>*/}
                    {/*      <th>日期</th>*/}
                    {/*      <th>小一報名程序</th>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody>*/}
                    {/*    <tr>*/}
                    {/*      <td>2020 年 9 月 21 – 25 日</td>*/}
                    {/*      <td>進行第一階段「自行分配學位」家長須到心儀學校遞交小一入學申請表</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*      <td>2020 年 11 月 23 日</td>*/}
                    {/*      <td>學校公布自行分配學位結果</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*      <td>2020 年 11 月 25 – 26 日</td>*/}
                    {/*      <td>獲取錄的學童須到學校註冊，未獲取錄則等第二階段「統一派位」</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*      <td>2021 年 1 月 30 – 31 日</td>*/}
                    {/*      <td>進行第二階段「統一派位」家長須前往統一派位中心，填寫《選擇學校表格》</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*      <td>2021 年 6 月 2 – 3 日</td>*/}
                    {/*      <td>小一放榜，統一派位結果公布 如未被派中心儀學校，放榜日起可留意心儀學校的叩門安排</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*      <td>2021 年 6 月 8 – 10 日</td>*/}
                    {/*      <td>家長到被派中的學校辦理註冊手續</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*      <td>2021 年 6 月</td>*/}
                    {/*      <td>註冊日後，各間小學會開始接收叩門申請</td>*/}
                    {/*    </tr>*/}
                    {/*    </tbody>*/}
                    {/*  </table>*/}
                    {/*</figure>*/}
                    {/*</p>*/}
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
