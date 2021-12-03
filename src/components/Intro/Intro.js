// App
import React, { useState } from "react";

// Components
import { ReactComponent as LionSvg } from "../../assets/lion.svg";
import MintButton from "../UI/mintButton/MintButton";
import Dropdown from "../UI/Dropdown/Dropdown";
import DropdownSelectItem from "../UI/Dropdown/DropdownSelectItem";

// Styles
import "./Intro.scss";

const Intro = () => {
  const [userSelect, setuserSelect] = useState("How Much ?!?!");
  return (
    <section className="intro">
      <h1 className="title">Hipster Lions Junkyard</h1>
      <div className="intro-wrapper">
        <div className="left-content">
          <div className="text-wrapper">
            <h3>Joint our ride !</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis architecto repellat nesciunt beatae quibusdam
              similique corrupti placeat nostrum nisi aperiam eaque corporis
              quasi at veniam nulla possimus, distinctio quis asperiores odit
              dolor soluta praesentium! Voluptates nam voluptate neque! Commodi
              quod voluptatibus inventore, aliquam eum voluptates facilis nobis,
              eos at, doloribus voluptate quibusdam aut atque blanditiis? Eaque
              iste nobis, quis consequatur eius vitae magni ipsam excepturi
              tenetur aperiam repudiandae vel tempora fugit voluptas similique
              sunt maiores optio quam, maxime voluptatem. A natus blanditiis
              reprehenderit! Maiores repudiandae fuga libero. Natus ea officia
              in explicabo neque non dicta eaque, optio, asperiores minus
              aperiam!
            </p>
          </div>
          <div className="mint-wrapper">
            <Dropdown title="How Much ?!?!" selectedItemName={userSelect}>
              <DropdownSelectItem
                itemTitle="1"
                isSelected={userSelect === 1}
                onSelectFunction={() => {
                  setuserSelect(1);
                }}
              />
              <DropdownSelectItem
                itemTitle="5"
                isSelected={userSelect === 5}
                onSelectFunction={() => {
                  setuserSelect(5);
                }}
              />
              <DropdownSelectItem
                itemTitle="10"
                isSelected={userSelect === 10}
                onSelectFunction={() => {
                  setuserSelect(10);
                }}
              />
            </Dropdown>
            <MintButton />
          </div>
        </div>
        <div className="lion-logo">
          <LionSvg />
        </div>
      </div>
    </section>
  );
};

export default Intro;
