import React from "react";
import { useState } from "react";
import "../Style/weekend.css";
import Onactionmodal from "../Pages/Onactionmodal";

export default function Onactioncards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="week1">
      {show && (
        <Onactionmodal show={show} onHide={() => setShow(false)} data={props} />
      )}
      <img
        alt=""
        className="weekMovie1"
        onClick={() => setShow(true)}
        src={props.img}
      />
    </div>
  );
}
