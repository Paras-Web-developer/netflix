import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import "../Style/global.css";
import "../Style/responsive.css";
import { useLocation, useNavigate } from "react-router-dom";
import Childmov from "../Components/Childmov";
import Childheader from "../Components/Childheader";

export default function Children() {
  const navigate = useNavigate();
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
            <Childheader search={setSearchData} />
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

          <div className="modeHere">
            <figure>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
              <h1 className="child">
                <b>CHILD MODE!</b>
              </h1>
            </figure>
          </div>

          <div className="langcardWrap">
            <Childmov lang={language} search={searchData} />
          </div>
          <div className="langFootwrapper">
            <Footer />
            <div className="childFix">
              <h1 className="chd">
                <b>Children</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
