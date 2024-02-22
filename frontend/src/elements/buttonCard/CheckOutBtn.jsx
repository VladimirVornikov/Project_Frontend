import style from "./CheckOutBtn.module.css";
import React from "react";

export default function Button(props) {
    const {info, width, onClick} = props;

    return (
        <button 
            onClick={onClick} 
            className={style.check_out_button}
            style={{width: width}}>
                {info}
        </button>
    );
}
