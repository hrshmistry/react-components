import React from 'react'

const UserDetails = ({name, age, children}) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            {children}
        </div>
    )
}

UserDetails.defaultProps = {
    name: "default-name",
    age: 18
}

export default UserDetails
