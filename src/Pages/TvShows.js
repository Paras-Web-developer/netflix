import React, { useState } from "react";
import Footer from "../Components/Footer";
import "../Style/global.css";
import Continue from "../Components/Continue";
import ShowtvTen from "../Components/ShowtvTen";
import Crimetv from "../Components/Crimetv";
import Dramatv from "../Components/Dramatv";
import Smheader from "../Components/Smheader";
import UstvShow from "../Components/Ustvshow";
import Tvtrend from "../Components/Tvtrend";
import Awardwin from "../Components/Awardwin";
import Police from "../Components/Police";
import Smsearch from "../Components/Smsearch";

function TvShows() {
  const [tvData,setTvdata] = useState();
  return (
    <div className="landingWrapper">
      <div className="smWrap">
        <Smheader search={setTvdata}/>
      </div>
      {
        <div className="">
        {!tvData ? (
          <div className="forColor">
            <div className="recWrap1">
              <Awardwin />
            </div>
            <div className="contWrap">
              <Continue />
            </div>
            <div className="trenWrap">
              <Police />
            </div>
            <div className="tvWrap">
              <Tvtrend />
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
              <UstvShow />
            </div>
          </div>
        ) : (
          <div className="tvSearch">
            <Smsearch search={tvData}/>
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

export default TvShows;
