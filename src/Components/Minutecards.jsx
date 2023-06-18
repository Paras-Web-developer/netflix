import React from "react";
import { useState } from "react";
import "../Style/trend.css";
import Minutemodal from "../Pages/Minutemodal";

export default function Minutecards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="Minutmovie1">
      {show && (
        <Minutemodal show={show} onHide={() => setShow(false)} data={props} />
      )}
      <img
        alt=""
        className="tvShow"
        onClick={() => setShow(true)}
        src={props.img}
      />
    </div>
  );
}
