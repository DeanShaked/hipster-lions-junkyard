import React from "react";
import "./Popup.scss";

const Popup = ({ text, href }) => {
  return (
    <div className="pop-up">
      <div className="pop-up-wrapper">
        <div className="popup-text">{text}</div>
        <a href={href} target="_blank" rel="noreferrer">
          {href}
        </a>
        {/* <div className="ok-btn">{() => closePopup()}</div> */}
      </div>
    </div>
  );
};

export default Popup;
