import React, { useEffect, useState } from "react";
import { CiWallet } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { CiPower } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddProfile } from "./Store/ProfileInfo";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { AddAuth } from "./Store/Auth";
import { useNavigate } from "react-router-dom";
import { hosting } from "./Constants/Constants";

const Profile = () => {
  const oldEmail = useSelector((state) => {
    return state.ProfileInfo;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name1, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [emailVAl, setEmailVal] = useState(oldEmail.email);
  const [mobileVal, setMobileVal] = useState(oldEmail.Phone);

  // const []
  const [firstName, setFirstName] = useState(oldEmail.name);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  console.log("this is my Old Email data");
  console.log(oldEmail.email);
  function setNameData() {
    async function NameChanger() {
      try {
        const data = await fetch(`${hosting}/nameUpdate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Name: firstName, _id: oldEmail._id }),
        });
        const resData = await data.json();
        console.log(resData);
        let obj = { ...oldEmail, name: firstName };
        dispatch(AddProfile(obj));
      } catch (e) {}
    }
    NameChanger();
  }
  function sendMobile() {
    async function mobileDataBackend() {
      try {
        const data = await fetch(`${hosting}/mobileUpdate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mobile: mobileVal,
            _id: oldEmail._id,
          }),
        });
        const resData = await data.json();
        let obj = { ...oldEmail, Phone: mobileVal };
        dispatch(AddProfile(obj));
        console.log(resData);
      } catch (e) {
        console.log(e);
      }
    }
    mobileDataBackend();
  }
  function sendData() {
    async function emailDataSend() {
      try {
        const emailres = await fetch(`${hosting}:5000/emailUpdate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            newEmail1: emailVAl,
            oldEmail1: oldEmail.email,
          }),
        });
        const resEmail = await emailres.json();
        let obj = { ...oldEmail, email: emailVAl };
        dispatch(AddProfile(obj));
        console.log({ newEmail1: resEmail, oldEmail1: oldEmail.email });
      } catch (e) {
        console.log("There is Some Error In This Code");
      }
    }
    emailDataSend();
  }
  return (
    <div className="profile-Container">
      <div className="Profile-Container-inner">
        <div className="left-item">
          <div className="Profile-img">
            <div>
              <CgProfile />
            </div>
            <div>
              Hello, <h1>{firstName}</h1>
            </div>
          </div>
          <div className="div-2">
            <div className="div-2-inner">
              <div>
                {" "}
                <CiWallet />
              </div>
              <div>My Orders</div>
              <div> {">"}</div>
            </div>
            <div className="div-2-inner">
              <div>
                <CgProfile />
              </div>
              <div>
                Account Settings
                {first && (
                  <div className="Account-1">
                    <div>Profile Information</div>
                    <div>Manage Address</div>
                    <div>PanCard Information</div>
                  </div>
                )}
              </div>
              <div
                onClick={() => {
                  setFirst(!first);
                }}
              >
                {" "}
                {">"}
              </div>
            </div>
            <div className="div-2-inner">
              <div>
                <MdOutlinePayment />
              </div>
              <div>
                Payments
                {second && (
                  <div className="Account-1">
                    <div>Gift Cards</div>
                    <div>Saved UPI</div>
                    <div>Saved Cards</div>
                  </div>
                )}
              </div>
              <div
                onClick={() => {
                  setSecond(!second);
                }}
              >
                {" "}
                {">"}
              </div>
            </div>
            <div className="div-2-inner">
              <div>
                <ImProfile />
              </div>
              <div>
                My Stuff
                {third && (
                  <div className="Account-1">
                    <div>My Coupon</div>
                    <div>My Review </div>
                    <div> Notification</div>
                    <div> Wishlist</div>
                  </div>
                )}
              </div>
              <div
                onClick={() => {
                  setThird(!third);
                }}
              >
                {" "}
                {">"}
              </div>
            </div>
            <div className="div-2-inner">
              <div>
                <CiPower />
              </div>
              <div
                onClick={() => {
                  Cookies.remove("jwt");
                  dispatch(AddAuth(false));
                  navigate("/login");
                }}
              >
                Logout
              </div>
              <div> {">"}</div>
            </div>
          </div>
          <div className="div-3">
            <h3>Frequent Visited</h3>
            <p>Help Center</p>
          </div>
        </div>
        <div className="right-item">
          Personal Information
          <div className="right-Inner">
            <h2>Personal Information</h2>
            <form className="Input-Tag">
              <div className="input-inner">
                <input
                  value={firstName}
                  disabled={name1}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />

                <button
                  type="button"
                  onClick={() => {
                    setNameData();
                    setName(!name1);
                  }}
                >
                  Edit
                </button>
              </div>
              <div className="Gender">
                <label for="Gender">Your Gender</label>

                <input
                  className="iinput"
                  id="Gender"
                  name="Gender"
                  type="radio"
                  value="Male"
                  checked
                  disabled
                />
                <label for="Gender">Male</label>
                <input
                  className="iinput"
                  id="Gender"
                  name="Gender"
                  type="radio"
                  value="Female"
                  disabled
                />
                <label for="Gender">FeMale</label>
              </div>
              <div>
                <label for="email"> Email Address</label>
                <input
                  id="email"
                  className="email"
                  value={emailVAl}
                  disabled={email}
                  onChange={(e) => {
                    setEmailVal(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    setEmail(!email);
                    sendData();
                  }}
                  type="button"
                >
                  Edit
                </button>
              </div>
              <div className="mobile-div">
                <label for="mobile"> Mobile</label>
                <input
                  id="mobile"
                  className="email"
                  value={mobileVal}
                  disabled={mobile}
                  onChange={(e) => {
                    setMobileVal(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    sendMobile();
                    setMobile(!mobile);
                  }}
                  type="button"
                >
                  Edit
                </button>
              </div>
              <div className="faq">
                <h1>FAQs </h1>
                What happens when I update my email address (or mobile number)?
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number). When will my Flipkart account
                be updated with the new email address (or mobile number)? It
                happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes. What happens to my
                existing Flipkart account when I update my email address (or
                mobile number)? Updating your email address (or mobile number)
                doesn't invalidate your account. Your account remains fully
                functional. You'll continue seeing your Order history, saved
                information and personal details. Does my Seller account get
                affected when I update my email address? Flipkart has a 'single
                sign-on' policy. Any changes will reflect in your Seller account
                also.
              </div>
            </form>
          </div>
          <div className="Right-Div"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
