import React from "react";
import HomeHeader from "../src/layout/Header/HomeHeader";
import Footer1 from "../src/layout/Footer/Footer1";


const Hschool = () => {
    return (
        <section id="Hschool" className="service-area section-gap primary-bg">
            <HomeHeader />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title text-center mb-30">
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <iframe width="1000" height="1090"
                            src="https://datastudio.google.com/embed/reporting/53808deb-a417-4084-9648-b9daefdce389/page/tEnnC"
                            frameBorder="0" allowFullScreen>
                    </iframe>
                </div>

            </div>
            <Footer1 />
        </section>
    );
};

export default Hschool;


