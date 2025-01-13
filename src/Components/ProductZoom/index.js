import Slider from "react-slick";
import "swiper/css";
import "swiper/css/navigation";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import product1 from "../../assets/images/product1.jpg";
import p01 from "../../assets/images/p 01.jpg";
import p02 from "../../assets/images/p 02.jpg";
import { useState } from "react";
import { useRef } from "react";
const ProductZoom = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const goto = (index) => {
    zoomSliderBig.current.slickGoTo(index);
    zoomSlider.current.slickGoTo(index);
  };
  return (
    <div className="productZoom">
      <div className="productZoom position-relative">
        <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
          <div className="item">
            <InnerImageZoom zoomType="hover" zoomScale={1} src={product1} />
          </div>
          <div className="item">
            <InnerImageZoom zoomType="hover" zoomScale={1} src={p01} />
          </div>
          <div className="item">
            <InnerImageZoom zoomType="hover" zoomScale={1} src={p02} />
          </div>
        </Slider>
      </div>

      <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
        <div className="item">
          <img src={product1} className="w-100" onClick={() => goto(0)} />
        </div>
        <div className="item">
          <img src={p01} className="w-100" onClick={() => goto(1)} />
        </div>
        <div className="item">
          <img src={p02} className="w-100" onClick={() => goto(2)} />
        </div>
      </Slider>
    </div>
  );
};
export default ProductZoom;
