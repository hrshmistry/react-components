import React from 'react'

function UserList() {
    // array of objects
    let users = ["Riya", "Nishu", "Tanvi"]

    return (
        <div>
            {users.map((user, index) => {
                return (<div key = {index}>
                    <h1>Name: {user}</h1>
                </div>)
            })}
        </div>
    )
}

export default UserList
