import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('Hello world!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hãy cho tôi cái ID của bạn/i);
  expect(linkElement).toBeInTheDocument();
});
