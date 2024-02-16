import React, { useState } from 'react'
import style from './GetDiscountBtn.module.css'

export default function GetDiscountBtn() {
    const [active, setActive] = useState(false)
    function handleActiveButton(e) {
        e.preventDefault()
        setActive(true);
    }

    return (
        <button 
            onClick={handleActiveButton}
            className={active ? style.getDiscountBtnActive : style.getDiscountBtn}>
                {active ? "Request Submitted" : "Get a discount"} 
        </button>
    )
}
