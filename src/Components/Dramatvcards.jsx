import React from "react";
import { useState } from "react";
import Dramatvmodal from "../Pages/Dramatvmodal";

export default function Dramatvcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="newRel">
      {show && (
        <Dramatvmodal show={show} onHide={() => setShow(false)} data={props} />
      )}
      <img
        alt=""
        className="new1"
        onClick={() => setShow(true)}
        src={props.img}
      />
    </div>
  );
}
