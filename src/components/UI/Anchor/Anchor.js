import React from "react";

const Anchor = ({ img, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {img}
    </a>
  );
};

export default Anchor;
