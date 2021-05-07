import React from 'react'

function UserDetails(props) {
    // console.log({props})

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            {props.children}
        </div>
    )
}


export default UserDetails
