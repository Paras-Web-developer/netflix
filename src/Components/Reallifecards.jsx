import React from "react";
import { useState } from "react";
import Reallifemodal from "../Pages/Reallifemodal";

export default function Reallifecards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="Realmovie1">
      {show && (
        <Reallifemodal show={show} onHide={() => setShow(false)} data={props} />
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
