import React from "react";
import "./MintButton.scss";

const MintButton = ({ text, cbFunc }) => {
  return cbFunc ? (
    <button className="mint-button" onClick={() => cbFunc()}>
      {text}
    </button>
  ) : (
    <button className="mint-button">{text}</button>
  );

  //   cbFunc ? return
  //    :
};

export default MintButton;
