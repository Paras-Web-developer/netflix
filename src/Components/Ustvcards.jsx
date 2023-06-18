import React from "react";
import { useState } from "react";
import "../Style/weekend.css";
import Ustvmodal from "../Pages/Ustvmodal";

export default function Ustvcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="week1">
      {show && (
        <Ustvmodal show={show} onHide={() => setShow(false)} data={props} />
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
