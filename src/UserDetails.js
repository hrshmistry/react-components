import React from 'react'

function UserDetails(props) {
    // console.log({props})
    // props are read only!

    // destructuring props
    const {name, age, children} = props
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>

            {/* when you want to dynamically change the JSX or what is on the screen for the same Component you can use prop.children */}
            {children}
        </div>
    )
}


export default UserDetails
