import React, { useDebugValue } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Ldarrow, Rdarrow } from "../Utils/Images";
import "../Style/trend.css";
import { indianMov } from "../Utils/database";
import Worthcards from "./Worthcards";

function TrendPreArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        width: "60px",
        zIndex: "9",
        background: "hsla(0,0%,8%,.5)",
        opacity: "80%",
        height: "139px",
        marginTop: "1.4rem",
      }}
      onClick={onClick}
    >
      <img alt="" style={{ width: "65px", marginTop: "2rem" }} src={Ldarrow} />
    </div>
  );
}

function TrendNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        width: "60px",
        zIndex: "9",
        margin: "0px 0px 0px 1342px",
        background: "hsla(0,0%,8%,.5)",
        opacity: "80%",
        height: "139px",
        marginTop: "1.4rem",
      }}
      onClick={onClick}
    >
      <img alt="" style={{ width: "65px", marginTop: "2rem" }} src={Rdarrow} />
    </div>
  );
}

function Worthwait() {
  const trendsettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <TrendPreArrow className="sleft"></TrendPreArrow>,
    prevArrow: <TrendNextArrow className="rleft"></TrendNextArrow>,
  };
  return (
    <div className="trendingWrapper">
      <div className="trendMain">
        <h2 className="THead1">Made in India</h2>
        <div className="trendArea">
          <div className="trendMovies">
            <Slider className="local" {...trendsettings}>
              {indianMov.map((value) => {
                return (
                  <Worthcards
                    rcnthead={value.recenthead}
                    rcntcrt={value.recentCreator}
                    rcntcst={value.recentCast}
                    rcntgnrs={value.recentGenres}
                    rcntshowis={value.recentShowis}
                    rcntrtng={value.recentRate}
                    rcnttime={value.recentTime}
                    rcntage={value.recentAge}
                    rcntyear={value.recentYear}
                    rcntqual={value.recentQual}
                    rcnthd={value.recentDh}
                    rcntpr={value.recentDpara}
                    img={value.recentimg}
                    value={value}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worthwait;
