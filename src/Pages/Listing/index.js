import Sidebar from "../../Components/Sidebar";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ProductItem from "./../../Components/ProductItem";
import Pagination from "@mui/material/Pagination";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [productView, setproductView] = useState("four");
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex ">
            <Sidebar />
            <div className="content-right">
              <img
                src="https://img.freepik.com/premium-vector/online-pharmacy-banner-with-medication-shelf-smartphone-buying-blue_313242-582.jpg?w=826"
                className="w-100"
                style={{ borderRadius: "8px" }}
              />

              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="btnWrapper d-flex align-items-center">
                  <Button
                    className={productView === "one" && "act"}
                    onClick={() => setproductView("one")}
                  >
                    <IoIosMenu />
                  </Button>

                  <Button
                    className={productView === "three" && "act"}
                    onClick={() => setproductView("three")}
                  >
                    <CgMenuGridO />
                  </Button>
                  <Button
                    className={productView === "four" && "act"}
                    onClick={() => setproductView("four")}
                  >
                    <TbGridDots />
                  </Button>
                </div>
                <div className="ml-auto showByFilter">
                  <Button onClick={handleClick}>
                    Show 9<FaAngleDown />
                  </Button>
                  <Menu
                    className="w-100 showPerPageDropdown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>9</MenuItem>
                    <MenuItem onClick={handleClose}>18</MenuItem>
                    <MenuItem onClick={handleClose}>27</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing">
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
              </div>

              <div className="d-flex align-items-center justify-content-center mt-5">
                <Pagination count={10} color="primary" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
