import React from 'react'
import './ProductCard.css'

const ProductCard = ({
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
}) => {
    const buttonClickHandler = (item) => {
        alert(`${item} added to cart!`)
    }

    return (
        <div className=" card e-comm-card m-1">
            <img className="img-card" src={imageSrc} alt={imageAlt} />
            {isBadge && <small className="badge solid-badge e-comm-badge">
                {badgeName}
            </small>}
            <div className="e-comm-title">{title}</div>
            <small className="e-comm-content">
                {shortDetail}
            </small>
            <div className="e-comm-price">
                <small>Rs.{prize} </small>
                <small className="e-comm-price-cut">Rs.{prizeCut}</small>
                <small className="e-comm-disc"> ({discount}% OFF)</small>
            </div>
            <button
                className="btn btn-primary e-comm-btn"
                onClick={() => buttonClickHandler(title)}>
                {btnText}
            </button>
        </div>
    )
}

export default ProductCard