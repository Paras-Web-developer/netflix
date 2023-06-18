import React from "react";
import { useState } from "react";
import Worthmodal from "../Pages/Worthmodal";

export default function Worthcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="movie1">
      {show && (
        <Worthmodal show={show} onHide={() => setShow(false)} data={props} />
      )}
      <img
        alt=""
        className="trendMov1"
        onClick={() => setShow(true)}
        src={props.img}
      />
    </div>
  );
}
