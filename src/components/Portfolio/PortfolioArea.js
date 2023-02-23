import Isotope from "isotope-layout";
import Link from "next/dist/client/link";
import React, { useEffect, useRef, useState } from "react";

const PortfolioArea = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [activeClass, setActiveClass] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-filter-items", {
        itemSelector: ".grid-item___",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setActiveClass(key);
  };
  return (
    <section className="portfolio-area section-gap">
      <div className="container">
        <div className="portfolio-filter mb-10">
          <ul>
            <li
              className={activeClass == "*" ? "active" : ""}
              data-filter="*"
              onClick={handleFilterKeyChange("*")}
            >
              All Works
            </li>
            <li
              data-filter=".graphics"
              className={activeClass == "graphics" ? "active" : ""}
              onClick={handleFilterKeyChange("graphics")}
            >
              Graphics
            </li>
            <li
              data-filter=".website"
              className={activeClass == "website" ? "active" : ""}
              onClick={handleFilterKeyChange("website")}
            >
              Website
            </li>
            <li
              data-filter=".ui-ux"
              className={activeClass == "ui-ux" ? "active" : ""}
              onClick={handleFilterKeyChange("ui-ux")}
            >
              UI/UX
            </li>
            <li
              data-filter=".consultancy"
              className={activeClass == "consultancy" ? "active" : ""}
              onClick={handleFilterKeyChange("consultancy")}
            >
              Consultancy
            </li>
          </ul>
        </div>
        <div className="portfolio-filter-items row">
          <div className="col-xl-3 grid-item___ col-md-6 graphics ui-ux consultancy">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/16.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 grid-item___ col-md-6 website ui-ux">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/17.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-6 grid-item___ col-lg-12 ui-ux consultancy">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/18.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-6 grid-item___ col-lg-12 website consultancy">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/19.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 grid-item___ col-md-6 graphics ui-ux">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/20.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 grid-item___ col-md-6 consultancy website">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/21.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 grid-item___ col-md-6 website ui-ux">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/22.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 grid-item___ col-md-6 graphics website">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/23.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-6 grid-item___ col-lg-12 consultancy ui-ux">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/24.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-6 grid-item___ col-lg-12 graphics ui-ux">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/25.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 grid-item___ col-md-6 consultancy graphics">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/26.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 grid-item___ col-md-6 graphics ui-ux">
            <div className="portfolio-box-three mt-30">
              <div
                className="thumb"
                style={{ backgroundImage: "url(/img/portfolio/27.jpg)" }}
              />
              <div className="content">
                <div className="tags">
                  <a href="#">App,</a>
                  <a href="#">Design</a>
                </div>
                <h4 className="title">
                  <Link href="/portfolio-details">Spay Mobile Banking App</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;
