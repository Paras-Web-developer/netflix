import React from "react";
import "../Style/comedy.css";
import { useState } from "react";
import Acclaimedmodal from "../Pages/Acclaimedmodal";

export default function Acclaimedcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="com1">
      {show && (
        <Acclaimedmodal
          show={show}
          onHide={() => setShow(false)}
          data={props}
        />
      )}
      <img
        alt=""
        className="comMovie1"
        onClick={() => setShow(true)}
        src={props.img}
      />
    </div>
  );
}
