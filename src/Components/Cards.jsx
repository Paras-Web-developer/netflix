import React from "react";
import "../Style/recent.css";
import { useState } from "react";
import CardsModal from "../Pages/CardsModal";

export default function Cards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="rmovie1">
      {show && (
        <CardsModal show={show} onHide={() => setShow(false)} data={props} />
      )}
      <img
        alt=""
        className="recMov1"
        onClick={() => setShow(true)}
        src={props.img}
      />
    </div>
  );
}
