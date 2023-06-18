import React from "react";
import { useState } from "react";
import "../Style/trend.css";
import Nextweekmodal from "../Pages/Nextweekmodal";

export default function Nextweekcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="movie1">
      {show && (
        <Nextweekmodal show={show} onHide={() => setShow(false)} data={props} />
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
