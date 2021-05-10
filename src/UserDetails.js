import React from 'react'
import { PropTypes } from "prop-types";

const UserDetails = ({name, age, children, displayName}) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            {children}
            <button onClick = {() => displayName("Harsh")}>say hi</button>
        </div>
    )
}

// defaultProps
UserDetails.defaultProps = {
    name: "default-name",
    age: 18
}

// prop validation | propTypes
UserDetails.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default UserDetails
