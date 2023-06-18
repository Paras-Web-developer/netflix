import React, { useState } from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import { net } from "../Utils/Images";
import "../Style/header.css";
import "../Style/responsive.css";
import Slider from "react-slick";
import { headData } from "../Utils/database";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../Store/Auth/action";
import RespoNav from "./RespoNav";

function Header({ recsearch }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setRecent = recsearch;
  const [recData, setRecData] = useState();
  const allData = headData;
  const headsettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="headWrapper">
      <div className="headMain">
        <div className="headLeft">
          <img alt=""  className="netImg" src={net} />
        </div>
        <div className="headCenter">
          <ul className="ul">
            <li className="headLi">Home</li>
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
            <li
              className="headL2"
              onClick={() => {
                dispatch(Logout());
                // navigate("/")
              }}
            >
              Logout
            </li>
          </ul>
          <div className="respoNone">
            <RespoNav />
          </div>
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
        <div className="Role">
          <div className="container">
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
      <Slider className="local2" {...headsettings}>
        <div className="wrapper">
          <img alt=""  className="headLogo" src={allData[0].headlimg} />
          <div className="navImgarea">
            <img alt=""  className="Nimg" src={allData[0].headImg} />
          </div>
          <div className="navWrittenarea">
            <h2 className="navHead2">{allData[0].heading}</h2>
            <p className="navPara1">{allData[0].headPara}</p>
          </div>
          <div className="navBtnarea">
            <button className="navBtn1">
              <img alt=""  className="navPause" src={allData[1].headBtn1} />
              <span className="span">Play</span>
            </button>
            <button className="navBtn2">
              <img alt=""  className="navInfo" src={allData[1].headBtn2} />
              <span className="span1">More Info</span>
            </button>
          </div>
        </div>

        <div className="wrapper">
          <img alt=""  className="headLogo" src={allData[2].headlimg} />
          <div className="navImgarea">
            <img alt=""  className="Nimg" src={allData[2].headImg} />
          </div>
          <div className="navWrittenarea">
            <h2 className="navHead2">{allData[2].heading}</h2>
            <p className="navPara1">{allData[2].headPara}</p>
          </div>
          <div className="navBtnarea">
            <button className="navBtn1">
              <img alt=""  className="navPause" src={allData[1].headBtn1} />
              <span className="span">Play</span>
            </button>
            <button className="navBtn2">
              <img alt=""  className="navInfo" src={allData[1].headBtn2} />
              <span className="span1">More Info</span>
            </button>
          </div>
        </div>

        <div className="wrapper">
          <img alt=""  className="headLogo" src={allData[3].headlimg} />
          <div className="navImgarea">
            <img alt=""  className="Nimg" src={allData[3].headImg} />
          </div>
          <div className="navWrittenarea">
            <p className="navPara1">{allData[3].headPara}</p>
          </div>
          <div className="navBtnarea">
            <button className="navBtn1">
              <img alt=""  className="navPause" src={allData[1].headBtn1} />
              <span className="span">Play</span>
            </button>
            <button className="navBtn2">
              <img alt=""  className="navInfo" src={allData[1].headBtn2} />
              <span className="span1">More Info</span>
            </button>
          </div>
        </div>

        <div className="wrapper">
          <img alt=""  className="headLogo" src={allData[4].headlimg} />
          <div className="navImgarea">
            <img alt=""  className="Nimg" src={allData[4].headImg} />
          </div>
          <div className="navWrittenarea">
            <p className="navPara1">{allData[4].headPara}</p>
          </div>
          <div className="navBtnarea">
            <button className="navBtn1">
              <img alt=""  className="navPause" src={allData[1].headBtn1} />
              <span className="span">Play</span>
            </button>
            <button className="navBtn2">
              <img alt=""  className="navInfo" src={allData[1].headBtn2} />
              <span className="span1">More Info</span>
            </button>
          </div>
        </div>

        <div className="wrapper">
          <img alt=""  className="headLogo" src={allData[5].headlimg} />
          <div className="navImgarea">
            <img alt=""  className="Nimg" src={allData[5].headImg} />
          </div>
          <div className="navWrittenarea">
            <p className="navPara1">{allData[5].headPara}</p>
          </div>
          <div className="navBtnarea">
            <button className="navBtn1">
              <img alt=""  className="navPause" src={allData[1].headBtn1} />
              <span className="span">Play</span>
            </button>
            <button className="navBtn2">
              <img alt=""  className="navInfo" src={allData[1].headBtn2} />
              <span className="span1">More Info</span>
            </button>
          </div>
        </div>

        <div className="wrapper">
          <img alt=""  className="headLogo" src={allData[6].headlimg} />
          <div className="navImgarea">
            <img alt=""  className="Nimg" src={allData[6].headImg} />
          </div>
          <div className="navWrittenarea">
            <p className="navPara1">{allData[6].headPara}</p>
          </div>
          <div className="navBtnarea">
            <button className="navBtn1">
              <img alt=""  className="navPause" src={allData[1].headBtn1} />
              <span className="span">Play</span>
            </button>
            <button className="navBtn2">
              <img alt=""  className="navInfo" src={allData[1].headBtn2} />
              <span className="span1">More Info</span>
            </button>
          </div>
        </div>

        <div className="wrapper">
          <img alt=""  className="headLogo" src={allData[7].headlimg} />
          <div className="navImgarea">
            <img alt=""  className="Nimg" src={allData[7].headImg} />
          </div>
          <div className="navWrittenarea">
            <h2 className="navHead2">{allData[0].heading}</h2>
            <p className="navPara1">{allData[7].headPara}</p>
          </div>
          <div className="navBtnarea">
            <button className="navBtn1">
              <img alt=""  className="navPause" src={allData[1].headBtn1} />
              <span className="span">Play</span>
            </button>
            <button className="navBtn2">
              <img alt=""  className="navInfo" src={allData[1].headBtn2} />
              <span className="span1">More Info</span>
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Header;
