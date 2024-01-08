import React from 'react'
import { useState } from 'react'
const UserForm = ({onUserAdd}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        onUserAdd({name,email});
        //   data is getting added in this form [{…}, {…}] when onUserAdd is called
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name</label>
            <input id='name' type="text" value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='email' >Email</label>
            <input id='email' type="text" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <button>Add Users</button>
    </form>
  )
}

export default UserForm