import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import TvCards from "./TvCards";
import { tvShows } from "../Utils/database";
import "../Style/tvshow.css";
import { Ldarrow, Rdarrow } from "../Utils/Images";

function TvPreArrow(props) {
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

function TvNextArrow(props) {
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

export default function Tvshow(props) {
  const [tvshow, setTvShow] = useState([]);

  useEffect(() => {
    let arr = [];
    if (props.recsearch === "") {
      arr = tvShows;
    } else {
      let tvshowword = props.recsearch?.toUpperCase().split("");
      tvShows.map((val) => {
        let tvshowtest = val.Name?.toUpperCase().split("");
        let tvshowmatch = true;
        for (let j = 0; j < tvshowword?.length; j++) {
          if (tvshowword[j] !== tvshowtest[j]) {
            tvshowmatch = false;
          }
        }
        if (tvshowmatch) {
          arr.push(val);
        }
      });
      setTvShow(arr);
    }
  }, [props.recsearch]);
  const tvsettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <TvPreArrow className="sleft"></TvPreArrow>,
    prevArrow: <TvNextArrow className="rleft"></TvNextArrow>,
  };
  return (
    <div className="tvWrapper">
      <div className="tvMain">
        <h2 className="tvHead1">
          <b>Movies & TV Shows set in India</b>
        </h2>
        <div className="tvArea">
          <div className="tvShows">
            <Slider className="local" {...tvsettings}>
              {tvshow.map((value) => {
                return (
                  <TvCards
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

      <div iv className="tvMain1">
        <h2 className="tvHead2">
          <b>Movies & TV Shows set in India</b>
        </h2>
        <div className="tvArea1">
          <div className="tvShows1">
            {tvshow.map((value) => {
              return (
                <TvCards
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
