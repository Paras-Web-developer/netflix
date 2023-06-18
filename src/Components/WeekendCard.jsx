import React from "react";
import { useState } from "react";
import "../Style/weekend.css";
import Weekendmodal from "../Pages/Weekendmodal";

export default function WeekednCard(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="week1">
      {show && (
        <Weekendmodal show={show} onHide={() => setShow(false)} data={props} />
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
