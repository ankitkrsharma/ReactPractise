import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';

describe('Greetings', () => {

  test('Greetings', () => {
    render(<Greetings />);

    const headElement = screen.getByText("Hello React");

    expect(headingElement).toBeInTheDocument();
  });

  test('button in Greetings', () => {
    render(<Greetings />);

    const buttonElement = screen.getByText("Click Me");

    expect(buttonElement).toBeInTheDocument();
  });

});