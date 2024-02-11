import React from 'react'
import style from './PriceContainer.module.css'

export default function PriceContainer(props) {
    const {price, discount, isProduct, isAllPageList, style: containerStyle} = props

    return (
        <span className={isProduct ? style.productPriceContainer : style.allPriceConainer} style={containerStyle}>
            <div className={style.priceWrapper}>
                <p className={isProduct ? style.productPrice : style.mainPrice}>{`$${discount ? discount : price}`}</p>
                <p className={isProduct ? style.discountProductPrice : style.discountMainPrice}>{discount ? `$${price}` : ''}</p>
            </div>
            

            {discount && isAllPageList && (
                <span className={style.discountAllBlock}>{discountPercentage(price, discount)}</span>
            )}

            {discount && isProduct && (
                <span className={style.discountProductBlock}>{discountPercentage(price, discount)}</span>
            )}
        </span>
    )
}



function discountPercentage(price, discount) {
    return "-" + Math.round(Number(100 * (price - discount) / price))+"%"
}