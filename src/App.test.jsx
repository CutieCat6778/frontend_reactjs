import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('Hello world!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Phân tích noobs/i);
  expect(linkElement).toBeInTheDocument();
});
