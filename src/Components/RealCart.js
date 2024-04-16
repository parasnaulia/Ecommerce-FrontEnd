// import React from "react";
// import { useSelector } from "react-redux";
// import RealCartItem from "./RealCartItem";
// import Price from "../Price";

// const RealCart = () => {
//   const data = useSelector((state) => {
//     return state.CardItems;
//   });
//   console.log("This is My data");
//   console.log(data);
//   return (
//     <>

//       {   data.length!==0?(<div className="Div-Real-Cart">
//         <div>
//           {data.map((item, index) => {
//             return (
//               <RealCartItem
//                 index={item.id}
//                 key={item.id}
//                 title={item.title}
//                 price={item.price}
//                 image={item.image}
//                 rating={item.rating}
//                 discription={item.description}
//               />
//             );
//           })}
//         </div>):(<div>
//           <h1>
//             card is empty</h1></div>}

//         <div className="price-div">
//           <div>)
//             {" "}
//             <Price />
//           </div>
//           <div>
//             <button className="Place-Order">Place Order</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RealCart;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RealCartItem from "./RealCartItem";
import Price from "../Price";
import { useDispatch } from "react-redux";
import { AddStoreData } from "./Store/StoreData";
import { AddQty } from "./Store/Qty";
import { DeleteMain } from "./Store/MainStore";
import { loadStripe } from "@stripe/stripe-js";
import { hosting } from "./Constants/Constants";

const RealCart = () => {
  // let data = useSelector((state) => state.CardItems); // Removed unnecessary return statement
  // console.log("This is My data");
  // console.log(data);
  // [1,2,3,1,2,1,2]
  //{
  // 1:3,
  // 2:3,
  // 3:1
  const data = useSelector((state) => state.MainStore);
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => {
    return state.ProfileInfo;
  });

  // }
  // const [obj1, setObj1] = useState({});

  const obj = {};
  let data1 = [];
  // let [data1, setData1] = useState([]);
  // let [data1, setData] = useState([]);
  console.log("This is data1");
  console.log(data1);
  useEffect(() => {
    dispatch(AddStoreData(main));
    dispatch(AddQty(obj));
    // data1 = [...data2];
    // setData1(data2);
  }, []);

  const Qty = useSelector((state) => {
    return state.Qty;
  });
  const CardElements = useSelector((state) => {
    return state.StoreData;
  });
  const PaymentGateWay = async () => {
    const stripePromise = await loadStripe(
      "pk_test_51P3Ad8SC0KB9sqXBHUwrgFeWX3t0Fdm22PlWmJpkSnw3iALDSewiG6CGrLZwICB5VEzVJwXB96nnGqoaP87S5t3700gqi3QvD8"
    );
    //pk_test_51P3Ad8SC0KB9sqXBHUwrgFeWX3t0Fdm22PlWmJpkSnw3iALDSewiG6CGrLZwICB5VEzVJwXB96nnGqoaP87S5t3700gqi3QvD8

    const data1 = await fetch(`${hosting}/payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: _id, data: data }),
    });
    const resdata = await data1.json();
    console.log(resdata);
    const result = stripePromise.redirectToCheckout({
      sessionId: resdata.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };
  console.log("this IS My Qty" + Qty);
  console.log("THis is My Card Elements");
  console.log(CardElements);

  for (let i = 0; i < data.length; i++) {
    if (!obj[data[i].id]) {
      data1.push(data[i]);
      obj[data[i].id] = 1;
    } else {
      obj[data[i].id]++;
    }
  }
  // setObj1(obj);
  let main = [];
  for (let i = 0; i < data1.length; i++) {
    main[i] = { ...data1[i], Quant: obj[data1[i].id] };
  }
  console.log("This is My amin data");
  console.log(main);

  console.log("Filtered Data");
  console.log(main);
  console.log(obj);
  async function DeleteOnClick() {
    const data = await fetch(`${hosting}/clearCart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: _id }),
    });
    const resData = data.json();
    dispatch(DeleteMain([]));
    console.log(resData);
  }

  return (
    <>
      {data1.length !== 0 ? ( // Added parentheses to properly enclose JSX expression
        <div className="Div-Real-Cart">
          <div>
            {data1.map((item, index) => (
              <RealCartItem
                index={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                quant={obj[item.id]}
                description={item.description} // Fixed typo in prop name
              />
            ))}
          </div>
          <div className="price-div">
            <div>
              <Price />
            </div>
            <div>
              <button
                className="Place-Order"
                onClick={() => {
                  PaymentGateWay();
                }}
              >
                Place Order
              </button>
            </div>
            <div>
              <button
                className="price-btn"
                onClick={() => {
                  DeleteOnClick();
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="Div-Real-Cart">
          <h1>Card is empty</h1> {/* Fixed typo in message */}
        </div>
      )}
    </>
  );
};

export default RealCart;
