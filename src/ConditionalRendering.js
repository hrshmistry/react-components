import React from 'react'

function ConditionalRendering({isLoggedIn}) {
    let message;

    if (isLoggedIn) {
        message = <h1>you are logged in</h1>
    } else {
        message = <h1>please log in</h1>
    }

    return (
        <div>
            {message}
        </div>
    )
}

export default ConditionalRendering
