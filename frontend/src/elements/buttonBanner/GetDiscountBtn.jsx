import React, { useState } from 'react'
import style from './GetDiscountBtn.module.css'

export default function GetDiscountBtn({type}) {
    const [active, setActive] = useState(false)
    function handleActiveButton(e) {
        e.preventDefault()
        setActive(true);
    }

    return (
        <button 
            onClick={handleActiveButton}
            className={
                type === "Orders" ? style.orderButton :
                active ? style.getDiscountBtnActive : style.getDiscountBtn}>
                {type === "Orders" ? "Order" :
                active ? "Request Submitted" : "Get a discount"} 
        </button>
    )
}
