import { GiMedicines } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <GiMedicines />
            </span>
            <span className="ml-2 ">Everyday new</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2 ">Free Delivery on order above Rs.500</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <RiDiscountPercentLine />
            </span>
            <span className="ml-2 ">Daily mega discounts</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <FaIndianRupeeSign />
            </span>
            <span className="ml-2 ">Best Price on the market</span>
          </div>
        </div>

        <div className="copyright mt-3 pt-3 pb-3 d-flex">
          <p className="mb-0">
            © 2025 SG Pharmaceuticals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
