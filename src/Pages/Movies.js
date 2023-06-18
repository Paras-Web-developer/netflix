import React, { useState } from "react";
import Footer from "../Components/Footer";
import "../Style/global.css";
import Continue from "../Components/Continue";
import Moviestv from "../Components/Moviestv";
import RealLife from "../Components/RealLife";
import MinutMovies from "../Components/MinutMovies";
import Acclaimed from "../Components/Acclaimed";
import Womenrule from "../Components/Womenrule";
import Onaction from "../Components/Onaction";
import TopTenMov from "./TopTenMov";
import Smsearch from "../Components/Smsearch";
import Moviesearch from "../Components/Moviesearch";
import Moviheader from "../Components/Moviheader";

function Movies() {
  const [moviData,setMovidata] = useState();
  return (
    <div className="landingWrapper">
      <div className="smWrap">
        <Moviheader movisearch={setMovidata}/>
      </div>
      {
        <div className="">
        {!moviData ? (
          <div className="forColor">
          <div className="recWrapMov">
            <Moviestv />
          </div>
          <div className="contWrap">
            <Continue />
          </div>
          <div className="trenWrap">
            <RealLife />
          </div>
          <div className="tvWrap">
            <MinutMovies />
          </div>
          <div className="topWrap">
            <TopTenMov />
          </div>
          <div className="comWrap">
            <Acclaimed />
          </div>
          <div className="newWrap">
            <Womenrule />
          </div>
          <div className="weekWrap">
            <Onaction />
          </div>
        </div>
        ) : (
          <div className="movSearch">
            <Moviesearch movisearch={moviData}/>
          </div>
        )
      }
          
        </div>
      }
      <div className="footWrap">
        <Footer />
      </div>
    </div>
  );
}

export default Movies;
