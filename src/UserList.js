import React from 'react'

function UserList() {
    // array
    let users = ["Riya", "Nishu", "Tanvi"]
    return (
        <div>
            {users.map(user => <h1>{user}</h1>)}
        </div>
    )
}

export default UserList
