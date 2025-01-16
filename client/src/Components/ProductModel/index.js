import { Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useContext, useRef } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";
import { FaCartShopping } from "react-icons/fa6";
const ProductModel = (props) => {
  const context = useContext(MyContext);

  return (
    <>
      <Dialog
        open={true}
        className="productModel"
        onClose={() => context.setisOpenProductModel(false)}
      >
        <Button
          className="close_"
          onClick={() => context.setisOpenProductModel(false)}
        >
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
            <ProductZoom />
          </div>
          <div className="col-md-7 ">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice  mr-2 lg">Rs.510</span>
              <span className="netPrice text-danger lg">Rs.450</span>
            </div>

            <span className="badge bg-success">In Stock</span>
            <p className="mt-3">
              Product Description.Product Description.Product
              Description.Product Description.Product Description.Product
              Description.
            </p>

            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                <FaCartShopping />
                &nbsp; Add to Cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <IoIosHeartEmpty /> &nbsp; Add to Wishlist
              </Button>
              <Button className="btn-round btn-sml" variant="outlined">
                <MdOutlineCompareArrows /> &nbsp; Compare
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModel;
