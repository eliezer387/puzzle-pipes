import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "..";

const setup = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ];
  const onChange = jest.fn();
  const utils = render(<Dropdown options={options} change={onChange} />);
  const dropdown = utils.getByDisplayValue("Option 1");
  return {
    dropdown,
    utils,
  };
};

describe("Dropdown", () => {
  it("should render", () => {
    const { dropdown } = setup();
    expect(dropdown).toBeDefined();
  });

  it("should match snapshot", () => {
    const { dropdown } = setup();
    expect(dropdown).toMatchSnapshot();
  });

  it("should call onChange", () => {
    const { dropdown, utils } = setup();
    fireEvent.change(dropdown, { value: "1" });
    expect(utils.getByDisplayValue("Option 1")).toBeDefined();
  });
});
