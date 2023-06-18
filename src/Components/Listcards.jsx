import React from "react";
import { useState } from "react";
import "../Style/trend.css";
import Listmodal from "../Pages/Listmodal";

export default function Listcards(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="movie1">
      {show && (
        <Listmodal show={show} onHide={() => setShow(false)} data={props} />
      )}
      <img
        alt=""
        className="tvShow"
        onClick={() => setShow(true)}
        src={props.liImg}
      />
    </div>
  );
}
