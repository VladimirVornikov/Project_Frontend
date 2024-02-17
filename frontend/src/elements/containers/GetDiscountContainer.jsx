import React, { forwardRef } from "react";
import style from "./GetDiscountContainer.module.css";
import HandImage from "../images/img2-getDiscount.png"
import Form from "./Form";

const GetDiscountContainer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={style.GetDiscount}>
            <h1 className={style.title}>5% off on the first order</h1>
            <div className={style.GetDiscountMain}>
                <img src={HandImage} alt="No image" />
                <Form type={'getDiscount'}/>
            </div>
        </div>
    );
});

export default GetDiscountContainer