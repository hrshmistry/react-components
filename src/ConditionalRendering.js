import React from 'react'

function ConditionalRendering({isLoggedIn}) {

    return (
        <div>
            {isLoggedIn && <h1>you are logged in</h1>}
        </div>
    )
}

export default ConditionalRendering
