import React from "react";
import style from "./DiscountInfoContainer.module.css";
import CheckOut from "../buttonCard/CheckOutBtn.jsx";

export default function DiscountInfoContainer() {
    return (
        <div className={style.DiscountInfo}>
            <h1 className={style.InfoTextDiscount}>
                Amazing Discounts <br /> on Garden Products!
            </h1>
            <CheckOut color={"rgba(51, 153, 51, 1)"} info={"Check out"} width={"218px"}/>
        </div>
    );
}
