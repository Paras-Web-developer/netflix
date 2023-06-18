import React from "react";
import "../Style/comedy.css";
import { useState } from "react";
import Comedymodal from "../Pages/Comedymodal";

export default function Crimetvcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="com1">
      {show && (
        <Comedymodal show={show} onHide={() => setShow(false)} data={props} />
      )}
      <img
        alt=""
        className="comMovie1"
        onClick={() => setShow(true)}
        src={props.img}
      />
    </div>
  );
}
