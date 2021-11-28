import React from "react";
import { DropdownProps } from "../../model/model";

const Dropdown = (dropdown: DropdownProps) => {
  const { change, options } = dropdown;
  return (
    <select
      name="dropdown"
      onChange={(event: any) => {
        change(event);
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
