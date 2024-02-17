import React, { useState } from 'react'
import style from './ButtonForm.module.css'

export default function ButtonForm({type}) {
    const [active, setActive] = useState(false)
    function handleActiveButton(e) {
        e.preventDefault()
        setActive(true);
    }

    return (
        <button 
            onClick={handleActiveButton}
            className={
                type === "OrdersDetails" ? style.orderButton : 
                active ? style.getDiscountBtnActive : style.getDiscountBtn}>
                {type === "OrdersDetails" ? "Order" :
                active ? "Request Submitted" : "Get a discount"} 
        </button>
    )
}
