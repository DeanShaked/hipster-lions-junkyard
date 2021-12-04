// App
import React from "react";

// React Reveal
import Fade from "react-reveal/Fade";

// Styles
import "./AssetItem.scss";

const AssetItem = ({ title, description, img }) => {
  return (
    <Fade>
      <div className="asset-item">
        <div className="asset-row">
          <div className="asset-col">
            <div className="asset-image">{img}</div>
          </div>
          <div className="asset-col">
            <div className="asset-title">{title}</div>
            <div className="asset-description">{description}</div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AssetItem;
