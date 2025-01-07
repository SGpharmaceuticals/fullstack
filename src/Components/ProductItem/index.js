import Rating from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa6";

const ProductItem = () => {
  return (
    <div className="item productItem">
      <div className="imgWrapper">
        <img
          src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/89ef302aabdd40df976885e26933c34b.jpg"
          className="w-100"
        />

        <span className="badge badge-primary">20%</span>

        <div className="actions">
          <Button>
            <AiOutlineFullscreen />
          </Button>
          <Button>
            <FaRegHeart style={{ fontSize: "20px" }} />
          </Button>
        </div>
      </div>

      <div className="info">
        <h4>SG's original Iron syrup</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={4}
          readOnly
          size="small"
          precision={0.5}
        />

        <div className="d-flex">
          <span className="oldPrice">Rs. 510</span>
          <span className="netPrice text-danger ml-2">Rs. 450</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
