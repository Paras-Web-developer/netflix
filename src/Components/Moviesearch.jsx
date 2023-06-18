import React, { useEffect, useState } from "react";
import "../Style/search.css";
import Searchcard from "./Searchcard";
import { movieAll } from "../Utils/database";

export default function Moviesearch(props) {
  const [data, setData] = useState([]);
  useEffect(() => {

    let arr = [];
    if (props.movisearch === "") {
      arr = movieAll;
    } else {
      let word = props.movisearch?.toUpperCase().split("");
      movieAll.map((val) => {
        let test = val.Name?.toUpperCase().split("");
        let match = true;
        for (let i = 0; i < word?.length; i++) {
          if (word[i] !== test[i]) {
            match = false;
          }
        }
        if (match) {
          arr.push(val);
        }
      });
      setData(arr);
    }
  }, [props.movisearch]);
  return (
    <div className="searcWrapper">
      <div className="searchMain">
        <div className="searchArea">
          <div className="searchMovies">
            <div className="seachHead">
              <h1 className="sHead1">Result here</h1>
            </div>
            <div className="resultedMov">
              {data.map((value) => {
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
