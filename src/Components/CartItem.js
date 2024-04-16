import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { GiThunderball } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
// import Recom from "./Recom";
import Item from "../item";
import { Link } from "react-router-dom";
import { setIndex } from "./Store/Index1";
import { AddCardItems } from "./Store/CardItems1";
import { AddCount } from "./Store/Count";
import {  AddCartItem1, AddMainStore } from "./Store/MainStore";
const CartItem = () => {
  const data = useSelector((state) => {
    return state.Index;
  });
  const dispatch = useDispatch();
  const filterData = useSelector((state) => {
    return state.Filter;
  });
  const ft = filterData.filter((item) => {
    return item.id === data;
  });
  console.log(ft);
  let Arr = filterData.filter((item) => {
    return ft.length && item.category.toLowerCase().includes(ft[0].category);
  });
  console.log("This is My Array");
  console.log(Arr);
  // const navigate = useNavigate();
  console.log("Your Click index is: " + data);
  return (
    <>
      <div className="Card-Container-1">
        <div>
          <div className="CardItems">
            <div>
              {ft.length && (
                <img
                  src={ft[0].image}
                  alt="No_Img"
                  style={{ height: "50vh", width: "20vw" }}
                />
              )}
            </div>
            <div className="Discription">
              <div>
                <h3>{ft.length && ft[0].title}</h3>
              </div>

              <div>{ft.length && ft[0].description}</div>
              <div className="Star">
                <FaStar className="Star" />
                {ft.length && ft[0].rating.rate}
              </div>
              <div className="Offer">
                <h1>Offers</h1>
                <div>
                  Partner OfferSign-up for Flipkart Pay Later & get free Times
                  Prime Benefits worth ₹10,000
                </div>
                <div>
                  Partner OfferMake a purchase and enjoy a surprise cashback/
                  coupon that you can redeem later!
                </div>
                <div>
                  Special PriceGet extra 16% off (price inclusive of
                  cashback/coupon)
                </div>
                <div>
                  Bank OfferGet ₹25* instant discount for the 1st Flipkart Order
                  using Flipkart UPI
                </div>
              </div>
            </div>
          </div>
          <div className="Buttons">
            <div className="Btn-In">
              <div>
                <button className="Btn-Real">
                  {" "}
                  <GiThunderball /> Buy now
                </button>
              </div>
              <div>
                <button
                  className="Btn-Real"
                  onClick={() => {
                    console.log("Dispatch");
                    dispatch(AddCardItems(ft));
                    dispatch(AddCount(ft[0].price * 83));
                    dispatch(AddCartItem1(ft));
                  }}
                >
                  {" "}
                  <FaCartPlus /> Add To Cart
                </button>
              </div>
            </div>
            <div className="Rating">
              <div className="Price">Rs{ft.length && ft[0].price * 83}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Recomandations">
        <div>
          <h2>Recimandations</h2>
        </div>
        <div className="Recom">
          {Arr.map((item) => {
            return (
              <Link
                className="CartIndex"
                to="/cart"
                onClick={() => {
                  dispatch(setIndex(item.id));
                  console.log("Omg Hogya");
                }}
              >
                <Item
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CartItem;
