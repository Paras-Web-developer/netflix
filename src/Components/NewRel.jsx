import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "../Style/newrel.css";
import { newlyRelease } from "../Utils/database";
import { Ldarrow, Rdarrow } from "../Utils/Images";
import NewlyrelCards from "./NewlyrelCards";

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

export default function NewRel(props) {
  const [newrel, setNewRel] = useState([]);

  useEffect(() => {
    let arr = [];
    if (props.recsearch === "") {
      arr = newlyRelease;
    } else {
      let newrelword = props.recsearch?.toUpperCase().split("");
      newlyRelease.map((val) => {
        let newreltest = val.Name?.toUpperCase().split("");
        let newrelmatch = true;
        for (let j = 0; j < newrelword?.length; j++) {
          if (newrelword[j] !== newreltest[j]) {
            newrelmatch = false;
          }
        }
        if (newrelmatch) {
          arr.push(val);
        }
      });
      setNewRel(arr);
    }
  }, [props.recsearch]);
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
        <h2 className="newHead1">
          <b>New Releases</b>
        </h2>
        <div className="newrelArea">
          <div className="newrelMov">
            <Slider className="local" {...newrelsettings}>
              {newrel.map((value) => {
                return (
                  <NewlyrelCards
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
            {newrel.map((value) => {
              return (
                <NewlyrelCards
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
