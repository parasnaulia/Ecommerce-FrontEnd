import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AddProfile } from "./Store/ProfileInfo";
import Cookies from "js-cookie";
import { AddAuth } from "./Store/Auth";
import { hosting } from "./Constants/Constants";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    Password: "",
    cookie: "",
  });
  useEffect(() => {
    setData((prev) => {
      return { ...prev, cookie: Cookies.get("jwt") };
    });
  }, []);

  const dispatch = useDispatch();
  const [tog, setTog] = useState(false);
  const navigate = useNavigate();
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
  function handleChange() {
    console.log("This is My Cookie" + Cookies.get("jwt"));

    async function Fetching() {
      try {
        const response = await fetch(`${hosting}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const resData = await response.json();
        console.log("this is Response From Backecnd");
        // console.log(resData.data);
        // console.log(resData.jwt);
        Cookies.set("jwt", resData.jwt);
        if (resData) {
          setTog(false);
          dispatch(AddAuth(true));
          dispatch(AddProfile(resData.data));
          navigate("/");
        }
        console.log("Data Send to Backend");
      } catch (e) {
        dispatch(AddAuth(false));
        console.log("There is SOme error");
        setTog(true);
      }
    }
    Fetching();
  }

  return (
    <form
      className="Login_Outer"
      onSubmit={(e) => {
        e.preventDefault();

        handleChange();
      }}
    >
      <h1>Login</h1>
      <div className="Login_container">
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
          <label htmlFor="Password"> Password</label>
          <input
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
        </div>
        <div>
          <button className="Login_Btn" type="submit">
            Login
          </button>
        </div>
        <div className="lastLine">
          New User ? Register Here <Link to="/signup">Sign Up</Link>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/forgotPass");
            }}
          >
            Forgot Password
          </button>
        </div>
      </div>
      {tog && <div className="error">Something Went wrong</div>}
    </form>
  );
};
export default Login;
