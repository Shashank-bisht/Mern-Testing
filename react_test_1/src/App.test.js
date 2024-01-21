import { render, screen,waitFor } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event'

test('can receive a new user and show it on the a list', async() => {
  render(<App/>);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.type(nameInput, 'shanky'); // Use user.type() for simulating keyboard input

  user.click(emailInput);
  user.type(emailInput, 'shanky@gmail.com'); // Use user.type() for simulating keyboard input

  user.click(button);
  // screen.debug();
// })

// waiting because when button will be click data will not be added immediatly
//In this case, it waits for the appearance of the elements with the text 'shanky' and 'shanky@gmail.com' 
await waitFor(() => {
  const name = screen.getByText('shanky');
  const email = screen.getByText('shanky@gmail.com');

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
})
})
