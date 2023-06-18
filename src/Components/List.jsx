import React from "react";
import "../Style/recent.css";
import { listData } from "../Utils/database";
import Moviestvcards from "./Moviestvcards";

function List() {

  return (
    <div className="recentWrapper">
      <div className="recentMain">
        <h2 className="recHEad1">My List</h2>
        <div className="recentArea">
          <div className="listMovies">
              {listData.map((value) => {
                return (
                  <Moviestvcards
                    rcnthead={value.recenthead}
                    rcntcrt={value.recentCreator}
                    rcntcst={value.recentCast}
                    rcntgnrs={value.recentGenres}
                    rcntshowis={value.recentShowis}
                    rcntrtng={value.recentRate}
                    rcnttime={value.recentTime}
                    rcntage={value.recentAge}
                    rcntyear={value.recentYear}
                    rcntqual={value.recentQual}
                    rcnthd={value.recentDh}
                    rcntpr={value.recentDpara}
                    img={value.recentimg}
                    value={value}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
