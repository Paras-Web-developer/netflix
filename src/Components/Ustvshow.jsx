import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { usShwo } from "../Utils/database";
import "../Style/weekend.css";
import { Ldarrow, Rdarrow } from "../Utils/Images";
import Ustvcards from "./Ustvcards";

function WeekPreArrow(props) {
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

function WeekNextArrow(props) {
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

function UstvShow() {
  const weeksettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <WeekPreArrow className="sleft"></WeekPreArrow>,
    prevArrow: <WeekNextArrow className="rleft"></WeekNextArrow>,
  };
  return (
    <div className="weekendWrapper">
      <div className=" weekendMain">
        <h2 className="weekHead1">US TV Shows</h2>
        <div className="weekendArea">
          <div className="weekendMov">
            <Slider className="local" {...weeksettings}>
              {usShwo.map((value) => {
                return (
                  <Ustvcards
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

      <div className=" weekendMain1">
        <h2 className="weekHead2">
          <b>US TV Shows</b>
        </h2>
        <div className="weekendArea1">
          <div className="weekendMov1">
            {usShwo.map((value) => {
              return (
                <Ustvcards
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default UstvShow;
