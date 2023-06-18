import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { weekEnd } from "../Utils/database";
import "../Style/weekend.css";
import WeekednCard from "./WeekendCard";
import { Ldarrow, Rdarrow } from "../Utils/Images";

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

function Weekend(props) {
  const [week, setWeek] = useState([]);
  useEffect(() => {
    let arr = [];
    if (props.recsearch === "") {
      arr = weekEnd;
    } else {
      let wkword = props.recsearch?.toUpperCase().split("");
      weekEnd.map((val) => {
        let wktest = val.Name?.toUpperCase().split("");
        let wkmatch = true;
        for (let j = 0; j < wkword?.length; j++) {
          if (wkword[j] !== wktest[j]) {
            wkmatch = false;
          }
        }
        if (wkmatch) {
          arr.push(val);
        }
      });
      setWeek(arr);
    }
  }, [props.recsearch]);
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
        <h2 className="weekHead1">
          <b>Watch In One Weekend</b>
        </h2>
        <div className="weekendArea">
          <div className="weekendMov">
            <Slider className="local" {...weeksettings}>
              {week.map((value) => {
                return (
                  <WeekednCard
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
          <b>Watch In One Weekend</b>
        </h2>
        <div className="weekendArea1">
          <div className="weekendMov1">
            {week.map((value) => {
              return (
                <WeekednCard
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

export default Weekend;
