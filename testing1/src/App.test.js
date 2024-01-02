import { render, screen } from '@testing-library/react';
import App from './App';

test('test case 1', () => { 
  render(<App />);
  const text = screen.getByText(/First react test case/i);
  const heading = screen.getByText(/this is shanky/i)
  expect(heading).toBeInTheDocument();
  expect(text).toBeInTheDocument();
})
test('test case 2', () => { 
  render(<App />);
  const text = screen.getByText(/First react test case/i);
  const heading = screen.getByText(/this is shanky/i)
  expect(heading).toBeInTheDocument();
  expect(text).toBeInTheDocument();
})

