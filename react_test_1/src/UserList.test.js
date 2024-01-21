import {render, screen, within} from '@testing-library/react'
import UserList from './UserList'

//In Jest, the beforeEach function is a setup function that allows you to run some code before each test in a test suite. It is part of Jest's test lifecycle hooks, which include functions like beforeAll, afterAll, afterEach, and beforeEach.

function renderComponent(){
    const users = [
        {name:'shanky', email:'shanky@me.com'},
        {name:'jane', email:'jane@me.com'},
    ]
    render(<UserList users={users}/>)
    return{
        users
    }
}

test('render one row per use',()=>{
// Render the component
renderComponent()
// find all the rows in the table
// const rows = screen.getAllByRole('row')
const rows = within(screen.getByRole('users')).getAllByRole('row')

// Assertion : correct number of rows in the table

expect(rows).toHaveLength(users.length + 1); // Add 1 for the header row

})



test('render the email and name of each user',()=>{
   const {users} = renderComponent();

    for (let user of users){
        // cell is used for table
        const name = screen.getByRole('cell',{name: user.name})
        const email = screen.getByRole('cell',{name: user.email})

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }    
})