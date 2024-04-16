// import { response } from "express";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { AddProfile } from "./Store/ProfileInfo";
import { AddAuth } from "./Store/Auth";
import { FaEye } from "react-icons/fa";
import { hosting } from "./Constants/Constants";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    Phone: "",
    DateofBirth: "",
    Password: "",
    CPassword: "",
    cookies: "",
  });
  const [pass, setPass] = useState(false);
  const [pass1, setPass1] = useState(false);
  const dispatch = useDispatch();

  function HandleClick() {
    async function insertIntoDataBase() {
      //console.log(Cookies.get("jwt"));
      let pp = data;

      try {
        const insert = await fetch(`${hosting}/signup`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(pp),
        });
        // console.log(insert);
        console.log("data is send to backend");
        const res = await insert.json();
        console.log("this is Respponse from Backend");
        console.log(res);
        const { jwt, data } = res;
        Cookies.set("jwtEcoomerce", jwt);

        setPass(res.error);
        console.log(insert.ok);
        dispatch(AddAuth(true));
        dispatch(AddProfile(data));

        if (insert.ok) {
          navigate("/");
        }
      } catch (e) {
        dispatch(AddAuth(false));

        setPass("Fill The Form First");
        console.log("Bhai Kuch Dikkat Hai");
      }
    }
    if (
      data.name === "" ||
      data.email === "" ||
      data.Password === "" ||
      data.CPassword === "" ||
      data.DateofBirth === "" ||
      data.Phone === ""
    ) {
      setPass("Fill All input Fields");
    } else {
      insertIntoDataBase();
    }
  }
  useEffect(() => {
    const cookie = Cookies.get("jwt");
    if (cookie) {
      function handleChange() {
        async function HandleAuth() {
          try {
            const data = await fetch(`${hosting}/protected`, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ jwt: cookie }),
            });
            const res = await data.json();
            console.log(res);
            dispatch(AddProfile(res));
            dispatch(AddAuth(true));

            navigate("/");
          } catch (e) {
            dispatch(AddAuth(false));
            navigate("/login");
            console.log("Sorry There is  an Error");
          }
        }
        HandleAuth();
      }
      handleChange();
    } else {
      console.log("Cookie Not Found");
    }
  }, []);
  return (
    <form
      className="SignUpOuter"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        HandleClick();
      }}
    >
      <h1>Sign Up</h1>

      <div className="Signup-Container">
        <div>
          <label htmlFor="Name">Name</label>
          <input
            placeholder="Enter Your Name"
            id="Name"
            name="Name"
            className="signup_input"
            value={data.name}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            placeholder="Enter Your Email"
            id="Email"
            name="Email"
            className="signup_input"
            value={data.email}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="Phone">Phone</label>
          <input
            placeholder="Enter Your Phone"
            id="Phone"
            name="Phone"
            className="signup_input"
            value={data.Phone}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, Phone: e.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="Date_of_Birth">Date of Birth</label>
          <input
            placeholder="Enter Your Date of Birth"
            id="Date_of_Birth"
            name="Date_of_Birth"
            type="date"
            className="signup_input"
            value={data.DateofBirth}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, DateofBirth: e.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="Password"> Password</label>
          <input
            type={pass === true ? "text" : "password"}
            placeholder="Enter Your Password"
            id="Password"
            name="Password"
            className="signup_input"
            value={data.Password}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, Password: e.target.value };
              });
            }}
          />
          <div className="eye">
            <FaEye
              className="pass"
              onClick={() => {
                setPass(!pass);
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="CPassword"> Confirm Password</label>
          <input
            type={pass1 ? "text" : "password"}
            placeholder="Enter Your Confirm Password"
            id="CPassword"
            name="CPassword"
            className="signup_input"
            value={data.CPassword}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, CPassword: e.target.value };
              });
            }}
          />
          <div className="eye">
            <FaEye
              className="pass"
              onClick={() => {
                setPass1(!pass1);
              }}
            />
          </div>
        </div>
        <div>
          <button className="SignUpButton" type="submit">
            Sign Up
          </button>
        </div>
        <div className="lastLine">
          Already Sign Up ? <Link to="/login">Login</Link>
        </div>
        <div>{pass}</div>
      </div>
    </form>
  );
};
export default Signup;
