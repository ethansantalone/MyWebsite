import { render, screen } from '@testing-library/react';
import App from './App';

test('renders footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/© 2022 — Designed & developed by Ethan Santalone/i);
  expect(linkElement).toBeInTheDocument();
});
