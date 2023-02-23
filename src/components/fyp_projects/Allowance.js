import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const Allowance = () => {
  return (
    <section id="allowance" className="service-area section-gap primary-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center mb-30">
              <h2 className="title">津貼資料</h2>
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
                      <img src="img/service/24.jpeg" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>中小幼學資助計劃</h4>
                      <p>
                        為大家簡單了解中小幼在政府當中有任何資助計劃可以申請，並且可以易最簡單進行申請
                      </p>
                      <Link href="https://www.wfsfaa.gov.hk/sfo/tc/preprimary/kcfr/overview.htm">
                        <a className="service-link">幼稚園</a>
                      </Link>
                      <p>
                        <Link href="https://www.wfsfaa.gov.hk/sfo/tc/primarysecondary/tt/overview.htm">
                          <a className="service-link">中,小學</a>
                        </Link>
                      </p>
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
                      <img src="img/service/28.jpg" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>獎學金</h4>
                      <p>
                        獎學金，是提供給特定學生的金錢獎勵，頒發對象包括學業成績優異、操行良好或體育、藝術等方面表現傑出者。
                        獎學金的額度不等，有些額度甚小，僅是象徵性意義；有些則額度甚大，足以支付學雜費、書籍費，甚至是生活費，讓學生得以在無經濟壓力下專心向學。
                      </p>
                      <Link href="https://www.wfsfaa.gov.hk/sfo/tc/other/scholarships/index.htm">
                        <a className="service-link">Learn More</a>
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
              <div className="service-box mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="img/service/27.jpeg" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>政府資助計劃</h4>
                      <p>
                        受此計劃資助的學校稱為「直資學校」。與資助學校一樣，直資學校是由香港政府撥款提供按合資格學生人數的資助
                        ，但擁有比官立學校及資助學校更高的自主性，可以制訂課程、收費及收生凖則，並且可以自行決定是否參與統一派位。
                      </p>
                      <Link href="https://www.edb.gov.hk/tc/edu-system/primary-secondary/applicable-to-primary-secondary/direct-subsidy-scheme/index.html">
                        <a className="service-link">Learn More</a>
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
                      <img src="img/service/26.jpeg" alt="iimage" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>助學金</h4>
                      <p>
                        為有經濟困難的全日制本地學生提供資助。助學金會發放給有經濟需要但未能從政府資助及/或貸款計劃中獲得足夠援助的學生。
                      </p>
                      <Link href="https://www.hkmu.edu.hk/sao/tc/fa/ft-bursary/">
                        <a className="service-link">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Fade right>
          <iframe width="670" height="315" src="https://www.youtube.com/embed/jdybZE4-a54" title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
        </iframe>
        </Fade>

        <Fade left>
          <iframe width="670" height="315" src="https://www.youtube.com/embed/CqvS6t4F6JE" title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
        </Fade>

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

export default Allowance;
