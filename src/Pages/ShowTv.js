import React, { useState } from "react";
import Footer from "../Components/Footer";
import "../Style/global.css";
import Continue from "../Components/Continue";
import PopularTv from "../Components/PopularTv";
import Worthwait from "../Components/Worthwait";
import ShowtvTen from "../Components/ShowtvTen";
import ComnextWeek from "../Components/ComnextWeek";
import Crimetv from "../Components/Crimetv";
import Dramatv from "../Components/Dramatv";
import UstvShow from "../Components/Ustvshow";
import Npsearch from "../Components/Npsearch";
import Showtvheader from "../Components/Showtvheader";

function ShowTv() {
  const [showtvData, setshowTvdata] = useState();
  return (
    <div className="landingWrapper">
      <div className="smWrap">
        <Showtvheader showtvsearch={setshowTvdata}/>
      </div>
      {
        <div className="">
          {!showtvData ? (
            <div className="forColor">
              <div className="recWrap">
                <PopularTv />
              </div>
              <div className="contWrap">
                <Continue />
              </div>
              <div className="trenWrap">
                <Worthwait />
              </div>
              <div className="tvWrap">
                <ComnextWeek />
              </div>
              <div className="topWrap">
                <ShowtvTen />
              </div>
              <div className="comWrap">
                <Crimetv />
              </div>
              <div className="newWrap">
                <Dramatv />
              </div>
              <div className="weekWrap">
                <UstvShow/>
              </div>
            </div>
          ) : (
            <div className="showtvSearch">
              <Npsearch showtvsearch={showtvData}/>
            </div>
          )}
        </div>
      }
      <div className="footWrap">
        <Footer />
      </div>
    </div>
  );
}

export default ShowTv;
