import React from "react";
import Modal from "react-bootstrap/Modal";
import "../Style/recentmodal.css";
import { Pl } from "../Utils/Images";

const Browselangmodal = (props) => {
  const style = {
    position: "absolute",
    right: "-20px",
    top: "-20px",
    width: "50px",
    height: "50px",
    background: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#00000",
    fontSize: "28px",
    zIndex: "1",
    cursor: "pointer",
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.onHide}>
        <span style={style} onClick={props.onHide}>
          &#10008;
        </span>
        <Modal.Body className="recModBody">
          <div className="recModWrapper">
            <div className="recModMain">
              <div className="recModVidArea">
                <div className="recModVid">
                  <img alt="" className="modalEvil" src={props.data.week} />
                  <button className="navBtn3">
                    <img alt="" className="navPause2" src={Pl} />
                    Play
                  </button>
                </div>
              </div>
              <div className="recModWrittenArea">
                <div className="recModAll">
                  <h5 className="recModYear">{props.data.wkndyear}</h5>
                  <h5 className="recModAge">{props.data.wkndage}</h5>
                  <h5 className="recModTime">{props.data.wkndtime}</h5>
                  <h6 className="recModQual">{props.data.wkndqual}</h6>
                </div>
                <div className="recModPlace">
                  <h4 className="recModHash">{props.data.wkndhd}</h4>
                  <p className="redModPara">{props.data.wkndpr}</p>
                </div>
                <div className="about">
                  <h4 className="aboutMovie">{props.data.wkndhead}</h4>
                  <h6 className="aboutCreators">
                    <span className="crtsp">Creators :</span>{" "}
                    {props.data.wkndcrt}
                  </h6>
                  <h6 className="aboutCast">
                    <span className="crtsp">Cast :</span> {props.data.wkndcst}
                  </h6>
                  <h6 className="aboutGenres">
                    <span className="crtsp">Genres :</span>{" "}
                    {props.data.wkndgnrs}
                  </h6>
                  <h6 className="aboutShow">
                    <span className="crtsp">This show is :</span>{" "}
                    {props.data.wkndshowis}
                  </h6>
                  <h6 className="aboutRating">
                    <span className="crtsp">Maturity rating :</span>{" "}
                    {props.data.wkndrtng}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Browselangmodal;
