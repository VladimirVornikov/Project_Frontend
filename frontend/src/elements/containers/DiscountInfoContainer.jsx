import style from "./DiscountInfoContainer.module.css";
import CheckOut from "../buttonCard/CheckOutBtn.jsx";
import React from "react";

export default function DiscountInfoContainer(props) {
    return (
        <div className={style.discount_info}>
            <h1 className={style.info_text_discount}>
                Amazing Discounts on Garden Products!
            </h1>
            <CheckOut  onClick={props.handleClick} info={"Check out"} width={"218px"}/>
        </div>
    );
}
