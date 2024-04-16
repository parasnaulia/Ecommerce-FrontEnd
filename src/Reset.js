import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { hosting } from "./Components/Constants/Constants";

const Reset = () => {
  let { id, token } = useParams();
  const [PassWord, setPassword] = useState("");
  const [Cpassword, setCpassWord] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  console.log("This is Id" + id);
  console.log("This is Token" + token);
  async function UpdateToDataBase() {
    try {
      const data = await fetch(`${hosting}/reset/${id}/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          PassWord: PassWord,
          Cpassword: Cpassword,
          id: id,
          token: token,
        }),
      });
      const resData = await data.json();
      setMsg(resData.msg);
      console.log(resData);
      navigate("/login");
    } catch (e) {
      setMsg("Something Went Wrong");
      console.log("This is Error" + e);
    }
  }
  return (
    <div className="Forgot-Password">
      <div className="Forgot-Password-inner">
        <h1>Forgot PAssword</h1>
        <div>
          <input
            placeholder="Enter New PassWord"
            className="forgot-input"
            value={PassWord}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Enter Conform Password"
            className="forgot-input"
            value={Cpassword}
            onChange={(e) => {
              setCpassWord(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="pp-btn"
            onClick={() => {
              UpdateToDataBase();
            }}
          >
            Submit
          </button>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Reset;
