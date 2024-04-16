import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData } from "./Store/CardItems1";
import { AddCount, DeletePrice } from "./Store/Count";
import { useNavigate } from "react-router-dom";
import { DeleteMain } from "./Store/MainStore";
import { hosting } from "./Constants/Constants";
// import { useSelector } from "react-redux";s

const RealCartItem = ({
  title,
  price,
  index,
  image,
  rating,
  discription,
  quant,
}) => {
  // const data = useSelector((state) => {
  //   return state.CardItems;
  // });
  const data = useSelector((state) => {
    return state.MainStore;
  });
  const Price = useSelector((state) => {
    return state.Price;
  });
  // const dispatch = useDispatch();
  const [count, setCount] = useState(quant);
  const { _id } = useSelector((state) => {
    return state.ProfileInfo;
  });
  // console.log("the count of this item is" + quant);
  const dispatch = useDispatch();
  function deleteData(index) {
    const data1 =
      data.length &&
      data.filter((item) => {
        return item.id !== index;
      });
    // console.log("Deleted");
    // dispatch(DeleteData(data1));
    dispatch(DeleteMain(data1));
  }
  function RemoveDataFromDb() {
    async function SendData() {
      const data = await fetch(`${hosting}/removeData`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: _id, index: index }),
      });
      console.log(`Id is ${_id} and index is ${index}`);
      const resData = await data.json();
      console.log(resData);
    }
    SendData();
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="Real-Container">
        <div className="Real-Container-inner">
          <div>
            <img
              className="Real-Cart-img"
              style={{ height: "10rem", width: "10rem" }}
              src={image}
              alt="No Img"
            />
          </div>
          <div
            onClick={() => {
              navigate("/cart");
            }}
          >
            {title.slice(0, 10)}...
          </div>
          {/* <div> {discription}</div> */}
          <div>20%off</div>
          <div>Rs{Math.round(count * (price * 83))}</div>
          <div className="btn">
            <button
              className="btn-inner"
              onClick={() => {
                console.log("This is My Price");
                console.log(count * Math.round(count * (price * 83)));
                // console.log("This is A Key" + index);
                dispatch(DeletePrice(Math.round(count * (price * 83))));
                deleteData(index);
                RemoveDataFromDb();
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          className="btn-1"
          onClick={() => {
            dispatch(AddCount(Math.round(count + 1 * (price * 83))));
            setCount((prev) => {
              return prev + 1;
            });
          }}
        >
          +
        </button>
        {count}
        <button
          className="btn-1"
          onClick={() => {
            dispatch(AddCount(Math.round(count - 1 * (price * 83))));
            setCount((prev) => {
              if (prev <= 0) {
                return 0;
              }
              return prev - 1;
            });
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default RealCartItem;
