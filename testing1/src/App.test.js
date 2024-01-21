import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('test case 2', () => { 
  render(<App />);
  const text = screen.getByText(/First react test case/i);
  const heading = screen.getByText(/this is shanky/i)
  expect(heading).toBeInTheDocument();
  expect(text).toBeInTheDocument();
})

// test for username
test('testing username input', () => {
  render(<App />);
// get all the textbox
  const usernameInputs = screen.getAllByRole('textbox', { id: 'username' });
  const usernameInputPlaceholder = screen.getByPlaceholderText('enter username');
//  choose the first textbox because getAllByRole returns an array 
  const usernameInput = usernameInputs[0];
// assertion 
  expect(usernameInput).toBeInTheDocument();
  expect(usernameInputPlaceholder).toBeInTheDocument();
});

// test for email
test('testing email input', () => {
  render(<App />);
  const emailInput = screen.getAllByRole('textbox', { id: 'email' });
  const emailInputPlaceholder = screen.getByPlaceholderText('enter email');
 const emailinput = emailInput[1]
  expect(emailinput).toBeInTheDocument();
  expect(emailInputPlaceholder).toBeInTheDocument();
});



// only means run only this test or test group
//The describe function is used to group related test cases together.
describe.skip('test case group', () => {
  test("test case 1",()=>{
    render(<App />)
    let checkInput = screen.getByRole('textbox',{id:'username'});
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
})