import React from 'react'
import style from "./OrderDetails.module.css"
import Form from './Form';

export default function OrderDetails(props) {
    const {totalSum, countItem, discountFactor} = props;


    return (
        <div className={style.orderDetails}>
            <h1 className={style.title}>Order Details</h1>
            <p className={style.infoAboutCart}>{countItem > 1 ? `${countItem} items` : `${countItem} item`}</p>
            <div className={style.totalWrapper}>
                <p className={style.infoAboutCart}>Total</p>
                {discountFactor < 1 
                    ?
                    <span className={style.totalPriceWithDiscountWrapper}>
                        <p className={style.totalPriceWithDiscount}>${(discountFactor * totalSum).toFixed(2)}</p>
                        <p className={style.totalPricePrev}>${totalSum}</p>
                    </span>
                    :
                    <p className={style.totalPrice}>${totalSum}</p>
                }
            </div>
            <Form type={"OrdersDetails"}/>
        </div>
    )
}
