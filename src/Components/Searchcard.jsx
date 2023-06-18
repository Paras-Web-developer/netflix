import React, { useState } from "react";
import Searchmodal from "../Pages/Searchmodal";

export default function Searchcard(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="resultMovies">
      {show && (
        <Searchmodal show={show} onHide={() => setShow(false)} data={props} />
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
