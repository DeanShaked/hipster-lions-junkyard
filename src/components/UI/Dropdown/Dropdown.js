import React, { useState } from "react";
import { ReactComponent as ArrowDownSvg } from "../../../assets/arrow-down.svg";

import "./Dropdown.scss";

const Dropdown = (props) => {
  const { title, selectedItemName, selectedItemIcon, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-wrapper-relative">
      <div
        className={
          isOpen ? "dropdown-wrapper dropdown-wrapper-open" : "dropdown-wrapper"
        }
      >
        <div className="dropdown-closed" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && selectedItemName ? (
            <div className="selected-dropdown-element selected-dropdown-element-active">
              {selectedItemIcon && (
                <div className="dropdown-item-icon-small">
                  {selectedItemIcon}
                </div>
              )}
              {selectedItemName}
            </div>
          ) : (
            <div className="selected-dropdown-element">{title}</div>
          )}

          <span className="arrow-down">
            <ArrowDownSvg />
          </span>
        </div>

        {isOpen && (
          <div className="dropdown-items" onClick={() => setIsOpen(!isOpen)}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
