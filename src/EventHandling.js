import React from 'react'

function EventHandling() {
    const onClickHandler = (name) => {
        alert("button was clicked by " + name)
    }

    const buttonHandler = () => {
        onClickHandler("Harsh")
        console.log("console harsh");
    }

    return (
        <div>
            <button onClick = {buttonHandler}>Click me</button>
        </div>
    )
}

export default EventHandling
