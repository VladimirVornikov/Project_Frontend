import React, { useEffect, useState } from "react";
import style from "./CheckOutBtn.module.css";

export default function Button(props) {
    const {info, width, onClick} = props;

    
    return (
        <button 
            onClick={onClick} 
            className={style.checkOutButton}
            style={{width: width}}>
                {info}
        </button>
    );
}
