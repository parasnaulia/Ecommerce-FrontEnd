import { GiShoppingCart } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaBorderAll } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Toggle_ham } from "./Store/Toggle";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AddAuth } from "./Store/Auth";
import { AddStoreData } from "./Store/StoreData";
import { AddCardItems } from "./Store/CardItems1";
import { AddMainStore } from "./Store/MainStore";
import { AddPrice } from "./Store/Price";
import { AddCount } from "./Store/Count";
import { hosting } from "./Constants/Constants";

// import { useSelector } from "react-redux";
const Nav = () => {
  const data = useSelector((state) => {
    return state.CardItems;
  });
  const cartData = useSelector((state) => {
    return state.StoreData;
  });
  const { _id } = useSelector((state) => {
    return state.ProfileInfo;
  });
  const storeData = useSelector((state) => {
    return state.MainStore;
  });
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // console.log(data);
  const [profile, setProfile] = useState(false);
  const [about, setabout] = useState(false);
  const [contact, setContact] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function DataFetch() {
      try {
        const data = await fetch(`${hosting}/data1`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: _id }),
        });
        const resData = await data.json();
        console.log("This IS Card DAata BC");
        console.log(resData.Sucess.cartItems);
        // dispatch(AddStoreData(resData.Sucess.cartItems));
        // dispatch(AddCardItems(resData.Sucess.cartItems));
        // let obj = [];
        // let data3 = [...resData.Sucess.cartItems];
        // let data1 = [];

        // for (let i = 0; i < data3.length; i++) {
        //   if (!obj[data3[i].id]) {
        //     data1.push(data3[i]);
        //     obj[data3[i].id] = 1;
        //   } else {
        //     obj[data3[i].id]++;
        //   }
        // }
        // let main = [];
        // for (let i = 0; i < data1.length; i++) {
        //   main[i] = { ...data1[i], Quant: obj[data1[i].id] };
        // }

        dispatch(AddMainStore(resData.Sucess.cartItems));
      } catch (e) {
        console.log("this is Error PAge");
      }
    }
    DataFetch();
  }, []);

  function CartToBackend() {
    async function CartToNode() {
      const data = await fetch(`${hosting}/cartData`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: _id, cardData: cartData }),
      });
      console.log("THis Is Data From Backend");
      const resdata = await data.json();
      console.log(resdata.price);
      console.log(resdata.count);
      dispatch(AddPrice(resdata.price));
      dispatch(AddCount(resdata.count));
    }
    CartToNode();
  }
  return (
    <div className="Container">
      <div className="inner">
        <div
          className="Ham"
          onClick={() => {
            dispatch(Toggle_ham());
          }}
        >
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div>
            <img
              src="https://w7.pngwing.com/pngs/384/470/png-transparent-retail-computer-icons-e-commerce-sales-mega-offer-miscellaneous-service-logo.png"
              style={{ height: "3rem", width: "3rem" }}
              alt="No Logo"
            />
          </div>
        </Link>

        <div
          onMouseEnter={() => {
            setProfile(true);
          }}
          onMouseLeave={() => {
            setProfile(false);
          }}
        >
          <CgProfile className="cart1" />

          {profile && (
            <div className="profile-data">
              <div
                onClick={() => {
                  navigate("/profile");
                }}
              >
                {" "}
                <CgProfile />
                My Profile
              </div>
              <div
                onClick={() => {
                  navigate("/cart");
                }}
              >
                {" "}
                <FaBorderAll /> Orders
              </div>
              <div>
                {" "}
                <IoIosNotifications />
                Notification
              </div>
              <div
                onClick={() => {
                  Cookies.remove("jwt");
                  dispatch(AddAuth(false));
                  window.location.reload();
                  navigate("/login");
                }}
              >
                {" "}
                <CiLogout /> Logout{" "}
              </div>
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => {
            setabout(true);
          }}
          onMouseLeave={(e) => {
            console.log(e);
            setabout(false);
          }}
        >
          About Us
          {about && (
            <div className="About">
              <div
                onClick={() => {
                  navigate("/about");
                }}
              >
                History
              </div>
              <div>Our Survices</div>
              <div>Brand</div>
              <div>Omg</div>
            </div>
          )}
        </div>

        <div
          className="contact"
          onMouseEnter={() => {
            setContact(true);
          }}
          onMouseLeave={() => {
            setContact(false);
          }}
        >
          Contact Us
          {contact && (
            <div className="Contact">
              <div>Chat with us</div>
              <div>Call us</div>
              <div
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Email us
              </div>
              <div>Text us</div>
            </div>
          )}
        </div>

        <Link
          to="realCart"
          className="cart-Link"
          onClick={() => {
            CartToBackend();
          }}
        >
          <div>
            Cart({storeData.length})
            <GiShoppingCart className="cart" />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
