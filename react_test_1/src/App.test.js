import { render, screen } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event'

 test('can receive a new user and show it on the a list', () => {
  render(<App/>)
  const nameInput = screen.getByRole('textbox',{
    name:/name/i
  })
  const emailInput = screen.getByRole('textbox',{
    name:/email/i
  })
  const button = screen.getByRole('button')

  user.click(nameInput);
  user.keyboard('shanky')
  user.click(emailInput);
  user.keyboard('shanky@gmail.com')

  user.click(button)

  const name = screen.getByText('shanky');
  const email = screen.getByText('shanky@gmail.com');

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
})
