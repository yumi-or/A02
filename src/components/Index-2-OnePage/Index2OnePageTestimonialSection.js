import React from "react";
import Slider from "react-slick";

const Index2OnePageTestimonialSection = () => {
    const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                className="slick-arrow prev-arrow"
                style={{ display: "block" }}
                onClick={onClick}
            >
                <i className="fal fa-long-arrow-left" />
            </button>
        );
    };

    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                className="slick-arrow next-arrow"
                style={{ display: "block" }}
                onClick={onClick}
            >
                <i className="fal fa-long-arrow-right" />
            </button>
        );
    };

    const settings = {
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section
            className="testimonial-section section-gap-top secondary-bg"
            id="feedbacks"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title title-style-two color-white text-center mb-50">
                            <span className="title-tag">Testimonials</span>
                            <h2 className="title">Users Feedback</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-7 col-lg-8 col-md-9">
                        <div className="testimonial-img mb-negative">
                            <img
                                src="img/testimonial/testimonial-img.jpg"
                                alt="Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 ms-auto">
                        <div
                            className="testimonial-boxes-two mb-negative"
                            id="testimonialSliderTwo"
                        >
                            {SampleNextArrow}

                            <Slider {...settings}>
                                <div className="testimonial-box">
                                    <p>
                                        As a fashion influencer with almost 2
                                        million followers, @barbiestyle selected
                                        the boldest looks for the launch as her
                                        fall wardrobe transitions away from her
                                        summer staples.
                                    </p>
                                    <div className="author-info">
                                        <h4>Miranda H. Halim</h4>
                                        <span>Founder</span>
                                    </div>
                                </div>
                                <div className="testimonial-box">
                                    <p>
                                        As a fashion influencer with almost 2
                                        million followers, @barbiestyle selected
                                        the boldest looks for the launch as her
                                        fall wardrobe transitions away from her
                                        summer staples.
                                    </p>
                                    <div className="author-info">
                                        <h4>Miranda H. Halim</h4>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </Slider>

                            {SamplePrevArrow}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index2OnePageTestimonialSection;
