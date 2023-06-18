import React from "react";
import "../Style/recent.css";
import { useState } from "react";
import Awardwinmodal from "../Pages/Awardwinmodal";

export default function Awardwincards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="Awardmovie1">
      {show && (
        <Awardwinmodal show={show} onHide={() => setShow(false)} data={props} />
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
