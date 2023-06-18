import React, { useEffect, useState } from "react";
import "../Style/search.css";
import Searchcard from "./Searchcard";
import { mainData } from "../Utils/database";

export default function Search(props) {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    let arr = [];
    if (props.recsearch === "") {
      arr = mainData;
    } else {
      let recword = props.recsearch?.toUpperCase().split("");
      mainData.map((val) => {
        let rectest = val.Name?.toUpperCase().split("");
        let recmatch = true;
        for (let j = 0; j < recword?.length; j++) {
          if (recword[j] !== rectest[j]) {
            recmatch = false;
          }
        }
        if (recmatch) {
          arr.push(val);
        }
      });
      setRecent(arr);
    }
  }, [props.recsearch]);
  return (
    <div className="searcWrapper">
      <div className="searchMain">
        <div className="searchArea">
          <div className="searchMovies">
            <div className="seachHead">
              <h1 className="sHead1">Result here</h1>
            </div>
            <div className="resultedMov">
              {recent.map((value) => {
                return (
                  <Searchcard
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
    </div>
  );
}
