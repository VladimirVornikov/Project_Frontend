import React from 'react'
import style from "./OrderDetails.module.css"

export default function OrderDetails(props) {
    const {totalSum, countItem} = props;
    return (
        <div className={style.orderDetails}>
            <h1 className={style.title}>Order Details</h1>
            <p className={style.infoAboutCart}>{countItem > 1 ? `${countItem} items` : `${countItem} item`}</p>
            <div className={style.totalWrapper}>
                <p className={style.infoAboutCart}>Total</p>
                <p className={style.totalPrice}>${totalSum}</p>
            </div>
        </div>
    )
}
