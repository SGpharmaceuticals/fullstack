import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { Button } from "@mui/material";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>
            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">Product Name</h2>
              <ul className="list list-inline  d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands:</span>
                    <span>SG's</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    <span className="text-light cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-3">
                <span className="oldPrice">Rs. 510</span>
                <span className="netPrice text-danger ml-2">Rs. 450</span>
              </div>
              <span className="badge badge-success">In Stock</span>
              <p className="mt-3">
                Product info.Product infoProduct infoProduct infoProduct
                infoProduct infoProduct infoProduct infoProduct infoProduct
                info. Product info.Product infoProduct infoProduct infoProduct
                infoProduct infoProduct infoProduct infoProduct infoProduct
                info. Product info.Product infoProduct infoProduct infoProduct
                infoProduct infoProduct infoProduct infoProduct infoProduct
                info. Product info.Product infoProduct infoProduct infoProduct
                infoProduct infoProduct infoProduct infoProduct infoProduct info
              </p>
              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      200 ml
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      300 ml
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round">
                  <FaCartShopping /> &nbsp; Add to Cart
                </Button>
                <Tooltip title="Add to Wishlist" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <br />

          <RelatedProducts title="Related Products" />
          <RelatedProducts title="Recently Viewed Products" />
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
