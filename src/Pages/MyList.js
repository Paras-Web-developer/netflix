import React from "react";
import Smheader from "../Components/Smheader";
import Footer from "../Components/Footer";
import "../Style/global.css";
import List from "../Components/List";

export default function MyList() {
  return (
    <div className="languageWrapper">
      <div className="languagemain">
        <div className="languageWorkArea">
          <div className="langHeadwrapper">
            <Smheader />
          </div>
          <div className="listWrap">
            <List/>
          </div>
          <div className="langFootwrapper">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
