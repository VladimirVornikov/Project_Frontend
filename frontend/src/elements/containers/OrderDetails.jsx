import style from "./OrderDetails.module.css"
import React from 'react'
import Form from './Form'

export default function OrderDetails(props) {
    const {totalSum, countItem, discountFactor} = props;

    return (
        <div className={style.order_details}>
            <h1 className={style.title}>Order Details</h1>
            <p className={style.info_about_cart}>{countItem > 1 ? `${countItem} items` : `${countItem} item`}</p>
            <div className={style.total_wrapper}>
                <p className={style.info_about_cart}>Total</p>
                {discountFactor < 1 
                    ?
                    <span className={style.total_price_with_discount_wrapper}>
                        <p className={style.total_price_with_discount}>${(discountFactor * totalSum).toFixed(2)}</p>
                        <p className={style.total_price_prev}>${totalSum}</p>
                    </span>
                    :
                    <p className={style.total_price}>${totalSum}</p>
                }
            </div>
            <Form type={"OrdersDetails"}/>
        </div>
    )
}
