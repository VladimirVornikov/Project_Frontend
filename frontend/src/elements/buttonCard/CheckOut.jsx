import React from "react";
import style from "./CheckOut.module.css";

export default function AddToCart(props) {
    const {color, info} = props;
    return (
        <div>
            <button className={style.CheckOutButton} style={{backgroundColor: color}}>{info}</button>
        </div>
    );
}
