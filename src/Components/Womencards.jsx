import React from "react";
import { useState } from "react";
import Womenrulemodal from "../Pages/Womenrulemodal";

export default function Womencards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="newRel">
      {show && (
        <Womenrulemodal
          show={show}
          onHide={() => setShow(false)}
          data={props}
        />
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
