import {render, screen} from '@testing-library/react'
import UserList from './UserList'

test('render one row per use',()=>{
// Render the component
const users = [
    {name:'shanky', email:'shanky@me.com'},
    {name:'jane', email:'jane@me.com'},
]
render(<UserList users={users}/>)
// find all the rows in the table
const rows = screen.getAllByRole('row')

// Assertion : correct number of rows in the table

expect(rows).toHaveLength(users.length + 1); // Add 1 for the header row

})



test('render the email and name of each user',()=>{
    const users = [
        {name:'shanky', email:'shanky@me.com'},
        {name:'jane', email:'jane@me.com'},
    ]
    render(<UserList users={users}/>)

    for (let user of users){
        const name = screen.getByRole('cell',{name: user.name})
        const email = screen.getByRole('cell',{name: user.email})
        
        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }    
})