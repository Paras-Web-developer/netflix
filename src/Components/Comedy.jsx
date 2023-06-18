import React, { Component, useEffect, useState } from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Comcards from "./Comcards";
import { comedyMovies } from "../Utils/database";
import "../Style/comedy.css";
import { Ldarrow, Rdarrow } from "../Utils/Images";

function ComPreArrow(props) {
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

function ComNextArrow(props) {
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

function Comedy(props) {
  const [comedy, setComedy] = useState([]);

  useEffect(() => {
    let arr = [];
    if (props.recsearch === "") {
      arr = comedyMovies;
    } else {
      let cmdyword = props.recsearch?.toUpperCase().split("");
      comedyMovies.map((val) => {
        let cmdytest = val.Name?.toUpperCase().split("");
        let cmdymatch = true;
        for (let j = 0; j < cmdyword?.length; j++) {
          if (cmdyword[j] !== cmdytest[j]) {
            cmdymatch = false;
          }
        }
        if (cmdymatch) {
          arr.push(val);
        }
      });
      setComedy(arr);
    }
  }, [props.recsearch]);
  const comsettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <ComPreArrow className="sleft"></ComPreArrow>,
    prevArrow: <ComNextArrow className="rleft"></ComNextArrow>,
  };
  return (
    <div className="comedyWrapper">
      <div className=" comedyMain">
        <h2 className="comHead1">
          <b>Comedies</b>
        </h2>
        <div className="comedyArea">
          <div className="comedyMov">
            <Slider className="local" {...comsettings}>
              {comedy.map((value) => {
                return (
                  <Comcards
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

      <div className=" comedyMain1">
        <h2 className="comHead2">
          <b>Comedies</b>
        </h2>
        <div className="comedyArea1">
          <div className="comedyMov1">
            {comedy.map((value) => {
              return (
                <Comcards
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

export default Comedy;
