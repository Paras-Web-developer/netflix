import React, { useState } from "react";
import Header from "../Components/Header";
import Recent from "../Components/Recent";
import Trending from "../Components/Trending";
import Footer from "../Components/Footer";
import "../Style/global.css";
import Tvshow from "../Components/Tvshow";
import Continue from "../Components/Continue";
import Topten from "../Components/Topten";
import Comedy from "../Components/Comedy";
import NewRel from "../Components/NewRel";
import Weekend from "../Components/Weekend";
import Search from "../Components/Search";

function Landing() {
  const [recData, setRecData] = useState();
  console.log(recData, "---data");
  return (
    <div className="landingWrapper">
        <div className="landMain">
          <Header recsearch={setRecData} />
        </div>
        {
          <div className="forWdth">
            {!recData ? (
              <div className="forColor">
                <div>
                  <div className="recWrap">
                    <Recent />
                  </div>
                  <div className="contWrap">
                    <Continue />
                  </div>
                  <div className="trenWrap">
                    <Trending />
                  </div>
                  <div className="tvWrap">
                    <Tvshow />
                  </div>
                  <div className="topWrap">
                    <Topten />
                  </div>
                  <div className="comWrap">
                    <Comedy />
                  </div>
                  <div className="newWrap">
                    <NewRel />
                  </div>
                  <div className="weekWrap">
                    <Weekend />
                  </div>
                </div>
              </div>
            ) : (
              <div className="searchDiv">
                <Search recsearch={recData} />
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

export default Landing;