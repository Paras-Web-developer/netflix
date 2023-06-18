import React from "react";
import { useState } from "react";
import Recentmodal from "../Pages/Recentmodal";

export default function Trendcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="endmovie1">
      {show && (
        <Recentmodal show={show} onHide={() => setShow(false)} data={props} />
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
