import React from 'react'

function ConditionalRendering({isLoggedIn}) {
    if (isLoggedIn) {
        return (
            <div>
                <h1>you are logged in</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>please log in</h1>
            </div>
        )
    }
}

export default ConditionalRendering
