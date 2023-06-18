import React from "react";
import { useState } from "react";
import Tvmodal from "../Pages/Tvmodal";

export default function TvCards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="tvMovie1">
      {show && (
        <Tvmodal show={show} onHide={() => setShow(false)} data={props} />
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
