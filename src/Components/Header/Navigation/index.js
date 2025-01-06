import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navpart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span class="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>
                        Iron <FaAngleRight className="ml-auto" />
                      </Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>Tablets</Button>
                      </Link>
                      <Link to="/">
                        <Button>Syrup</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>
                        Calcium <FaAngleRight className="ml-auto" />
                      </Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>Tablets</Button>
                      </Link>
                      <Link to="/">
                        <Button>Syrup</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>
                        Energy Drinks <FaAngleRight className="ml-auto" />
                      </Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>Powder</Button>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navpart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item ">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item ">
                <Link to="/">
                  <Button>Shop</Button>
                </Link>

                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Iron</Button>
                  </Link>
                  <Link to="/">
                    <Button>Calcium</Button>
                  </Link>
                  <Link to="/">
                    <Button>Energy Drinks</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item ">
                <Link to="/">
                  <Button>Blog</Button>
                </Link>
              </li>
              <li className="list-inline-item ">
                <Link to="/">
                  <Button>Contact Us</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
