import React from "react";
import { Ldarrow, Rdarrow } from "../Utils/Images";
import "../Style/recent.css";
import { moviesPop } from "../Utils/database";
import Slider from "react-slick";
import Moviestvcards from "./Moviestvcards";

function SampleNextArrow(props) {
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

function SamplePrevArrow(props) {
  const { sleft, style, onClick } = props;
  return (
    <div
      className={sleft}
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

function Moviestv() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SamplePrevArrow className="sleft"></SamplePrevArrow>,
    prevArrow: <SampleNextArrow className="rleft"></SampleNextArrow>,
  };
  return (
    <div className="recentWrapper">
      <div className="recentMain">
        <h2 className="recHEad1">Popular on NETFLIX</h2>
        <div className="recentArea">
          <div className="recentMovies">
            <Slider className="local" {...settings}>
              {moviesPop.map((value) => {
                return (
                  <Moviestvcards
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

      <div className="recentMain1">
        <h2 className="recHEad2">
          <b>Popular on NETFLIX</b>
        </h2>
        <div className="recentArea1">
          <div className="recentMovies1">
            {moviesPop.map((value) => {
              return (
                <Moviestvcards
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

export default Moviestv;
