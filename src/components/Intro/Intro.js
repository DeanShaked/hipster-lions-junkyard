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
      <MintButton text="Connect Wallet" />
      <div className="top-intro">
        <h1 className="title">Hipster Lions Junkyard</h1>
      </div>
      <div className="intro-wrapper">
        <div className="left-content">
          <div className="text-wrapper">
            <h3>Joint our ride !</h3>
            <p>
              Hipster Lions Junkyard is a <span>community-driven </span>
              collectibles NFT project. Lion NFTs are made up with over a
              hundred <span> exciting traits </span> of faces, hair, hats, body
              and backgrounds. <br /> Each Lion is a <span>unique</span>,
              non-fungible token (NFT) on the Ethereum blockchain. <br />
              Holding a Lion allows you to participate in coordinating the
              Hipster Lions Junkyard <span>
                Community Treasury.
              </span> <br /> This <span>Treasury </span> will be seeded with{" "}
              <span>420 ETH </span> after the public sale ends! <br /> Holders
              can vote for experiences, activations and campaigns that{" "}
              <span>benefit </span>
              the Hipster Lions Junkyard. <br /> The road map for Hipster Lions
              Junkyard is <span>collaborative </span>and will be decided by Lion
              holders. With imaginative ideas, adequate resources and
              coordination, we believe we can bring Hipster Lions Junkyard to
              every vertical of popular culture! The Hipster Lions Junkyard
              public sales opens on{" "}
              <span>Sunday, October 17th around 7pm PDT.</span> <br /> Join the
              Hipster Lions Junkyard community on Twitter or Discord!
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
            <MintButton text="MINT" />
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
