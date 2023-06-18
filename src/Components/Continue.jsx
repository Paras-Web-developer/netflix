import React from "react";
import "slick-carousel/slick/slick.css";
import "../Style/trend.css";
import ContCards from "./ContCards";
import { contWatching } from "../Utils/database";
import "../Style/Continue.css";

function Continue() {
  return (
    <div className="contWrapper">
      <div className="contMain">
        <h2 className="contHead1">
          <b>Continue Watching for Guru</b>
        </h2>
        <div className="contArea">
          <div className="contMov">
              {contWatching.map((el) => {
                return <ContCards cimg={el.contImg} el={el} />;
              })}
          </div>
        </div>
      </div>


      <div className="contMain1">
        <h2 className="contHead2">
          <b>Continue Watching for Guru</b>
        </h2>
        <div className="contArea1">
          <div className="contMov1">
              {contWatching.map((el) => {
                return <ContCards cimg={el.contImg} el={el} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Continue;
