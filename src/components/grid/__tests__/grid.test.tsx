import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Grid from "..";


describe('Grid', () => {

    it('render grid', () => {
        const elements =[["1","2","3"],["4","5","6"],["7","8","9"]];
        const rotate = jest.fn();
        const { getByText } = render(<Grid elements={elements}  rotate={rotate} />);
        const linkElement = getByText(/4/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const elements =[["1","2","3"],["4","5","6"],["7","8","9"]];
        const rotate = jest.fn();
        const { asFragment } = render(<Grid elements={elements}  rotate={rotate} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('click on grid', () => {
        const elements =[["1","2","3"],["4","5","6"],["7","8","9"]];
        const rotate = jest.fn();
        const { getByText } = render(<Grid elements={elements}  rotate={rotate} />);
        const linkElement = getByText(/4/i);
        fireEvent.click(linkElement);
        expect(rotate).toHaveBeenCalled();
    });
})