import React from "react";
import { useState } from "react";
import Childmodal from "../Pages/Chilmodal";

export default function Childcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="childmovie1">
      {show && (
        <Childmodal show={show} onHide={() => setShow(false)} data={props} />
      )}
      <img
        alt=""
        className="trendMov1"
        onClick={() => setShow(true)}
        src={props.week}
      />
    </div>
  );
}
