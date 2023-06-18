import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "../Style/newrel.css";
import { dramaTv } from "../Utils/database";
import { Ldarrow, Rdarrow } from "../Utils/Images";
import Dramatvcards from "./Dramatvcards";

function NewrelPreArrow(props) {
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

function NewrelNextArrow(props) {
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

export default function Dramatv() {
  const newrelsettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <NewrelPreArrow className="sleft"></NewrelPreArrow>,
    prevArrow: <NewrelNextArrow className="rleft"></NewrelNextArrow>,
  };
  return (
    <div className="newrelWrapper">
      <div className=" newrelMain">
        <h2 className="newHead1">TV Dramas</h2>
        <div className="newrelArea">
          <div className="newrelMov">
            <Slider className="local" {...newrelsettings}>
              {dramaTv.map((value) => {
                return (
                  <Dramatvcards
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

      <div className=" newrelMain1">
        <h2 className="newHead2">
          <b>New Releases</b>
        </h2>
        <div className="newrelArea1">
          <div className="newrelMov1">
            {dramaTv.map((value) => {
              return (
                <Dramatvcards
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
