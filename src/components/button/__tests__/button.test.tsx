import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '..';

describe('Button', () => {

    it('should render', () => {
        const { getByText } = render(<Button>Button</Button>);
        expect(getByText('Button')).toBeInTheDocument();
    });

    it('match snapshot', () => {
        const { asFragment } = render(<Button>Button</Button>);
        expect(asFragment()).toMatchSnapshot();
    })
})