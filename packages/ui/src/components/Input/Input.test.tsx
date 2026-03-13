import { Input } from './Input'
import { screen, render } from '@testing-library/react';

describe('Input', () => {

    it('renders the input field', () => {

        render(<Input placeholder='Email' />);
        expect(screen.getByPlaceholderText('Email'));
    });

    it('renders the label if there is one', () => {
        render (<Input label='Create Account' />);

        expect(screen.getByText("Create Account"));
    })
});