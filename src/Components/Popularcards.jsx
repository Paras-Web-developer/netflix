import React from "react";
import "../Style/recent.css";
import { useState } from "react";
import Popularmodal from "../Pages/Popularmodal";

export default function Popularcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="movie1">
      {show && (
        <Popularmodal show={show} onHide={() => setShow(false)} data={props} />
      )}
      <img
        alt=""
        className="recMov1"
        onClick={() => setShow(true)}
        src={props.img}
      />
    </div>
  );
}
