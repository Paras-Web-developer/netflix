import React, { Component, useEffect, useState } from "react";
import { childData } from "../Utils/database";
import "../Style/weekend.css";
import Childcards from "./Childcards";

function Childmov(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(childData);
  }, []);
  useEffect(() => {
    let arr = [];
    if (props.search === "") {
      arr = childData;
    } else {
      let word = props.search.toUpperCase().split("");
      childData.map((val) => {
        let test = val.Name.toUpperCase().split("");
        let match = true;
        for (let i = 0; i < word.length; i++) {
          if (word[i] !== test[i]) {
            match = false;
          }
        }
        if (match) {
          arr.push(val);
        }
      });
      console.log(arr);
      setData(arr);
    }
  }, [props.search]);
  useEffect(() => {
    // console.log(props);
    let arr = [];
    childData.map((val) => {
      if (val.language === props.lang) {
        arr.push(val);
      }
    });
    setData(arr);
  }, [props.lang]);
  return (
    <div className="weekendWrapper2">
      <div className="weekendMain2">
        <div className="weekendArea2">
          <div className="weekendMov2">
            {data.map((elem) => {
              return (
                <Childcards
                  wkndhead={elem.weekendhead}
                  wkndcrt={elem.weekendCreator}
                  wkndcst={elem.weekendCast}
                  wkndgnrs={elem.weekendGenres}
                  wkndshowis={elem.weekendShowis}
                  wkndrtng={elem.weekendRate}
                  wkndtime={elem.weekendTime}
                  wkndage={elem.weekendAge}
                  wkndyear={elem.weekendYear}
                  wkndqual={elem.weekendQual}
                  wkndhd={elem.weekendDh}
                  wkndpr={elem.weekendDpara}
                  week={elem.weekMov}
                  elem={elem}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Childmov;
