import style from './PriceContainer.module.css'
import React from 'react'

export default function PriceContainer(props) {
    const {price, discount, isProduct, isAllPageList, style: containerStyle} = props

    return (
        <span className={isProduct ? style.product_price_container : style.all_price_container} style={containerStyle}>
            <div className={style.price_wrapper}>
                <p className={isProduct ? style.product_price : style.main_price}>{`$${discount ? discount : price}`}</p>
                <p className={isProduct ? style.discount_product_price : style.discount_main_price}>{discount ? `$${price}` : ''}</p>
            </div>
            
            {discount && isAllPageList && (
                <span className={style.discount_all_block}>{discountPercentage(price, discount)}</span>
            )}

            {discount && isProduct && (
                <span className={style.discount_product_block}>{discountPercentage(price, discount)}</span>
            )}
        </span>
    )
}

function discountPercentage(price, discount) {
    return "-" + Math.round(Number(100 * (price - discount) / price))+"%"
}