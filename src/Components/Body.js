import { useEffect, useState } from "react";
import Item from "../item";
import Fetching from "./Hooks/Fetching";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "./Store/Data";
import { AddFilter } from "./Store/FilterData";
import Search from "./Search";

import Filter from "../Filter";
import Image from "./Image";
import Paging from "./Paging";
// import { Link } from "react-router-dom";
import { setIndex } from "./Store/Index1";

// import { useSelector } from "react-redux";

const Body = () => {
  const filtered_Arr = useSelector((state) => {
    return state.Filter;
  });
  const pp = useSelector((state) => {
    return state.Data;
  });
  const dispatch = useDispatch();

  const [apiData, setApi] = useState([]);
  useEffect(() => {
    async function Fetched() {
      const data = await Fetching();
      // console.log(data);
      setApi(data);
      dispatch(Add(data));
      dispatch(AddFilter(data));
    }
    try {
      Fetched();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Search />

      <Filter />
      <Image />

      <div className="Body">
        <div className="Body-items">
          {filtered_Arr.length === 0
            ? apiData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      dispatch(setIndex(item.id));
                    }}
                  >
                    <Item
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                      index={index}
                    />
                  </div>
                );
              })
            : filtered_Arr.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      dispatch(setIndex(item.id));
                    }}
                  >
                    <Item
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                    />
                  </div>
                );
              })}
        </div>
      </div>
      <Paging />
    </>
  );
};
export default Body;
