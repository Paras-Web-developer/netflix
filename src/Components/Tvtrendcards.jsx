import React from "react";
import { useState } from "react";
import "../Style/trend.css";
import Tvtrendmodal from "../Pages/Tvtrendmodal";

export default function Tvtrendcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="tvTrenmovie1">
      {show && (
        <Tvtrendmodal show={show} onHide={() => setShow(false)} data={props} />
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
