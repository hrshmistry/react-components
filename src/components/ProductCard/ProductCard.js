import React from 'react'
import './ProductCard.css'

function ProductCard({
    imageSrc, 
    imageAlt,
    isBadge,
    badgeName,
    title,
    shortDetail, 
    prize,
    prizeCut,
    discount,
    btnText,
}) {
    const buttonClickHandler = (item) => {
        alert(`${item} added to cart!`)
    }

    return (
        <div class=" card e-comm-card m-1">
            <img class="img-card" src={imageSrc} alt={imageAlt}/>
            {isBadge && <small class="badge solid-badge e-comm-badge">
                {badgeName}
            </small>}
            <div class="e-comm-title">{title}</div>
            <small class="e-comm-content">
                {shortDetail}
            </small>
            <div class="e-comm-price">
                <small>Rs.{prize} </small>
                <small class="e-comm-price-cut">Rs.{prizeCut}</small>
                <small class="e-comm-disc"> ({discount}% OFF)</small>
            </div>
            <button 
                class="btn btn-primary e-comm-btn" 
                onClick={() => buttonClickHandler(title)}> 
                    {btnText}
            </button>
        </div>
    )
}

export default ProductCard