import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import {
  Eight,
  Five,
  Four,
  Nine,
  One,
  Seven,
  Six,
  Ten,
  Three,
  Two,
} from "../Utils/Images";
import "../Style/topten.css";
import { topmovData } from "../Utils/database";

export default function TopTenMov() {
  const tenShows = topmovData;
  const topsettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="topWrapper">
      <div className="tenMain">
        <h2 className="tHead1">Top Ten TV Shows in India Today</h2>
        <div className="topArea">
          <div className="topTen">
            <Slider {...topsettings}>
              <div className="top1">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[0]} />
                  <img alt="" className="Nummm" src={One} />
                </div>
              </div>

              <div className="top2">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[1]} />
                  <img alt="" className="Nummm" src={Two} />
                </div>
              </div>
              <div className="top3">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[2]} />
                  <img alt="" className="Nummm" src={Three} />
                </div>
              </div>
              <div className="top4">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[3]} />
                  <img alt="" className="Nummm" src={Four} />
                </div>
              </div>
              <div className="top5">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[4]} />
                  <img alt="" className="Nummm" src={Five} />
                </div>
              </div>
              <div className="top6">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[5]} />
                  <img alt="" className="Nummm" src={Six} />
                </div>
              </div>
              <div className="top7">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[6]} />
                  <img alt="" className="Nummm" src={Seven} />
                </div>
              </div>
              <div className="top8">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[7]} />
                  <img alt="" className="Nummm" src={Eight} />
                </div>
              </div>
              <div className="top9">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[8]} />
                  <img alt="" className="Nummm" src={Nine} />
                </div>
              </div>
              <div className="top10">
                <div className="sem">
                  <img alt="" className="oneImg" src={tenShows[9]} />
                  <img alt="" className="Nummm" src={Ten} />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
