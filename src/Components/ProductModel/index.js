import { Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import product1 from "../../assets/images/product1.jpg";
import Slider from "react-slick";
import { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import p01 from "../../assets/images/p 01.jpg";
import p02 from "../../assets/images/p 02.jpg";

const ProductModel = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

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

  const goto = (index) => {
    zoomSliderBig.current.slickGoTo(index);
    zoomSlider.current.slickGoTo(index);
  };

  return (
    <>
      <Dialog
        open={true}
        className="productModel"
        onClose={() => props.closeProductModel()}
      >
        <Button className="close_" onClick={() => props.closeProductModel()}>
          <MdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">Product Name</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>SG's</b>
            </span>
          </div>

          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>

        <hr />

        <div className="row mt-2 productDetailModel">
          <div className="col-md-5">
            <div className="productZoom">
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={product1}
                  />
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
          <div className="col-md-7">
            <div className="d-flex info align-items-center">
              <span className="oldPrice  mr-2 lg">Rs.510</span>
              <span className="netPrice text-danger lg">Rs.450</span>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModel;
