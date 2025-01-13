import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";

const ProductDetails = () => {
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom />
            </div>
            <div className="col-md-7">
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
                  </div>
                  <span>1 Review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
