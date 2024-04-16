import React, { useState } from "react";
import { hosting } from "./Components/Constants/Constants";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  async function SendMail() {
    try {
      const response = await fetch(`${hosting}/mailer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });
      console.log("Snekf");
      const resData = await response.json();
      console.log(resData);
      setMsg("Reset Link Is Send To Your Email");
    } catch (e) {
      setEmail("Something Went Wrong");
      console.log("not able To Handle Error" + e);
    }
  }
  //http://localhost:5000/nodeMailer
  return (
    <div className="Forgot-Container">
      {" "}
      <div className="Forgot-Inner">
        <h1>Forgot Password</h1>
        <div>
          <input
            placeholder="Enter Your Email "
            className="forgot-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={() => {
              SendMail();
            }}
          >
            {" "}
            Send
          </button>
        </div>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ForgotPass;
