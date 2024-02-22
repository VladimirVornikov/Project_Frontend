import style from "./Modal.module.css"
import React from 'react'

export default function Modal({ onClose, typeOfButton }) {
    function handleClose(e) {
        if (e.target.classList.contains(style.modalOverlay)) {
            onClose();
        }
    }

    return (
        <div  onClick={handleClose} className={style.modal_overlay}>
            <div className={style.modal_content} >
                <span className={style.info}>
                    <h1 className={style.title}>Congratulations!</h1>
                    <p className={style.cross} onClick={onClose}>x</p>
                </span>

            {typeOfButton === "OrdersDetails" 
                ? 
                <span className={style.text_wrapper}>
                    <p className={style.text}>Your order has been successfully placed on the website.</p>
                    <p className={style.text}>A manager will contact you shortly to confirm your order.</p>
                </span>
                : 
                <p className={style.text}> You got your 5% discount!</p>
            }
            </div>
        </div>
    );
}