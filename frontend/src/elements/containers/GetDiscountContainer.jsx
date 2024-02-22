import HandImage from "../images/img2-getDiscount.png"
import style from "./GetDiscountContainer.module.css";
import React, { forwardRef } from "react";
import Form from "./Form";

const GetDiscountContainer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={style.get_discount}>
            <h1 className={style.title}>5% off on the first order</h1>
            <div className={style.get_discount_main}>
                <img src={HandImage} alt="No image"  className={style.img}/>
                <Form type={'getDiscount'}/>
            </div>
        </div>
    );
});

export default GetDiscountContainer