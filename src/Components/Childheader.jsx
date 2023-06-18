import React, { useState } from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import { net } from "../Utils/Images";
import "../Style/header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Childresponav from "./Childresponav";

function Childheader({ search }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setSearch = search;
  const [searchData, setSearchData] = useState();
  // console.log(searchData);
  return (
    <div className="childWrapper">
      <div className="childMainlang">
        <div className="headLeft">
          <img
            alt=""
            className="netImg"
            src={net}
            onClick={() => navigate("/")}
          />
        </div>
        <div className="headCenter">
          <ul className="ul">
            <li className="headLi" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="headLi" onClick={() => navigate("/tv")}>
              TV Shows
            </li>
            <li className="headLi" onClick={() => navigate("/movie")}>
              Movies
            </li>
            <li className="headLi" onClick={() => navigate("/show")}>
              New & Popular
            </li>
            <li className="headL2" onClick={() => navigate("/lang")}>
              Browse by Languages
            </li>
          </ul>
          <div className="respoNone">
            <Childresponav />
          </div>
        </div>

        <div className="headRight">
          <input
            className="navSearch"
            type="text"
            placeholder="Search.."
            focus="none"
            onChange={(e) => {
              setSearchData(e.target.value);
              setSearch(e.target.value);
            }}
          />
          <div className="Search"></div>
        </div>
        <div className="Role">
          <div className="containers">
            <input
              type="checkbox"
              onClick={() => {
                setTimeout(() => {
                  navigate("/");
                }, 1000);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Childheader;
