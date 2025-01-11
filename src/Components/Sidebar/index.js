import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";

const Sidebar = () => {
  const [value, setValue] = useState([100, 60000]);
  const [value2, setValue2] = useState(0);
  return (
    <>
      <div className="sidebar">
        <div className="filterBox">
          <h6>Product Categories</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Iron"
                />
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Calcium" />
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Powder" />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>Filter by Price</h6>
          <RangeSlider
            value={value}
            onInput={setValue}
            min={100}
            max={60000}
            step={5}
          />

          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-dark">Rs. {value[0]}</strong>
            </span>
            <span className="ml-auto">
              From: <strong className="text-dark">Rs. {value[1]}</strong>
            </span>
          </div>
        </div>

        <div className="filterBox">
          <h6>Product Status</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="In Stock"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="On Sale"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
