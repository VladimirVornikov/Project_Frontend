import React from "react";
import style from "./DiscountInfoContainer.module.css";
import CheckOut from "../buttonCard/CheckOutBtn.jsx";

export default function DiscountInfoContainer(props) {
    return (
        <div className={style.DiscountInfo}>
            <h1 className={style.InfoTextDiscount}>
                Amazing Discounts <br /> on Garden Products!
            </h1>
            <CheckOut  onClick={props.handleClick} info={"Check out"} width={"218px"}/>
        </div>
    );
}
