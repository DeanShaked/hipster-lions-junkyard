import React from "react";
import PropTypes from "prop-types";

const DropdownSelectItem = (props) => {
  const { itemTitle, onSelectFunction, isSelected, icon } = props;

  return (
    <li
      className={
        isSelected
          ? "dropdown-select-item dropdown-select-item-active"
          : "dropdown-select-item"
      }
      onClick={onSelectFunction}
    >
      {/* <div className="selected-svg">{isSelected && <CheckSVG />}</div> */}
      {icon && <div className="dropdown-item-icon">{icon}</div>}
      <p className="dropdown-item-title">{itemTitle}</p>
    </li>
  );
};

DropdownSelectItem.propTypes = {
  itemTitle: PropTypes.string,
  icon: PropTypes.any,
  isSelected: PropTypes.bool,
  onSelectFunction: PropTypes.func,
};

export default DropdownSelectItem;
