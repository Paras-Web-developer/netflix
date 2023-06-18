import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/responavmovi.css";
import { net } from "../Utils/Images";
import { useDispatch } from "react-redux";
import { Logout } from "../Store/Auth/action";

export default function RespoNavMovi({ recsearch }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setRecent = recsearch;
  const [recData, setRecData] = useState();
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <img
            alt=""
            className="navImg"
            src={net}
            onClick={() => navigate("/")}
          />
        </div>
        <div className="headRight">
          <input
            className="navSearch"
            type="search"
            name="gsearch"
            placeholder="Search.."
            focus="none"
            onChange={(e) => {
              setRecData(e.target.value);
              setRecent(e.target.value);
            }}
          />
          <div className="Search"></div>
        </div>
      </div>

      <div className="childBtnNav2">
        <ul className="childBtnUl">
          <li className="childBtnLi" onClick={() => navigate("/movie")}>
            Movies
          </li>
          <li className="childBtnLi" onClick={() => navigate("/tv")}>
            Tv Shows
          </li>
        </ul>
        <div className="Roles">
          <div className="container1">
            <div className="headCheck">
              <input
                type="checkbox"
                onClick={() => {
                  setTimeout(() => {
                    navigate("/child");
                  }, 1000);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <ul className="nav-links">
        <li className="navLi1" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="navLi" onClick={() => navigate("/tv")}>
          Tv Show
        </li>
        <li className="navLi" onClick={() => navigate("/movie")}>
          Movies
        </li>
        <li className="navLi" onClick={() => navigate("/lang")}>
          Browse by Languages
        </li>
        <li className="navLi" onClick={() => navigate("/show")}>
          New & Popular
        </li>
        <li
          className="navLi"
          onClick={() => {
            dispatch(Logout());
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
