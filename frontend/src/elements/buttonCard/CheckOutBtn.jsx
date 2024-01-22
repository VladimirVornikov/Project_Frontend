import React from "react";
import style from "./CheckOutBtn.module.css";

export default function Button(props) {
    const {color, info, width} = props;
    return (
        <div>
            <button className={style.CheckOutButton} style={{backgroundColor: color, width: width}}>{info}</button>
        </div>
    );
}
