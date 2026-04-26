import React from "react";
import "./FooterBar.css";

const FooterBar = ({ showLogos = true }) => {
  return (
    <footer className={`footer-bar${showLogos ? "" : " footer-bar--compact"}`}>
      {showLogos && (
        <div className="footer-logo-group">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/Logo_BUW.png"}
            alt="Logo BUW"
            className="logo-small"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/Logo_TMDT.png"}
            alt="Logo TMDT"
            className="logo-medium"
          />
        </div>
      )}

    </footer>
  );
};

export default FooterBar;
