import React from "react";
import style from "./Input.module.css";

export default function Input(props) {
    const { placeholder, type, id, name, inputType } = props;

    return (
            <input
                className={inputType === "getDiscount" ? style.inputGetdiscount : style.inputOrders}
                placeholder={placeholder}
                type={type}
                id={id}
                name={name}
            />
    )
}
