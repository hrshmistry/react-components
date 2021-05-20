import React from 'react'

function UserList() {
    // array of objects
    let users = [
        {
            name: "Riya",
            age: 21,
            language: "javascript",
            key: 1
        },
        {
            name: "Nishu",
            age: 21,
            language: "C++",
            key: 2
        },
        {
            name: "Tanvi",
            age: 21,
            language: "Perl",
            key: 3
        }
    ]

    return (
        <div>
            {users.map(user => {
                return (<div key = {user.key}>
                    <h1>Name: {user.name}</h1>
                    <h1>Age: {user.age}</h1>
                </div>)
            })}
        </div>
    )
}

export default UserList
