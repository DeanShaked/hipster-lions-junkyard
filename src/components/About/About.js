// App
import React from "react";
import { ourCollection, anchors } from "../../utils/Data";

// Components

import AssetItem from "../UI/AssetItem/AssetItem";
import Anchor from "../UI/Anchor/Anchor";

// Styles
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <h1 className="title">Our Collection</h1>
      <div className="about-wrapper">
        {ourCollection.map((asset) => {
          return (
            <div className="asset-card">
              <AssetItem
                title={asset.title}
                description={asset.description}
                img={asset.img}
              />
            </div>
          );
        })}

        {/* Social Media */}
        <div className="social-media">
          <div className="social-media-text">
            Join our community already you junky hipster !
          </div>
          <div className="social-media-icons">
            {anchors.map((anchor) => {
              return <Anchor img={anchor.img} link={anchor.link} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
