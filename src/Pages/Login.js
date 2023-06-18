import React, { useState } from "react";
import "../Style/login.css";
import "../Style/responsive.css";
import { Email, Key, Nettt } from "../Utils/Images";
import { loginData } from "../Utils/database";
import { useDispatch } from "react-redux";
import { actionLogin } from "../Store/Auth/action";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    console.log({ email: email, password: password }, "Login Data");
    if (loginData[0]?.Email === email && loginData[0]?.Password === password) {
      let data = { email: email, password: password, token: "1234" };
      dispatch(actionLogin(data));
    }
  };

  // function hidden(){

  // }

  return (
    <div className="loginWrapper">
      <div className="loginMain">
        <div className="loginArea">
          <div className="inputArea">
            <div className="img">
              <img alt="" className="net" src={Nettt} />
              <h2 className="logHead1">NETFLIX...</h2>
            </div>
            <form onSubmit={handleForm}>
              <div className="same2">
                <div className="same">
                  <img alt="" src={Email} />
                </div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="input1"
                  placeholder="E-mail"
                  required
                />
              </div>
              <br />
              <br />
              <div className="same2">
                <div className="same">
                  <img alt="" src={Key} />
                </div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="input1"
                  placeholder="Password"
                  required
                />
              </div>
              <br />
              <br />
              <input type="submit" className="sub" value="LOGIN" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
