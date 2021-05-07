import React from 'react'

function UserDetails(props) {
    // console.log({props})

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>

            {/* when you want to dynamically change the JSX or what is on the screen for the same Component you can use prop.children */}
            {props.children}
        </div>
    )
}


export default UserDetails
