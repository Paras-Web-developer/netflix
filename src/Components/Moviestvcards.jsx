import React from "react";
import "../Style/recent.css";
import { useState } from "react";
import Moviestvmodal from "../Pages/Moviestvmodal";

export default function Moviestvcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="Mmovie1">
      {show && (
        <Moviestvmodal show={show} onHide={() => setShow(false)} data={props} />
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
