import Link from "next/link";
import React from "react";

const Footer1 = () => {
  return (
    <footer className="footer-one">
      <div className="footer-top">
        <div className="container">
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="footer-logo mb-xs-gap-30">
              <img src="img/logo_a02.png" alt="Image" style={{maxHeight:"60px"}}/>
            </div>
            <ul className="social-icon">
              {/*<li>*/}
              {/*  <Link href="https://www.facebook.com/MicrofusionTechnology/">*/}
              {/*    <a>*/}
              {/*      <i className="fab fa-facebook-f" />*/}
              {/*    </a>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link href="https://www.youtube.com/channel/UCTbz78cL1bSfrb1-hTBo-Bg">*/}
              {/*    <a>*/}
              {/*      <i className="fab fa-youtube" />*/}
              {/*    </a>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li>
                <Link href="https://data.gov.hk/tc/feedback">
                  <a>
                    <i className="fab fa-chrome" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/cyruswong/">
                  <a>
                    <i className="fab fa-linkedin" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="d-md-flex align-items-center justify-content-between">
            <ul className="footer-menu order-md-2">
              <li>
                {/*<Link href="https://www.microfusion.cloud/privacy-policy/">*/}
                {/*  隱私權條款*/}
                {/*</Link>*/}
              </li>
            </ul>
            <p className="copyright-text order-md-1">
              © 2022 {" "}
              <Link href="https://www.microfusion.cloud/">
                  A02
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
