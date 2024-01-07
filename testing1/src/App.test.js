import { fireEvent, render, screen } from '@testing-library/react';
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

test('testing input',()=>{
  render(<App />)
  let checkInput = screen.getByRole('textbox');
  let checkInputPlaceholder = screen.getByPlaceholderText('enter username');

  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute('name', 'username');
  expect(checkInput).toHaveAttribute('id', 'userId');
})
// only means run only this test or test group
//The describe function is used to group related test cases together.
describe.only('test case group', () => {
  test.skip("test case 1",()=>{
    render(<App />)
    let checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("name", "username")
  })
  // test case for event handler
  test('renders input with value and handles onChange', () => {
    // Render the App component
    render(<App />);
  
    // Query the input element
    const inputElement = screen.getByRole('textbox');
  
    // Check if the input element is present
    expect(inputElement).toBeInTheDocument();
  
    // Check the initial value (which is an empty string as per your component's state)
    expect(inputElement).toHaveValue('button');
  
    // Simulate a change in the input value
    fireEvent.change(inputElement, { target: { value: 'TestInputValue' } });
  
    // Check if the input value is updated
    expect(inputElement).toHaveValue('TestInputValue');
  });

// test for click event
test('button click updates state and renders content', () => {
  // Render the App component
  render(<App />);

  // Query the button element
  const buttonElement = screen.getAllByText(/button/i);

  // Check if the button element is present
  expect(buttonElement).toBeInTheDocument();

  // Check the initial state and content
  const initialData = screen.getAllByText(/button/i);
  expect(initialData).toBeInTheDocument();

  // Click the button
  fireEvent.click(buttonElement);

  // Check if the state is updated
  const updatedData = screen.getByText(/Updated Data/i);
  expect(updatedData).toBeInTheDocument();
});
})