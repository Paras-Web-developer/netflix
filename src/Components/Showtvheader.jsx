import React, { useState } from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import { net } from "../Utils/Images";
import "../Style/header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Showtvheader({ showtvsearch }) {
  const navigate = useNavigate();
  const setSearch = showtvsearch;
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState();
  return (
    <div className="headWrapper">
      <div className="headMainlang">
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
          <div className="container1">
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
  );
}

export default Showtvheader;
