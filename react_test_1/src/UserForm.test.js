import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('It shows two inputs and a button', () => {
  
    // render the component
    render(<UserForm  />)
    //Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')
    //Assertion- make sure the component is doing what we expect 
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
})

test('It calls onUserAdd when the form is submitted',  () => {

      // not best implementation
// const arglist = [];
//  const callback = (...args)=>{
//     arglist.push(args)
//  }

     const mock = jest.fn();
    // try to render my component
    render(<UserForm onUserAdd={mock}/>)

    // find the two inputs
    // const [nameInput, emailInput] = screen.getAllByRole('textbox')

    const nameInput = screen.getByRole('textbox',{
        name: /name/i,
    })
    const emailInput = screen.getByRole('textbox',{
        name: /email/i,
    })
    // simulate click on textbox and  typing in a name
    user.click(nameInput);
     user.keyboard('jane');
 
    // simulate click on textbox and typing in an email
    user.click(emailInput);
    user.keyboard('jane@example.com');

    // find button 
    const button = screen.getByRole('button')

    // simulate clicking the button
    user.click(button)

    // assertion to make sure 'onUserAdd' was called with email and name

    // expect(arglist).toHaveLength(1);
    // expect(arglist[0][0]).toEqual({ name: 'jane', email: 'jane@example.com' });
    
    // expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@example.com' })
})