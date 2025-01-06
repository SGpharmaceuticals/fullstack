import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://troikkhealthcare.com/wp-content/uploads/2020/08/slider-medications.jpg"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://troikkhealthcare.com/wp-content/uploads/2020/08/slider-medications.jpg"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://troikkhealthcare.com/wp-content/uploads/2020/08/slider-medications.jpg"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://troikkhealthcare.com/wp-content/uploads/2020/08/slider-medications.jpg"
            className="w-100"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
