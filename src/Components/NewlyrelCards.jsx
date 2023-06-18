import React from "react";
import { useState } from "react";
import Releasemodal from "../Pages/Releasemodal";

export default function NewlyrelCards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="newRel">
      {show && (
        <Releasemodal show={show} onHide={() => setShow(false)} data={props} />
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
