import React from "react";
import style from "./Input.module.css";

export default function Input(props) {
    const {placeholder, type, id, name} = props;
    return (
        <input
            className={style.input}
            placeholder={placeholder}
            type={type}
            id={id}
            name={name}
        ></input>
    );
}
