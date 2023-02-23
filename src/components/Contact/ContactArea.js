import React from "react";

const ContactArea = () => {
    return (
        <section className="contact-area section-gap-bottom">
            <div className="contact-maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d168881.25269211954!2d91.81820959350401!3d24.67371276427247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1613216995304!5m2!1sen!2sbd"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                />
            </div>
            <div className="container">
                <div className="row justify-content-center contact-info-boxes">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="contact-info-box">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage: "url(img/contact-01.jpg)",
                                }}
                            />
                            <div className="content">
                                <h4 className="title">Head office in London</h4>
                                <ul>
                                    <li>
                                        <i className="fal fa-phone" />
                                        +(123) 456 -7890
                                    </li>
                                    <li>
                                        <i className="fal fa-envelope" />
                                        info@mainexample.com
                                    </li>
                                    <li>
                                        <i className="fal fa-map-marker-alt" />
                                        9/A, North Road, England
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="contact-info-box">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage: "url(img/contact-02.jpg)",
                                }}
                            />
                            <div className="content">
                                <h4 className="title">Sub office in Moscow</h4>
                                <ul>
                                    <li>
                                        <i className="fal fa-phone" />
                                        +(123) 456 -7890
                                    </li>
                                    <li>
                                        <i className="fal fa-envelope" />
                                        info@mainexample.com
                                    </li>
                                    <li>
                                        <i className="fal fa-map-marker-alt" />
                                        9/A, North Road, England
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="contact-info-box">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage: "url(img/contact-03.jpg)",
                                }}
                            />
                            <div className="content">
                                <h4 className="title">Corporate in New York</h4>
                                <ul>
                                    <li>
                                        <i className="fal fa-phone" />
                                        +(123) 456 -7890
                                    </li>
                                    <li>
                                        <i className="fal fa-envelope" />
                                        info@mainexample.com
                                    </li>
                                    <li>
                                        <i className="fal fa-map-marker-alt" />
                                        9/A, North Road, England
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="section-title text-center mb-60">
                        <span className="title-tag">Call To Action</span>
                        <h2 className="title">Make Your Request</h2>
                    </div>
                    <form
                        action="#"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="row">
                            <div className="col-lg-6 mb-30">
                                <input type="text" placeholder="Full name" />
                            </div>
                            <div className="col-lg-6 mb-30">
                                <input type="email" placeholder="Enter email" />
                            </div>
                            <div className="col-12 mb-30">
                                <select>
                                    <option value={1}>Select Subject</option>
                                    <option value={2}>Select Subject</option>
                                    <option value={3}>Select Subject</option>
                                </select>
                            </div>
                            <div className="col-12 mb-30">
                                <textarea
                                    placeholder="Enter message"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="col-12 text-center">
                                <button className="main-btn" type="submit">
                                    Submit Request
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactArea;
