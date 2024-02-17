import React from 'react'
import style from "./Modal.module.css"

export default function Modal({ onClose }) {
    function handleClose(e) {
        if (e.target.classList.contains(style.modalOverlay)) {
            onClose();
        }
    }

    return (
        <div  onClick={handleClose} className={style.modalOverlay}>
            <div className={style.modalContent} >
                <span className={style.info}>
                    <h1 className={style.title}>Congratulations!</h1>
                    <p className={style.cross} onClick={onClose}>x</p>
                </span>
                <span className={style.textWrapper}>
                    <p className={style.text}>Your order has been successfully placed on the website.</p>
                    <p className={style.text}>A manager will contact you shortly to confirm your order.</p>
                </span>
            </div>
        </div>
    );
}