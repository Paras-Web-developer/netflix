import React, { useEffect, useState } from "react";
import Smheader from "../Components/Smheader";
import Footer from "../Components/Footer";
import "../Style/global.css";
import "../Style/responsive.css";
import Browselang from "../Components/Browselang";
import { useLocation } from "react-router-dom";

export default function Languages() {
  const [language, setLang] = useState();
  const location = useLocation();
  const [searchData, setSearchData] = useState("");
  const lang = (val) => {
    setLang(val);
  };
  return (
    <div className="languageWrapper">
      <div className="languagemain">
        <div className="languageWorkArea">
          <div className="langHeadwrapper">
            <Smheader search={setSearchData} />
          </div>
          <div className="langInptarea">
            <div className="forFix">
              <div className="writenLang">
                <h3 className="languageHead1">Browse by Languages</h3>
              </div>
              <div className="langSelect">
                <div className="forEqual">
                  <label className="langLabel1">Select Your Preference</label>
                  <select
                    className="appLanguage"
                    onChange={(e) => lang(e.target.value)}
                  >
                    <option hidden selected className="allanguages">Language</option>
                    <option className="allanguages">English</option>
                    <option className="allanguages">Malay</option>
                    <option className="allanguages">Turkish</option>
                    <option className="allanguages">Hindi</option>
                    <option className="allanguages">Korean</option>
                    <option className="allanguages">Dutch</option>
                    <option className="allanguages">Polish</option>
                    <option className="allanguages">Swedish</option>
                    <option className="allanguages">Arabic</option>
                    <option className="allanguages">Danish</option>
                    <option className="allanguages">Thai</option>
                    <option className="allanguages">Telugu</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="langcardWrap">
            <Browselang lang={language} search={searchData} />
          </div>
          <div className="langFootwrapper">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
