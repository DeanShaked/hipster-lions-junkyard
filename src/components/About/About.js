import React from "react";

import { ReactComponent as DiscordSvg } from "../../assets/discord.svg";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
import { ReactComponent as InstagramSvg } from "../../assets/instagram.svg";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <h1 className="title">about The Team</h1>
      <div className="about-wrapper">
        {/* Social Media */}
        <div className="social-media">
          <div className="social-media-text">
            Join our community already you junky hipster !
          </div>
          <div className="social-media-icons">
            <a
              href="https://discord.gg/sJKtM9AC"
              target="_blank"
              rel="noreferrer"
            >
              <DiscordSvg />
            </a>
            <a
              href="https://twitter.com/HipsterLionsJKY"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterSvg />
            </a>
            <a
              href="https://www.instagram.com/hipsterlions_jky/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramSvg />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
