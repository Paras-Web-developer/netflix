import React from "react";
import { useState } from "react";
import Browselangmodal from "../Pages/Browselangmodal";

export default function Languagecards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="langmovie1">
      {show && (
        <Browselangmodal
          show={show}
          onHide={() => setShow(false)}
          data={props}
        />
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
