import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Search1 } from "./Store/FilterData";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const [query, setQuery] = useState([]);
  const [tog, setTog] = useState(false);
  // console.log(data);
  // Here we will Apply Debouncing
  useEffect(() => {
    async function Paras() {
      try {
        const data1 = await fetch(
          `https://google.com/complete/search?client=chrome&q=${data}`
        );
        const jsonData = await data1.json();
        console.log(jsonData[1]);
        setQuery(jsonData[1]);
      } catch (e) {
        console.log("The Error Is here" + e);
      }
    }
    let intr = setTimeout(() => {
      Paras();
    }, 200);
    return () => {
      clearInterval(intr);
    };
  }, [data]);
  return (
    <div>
      <div className="S-Container">
        <div>
          <input
            value={data}
            onFocus={() => {
              setTog(!tog);
            }}
            onBlur={() => {
              setTog(!tog);
            }}
            onChange={(e) => {
              setData(e.target.value);
            }}
            placeholder="Search the Item You Want To search"
            className="Search"
          />
          <button
            className="S-btn"
            onClick={() => {
              // console.log(data);
              dispatch(Search1(data));
              setData("");
            }}
          >
            Search
          </button>
        </div>
      </div>
      {tog === true && (
        <div className="Cat">
          <div className="Cat-Container">
            {query.length &&
              query.map((item) => {
                return (
                  <div
                    className="Cat-div"
                    onClick={() => {
                      setData(item);
                    }}
                  >
                    {" "}
                    <div>
                      <CiSearch />
                    </div>
                    <div>{item}</div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Search;
