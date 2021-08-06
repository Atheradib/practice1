import React from "react";
import { Dropdown } from "react-bootstrap";

export const Languages = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Languages(English)
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English-Us</Dropdown.Item>
          <Dropdown.Item href="#/action-2">English-Uk</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
