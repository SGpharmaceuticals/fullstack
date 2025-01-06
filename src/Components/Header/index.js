import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">Lorem Ipsum </p>
          </div>
        </div>

        <header className="Header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper col-sm-2 d-flex align-items-center">
                <Link to={"/"}>
                  <img src={logo} alt="logo"></img>
                </Link>
              </div>
              <div className="part2 col-sm-10 d-flex align-items-center">
                {context.countryList.length !== 0 && <CountryDropdown />}
                <SearchBox />

                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                    <FaRegUser />
                  </Button>
                  <div className="cartTab ml-auto d-flex align-items-center">
                    <span className="price">Rs. 100</span>
                    <div className="position-relative  ml-2">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};
export default Header;
