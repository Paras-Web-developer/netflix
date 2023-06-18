import React from "react";
import { Fac, Ins, Tw, Yt } from "../Utils/Images";
import "../Style/footer.css";

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footMain">
        <div className="contactDiv">
          <img alt="" className="fb" src={Fac} />
          <img alt="" className="insta" src={Ins} />
          <img alt="" className="Twit" src={Tw} />
          <img alt="" className="yt" src={Yt} />
        </div>
        <div className="centreArea">
          <div className="centrMrgn">
            <ul className="ul0">
              <li className="li1">Audiio Description</li>
              <li className="li5">Investor Relation</li>
              <li className="li1">Legal Notices</li>
            </ul>
            <ul className="ul2">
              <li className="li2">Help Centre</li>
              <li className="li5">Jobs</li>
              <li className="li2">Cookie Preferences</li>
            </ul>
            <ul className="ul3">
              <li className="li3">Gift Cards</li>
              <li className="li5">Terms of Use</li>
              <li className="li3">Corporate Information</li>
            </ul>
            <ul className="ul4">
              <li className="li4">Media centre</li>
              <li className="li5">Privacy</li>
              <li className="li4">Contact Us</li>
            </ul>
          </div>
          <button className="footerbtn">Service Code</button>
          <button className="footerbtn1">779-824</button>
          <p className="footpara1">
            © 1997-2022 NETFLIX,Inc.e3af7c16-4081-458f-8803-6b2ab66d2bf8
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
