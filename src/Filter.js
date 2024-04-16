import { FaMobileAlt } from "react-icons/fa";
import { LiaLaptopSolid } from "react-icons/lia";
import { LiaGemSolid } from "react-icons/lia";
import { PiTelevision } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { AddCat } from "./Components/Store/Catagory";
import {
  AddFilter,
  Count,
  EmptyData,
  Price,
  Sorting,
} from "./Components/Store/FilterData";
import { Add } from "./Components/Store/Data";
import { useState } from "react";

// "electronics",
// "jewelery",
// "men's clothing",
// "women's clothing"
const Filter = () => {
  const [seleted, setSelect] = useState("");
  const dispatch = useDispatch();
  async function handleAll() {
    const data = await Fetching();
    dispatch(Add(data));
  }
  async function Fetching(catagories) {
    // console.log(catagories);
    const data = await fetch(
      `https://fakestoreapi.com/products/category/${catagories}`
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    dispatch(AddFilter(jsonData));
  }

  return (
    <div className="filter">
      <div className="filter-btn">
        <div
          onClick={() => {
            dispatch(EmptyData());
            handleAll();
          }}
        >
          All
        </div>
        <div
          className="Electronics"
          onClick={() => {
            dispatch(AddCat("Electronics"));
            Fetching("electronics");
          }}
        >
          {" "}
          <FaMobileAlt />
          Electonics
        </div>
        <div
          onClick={() => {
            dispatch(AddCat("Womens_Clothes"));
            Fetching("women's clothing");
          }}
        >
          <GrRestroomWomen />
          Womens Clothes
        </div>
        <div
          onClick={() => {
            dispatch(AddCat(" jewelery"));
            Fetching("jewelery");
          }}
        >
          {" "}
          <LiaGemSolid />
          jewelery
        </div>
        <div
          onClick={() => {
            dispatch(AddCat("mens_clothing"));
            Fetching("men's clothing");
          }}
        >
          {" "}
          <GiClothes />
          men's clothing
        </div>
        <div>
          Filter
          <select
            className="select"
            value={seleted}
            onChange={(e) => {
              // setSelect(e.target.value);
              // console.log(e.target.value);
              // dispatch(Sorting());
              if (e.target.value === "Sort") {
                dispatch(Sorting());
              } else if (e.target.value === "View Count") {
                dispatch(Count());
              } else if (e.target.value === "Rating") {
                dispatch(Price());
              }
            }}
          >
            <option value="Normal">Normal</option>
            <option value="Sort">Sort</option>
            <option value="View Count">view Count</option>
            <option value="Rating">Cheaper to higher</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Filter;
