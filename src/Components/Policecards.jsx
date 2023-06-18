import React from "react";
import { useState } from "react";
import Policemodal from "../Pages/Policemodal";

export default function Policecrads(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="Policemovie1">
      {show && (
        <Policemodal show={show} onHide={() => setShow(false)} data={props} />
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
